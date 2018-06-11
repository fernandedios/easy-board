const jwt = require('jsonwebtoken');

const { secretKey, duration } = require('../config');
const User = require('../models/user');

const resolvers = {
    Query: {
        async me (root, args, { user }) {
            if (!user) {
                throw new Error('You are not logged in');
            }

            return await User.findById(user.user._id);
        }
    },

    Mutation: {
        async signup(root, { name, email, password, avatar }) {
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

                return jwt.sign({ user }, secretKey, { expiresIn: duration });
            }
            catch (err) {
                throw new Error(err);
            }
        },

        async login(root, { email, password }) {
            const user = await User.findOne({ email });
            if (!user) { throw new Error('User not found'); }

            const validPassword = user.comparePassword(password);
            if (!validPassword) { throw new Error('Invalid login credentials'); }

            return jwt.sign({ user }, secretKey, { expiresIn: duration });
        }
    }
};

module.exports = resolvers;
