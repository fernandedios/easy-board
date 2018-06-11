const jwt = require('jsonwebtoken');

const { secretKey, duration } = require('../config');
const User = require('../models/user');
const Board = require('../models/board');

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
        /*  USER */
        async signup(root, { name, email, password, avatar, role }) {
            if (!email || !password) { throw new Error('You must provide an email and password.'); }

            let user = new User();
            user.name = name;
            user.email = email;
            user.password = password;
            user.avatar = avatar;
            user.role = role;

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
        },

        /*  BOARD */
        async addboard(root, { title, description }, { user }) {
            if (!user) {
                throw new Error('You are not logged in');
            }

            try {
                let board = new Board();
                board.title = title;
                board.description = description;
                board.owner = user.user._id;
                await board.save();

                return board;
            }
            catch (err) {
                throw new Error(err);
            }
        },

        async editboard(root, { _id, title, description }, { user }) {
            if (!user) {
                throw new Error('You are not logged in');
            }

            try {
                const foundBoard = await Board.findById(_id);
                if (!foundBoard) { throw new Error('Board not found'); }
                if (foundBoard.owner !== user.user.id) { throw new Error('Board does not belong to current user'); }

                foundBoard.title = title;
                foundBoard.description = description;
                await foundBoard.save();

                return foundBoard;
            }
            catch (err) {
                throw new Error(err);
            }
        }
    }
};

module.exports = resolvers;
