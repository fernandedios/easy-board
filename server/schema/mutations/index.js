const graphql = require('graphql');
const jwt = require('jsonwebtoken');
const {
    GraphQLObjectType,
    GraphQLString
} = graphql;

const { secretKey, duration } = require('../../config');
const User = require('../../models/user');
const UserType = require('../types/userType');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString },
                avatar: { type: GraphQLString }
            },

            async resolve(root, { name, email, password, avatar }, req) {
                if (!email || !password) { throw new Error('You must provide an email and password.'); }

                let user = new User();
                user.name = name;
                user.email = email;
                user.password = password;
                user.avatar = avatar;

                try {
                    const foundUser = await User.findOne({ email });
                    if (foundUser) { throw new Error('Email in use'); }
                    await user.save();

                    return user;
                }
                catch (err) {
                    throw new Error(err);
                }
            }
        },

        login: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },

            async resolve(root, { email, password }, req) {
                const user = await User.findOne({ email });
                if (!user) { throw new Error('User not found'); }

                const validPassword = user.comparePassword(password);
                if (!validPassword) { throw new Error('Invalid login credentials'); }

                return { token: jwt.sign({ user }, secretKey, { expiresIn: duration }) };
            }
        }
    }
});

module.exports = mutation;
