const jwt = require('jsonwebtoken');

const { secretKey, duration } = require('../config');
const User = require('../models/user');
const Board = require('../models/board');
const List = require('../models/list');
const Item = require('../models/item');

const resolvers = {
    Query: {
        /*  USER */
        async me (root, args, { user }) {
            if (!user) { throw new Error('You are not logged in'); }

            return await User.findById(user.user._id);
        },

        /*  BOARD */
        async getUserBoards (root, args, { user }) {
            if (!user) { throw new Error('You are not logged in'); }

            return await Board.find({ owner: user.user._id });
        },

        async getOtherBoards (root, args, { user }) {
            if (!user) { throw new Error('You are not logged in'); }

            const boards =  await Board.find({});

            return boards.filter((board) => {
                return board.owner !== user.user._id;
            });
        },

        async getAllBoards (root, args, { user }) {
            if (!user) { throw new Error('You are not logged in'); }

            return await Board.find({});
        },

        /*  LIST */
        // board = board._id
        async getLists (root, { board }, { user }) {
            if (!user) { throw new Error('You are not logged in'); }

            try {
                const foundBoard = await Board.findById(board);
                if (!foundBoard) { throw new Error('Board not found'); }
                if (foundBoard.owner !== user.user.id) { throw new Error('Board does not belong to current user'); }

                return await List.find({ board });
            }
            catch (err) {
                throw new Error(err);
            }
        },

        /*  ITEM */
        // list = list._id
        async getItems (root, { list }, { user }) {
            if (!user) { throw new Error('You are not logged in'); }

            try {
                const foundList = await List.findById(list);
                if (!foundList) { throw new Error('List not found'); }

                return await Item.find({ list });
            }
            catch (err) {
                throw new Error(err);
            }
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
        async addBoard(root, { title, description }, { user }) {
            if (!user) { throw new Error('You are not logged in'); }

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

        async editBoard(root, { _id, title, description }, { user }) {
            if (!user) { throw new Error('You are not logged in'); }

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
        },

        async deleteBoard(root, { _id }, { user }) {
            if (!user) { throw new Error('You are not logged in'); }

            try {
                const foundBoard = await Board.findById(_id);
                if (!foundBoard) { throw new Error('Board not found'); }
                if (foundBoard.owner !== user.user.id) { throw new Error('Board does not belong to current user'); }

                return await Board.findOneAndRemove({ _id });
            }
            catch (err) {
                throw new Error(err);
            }
        },

        /*  LIST */
        // board = board._id
        async addList(root, { title, description, board }, { user }) {
            if (!user) { throw new Error('You are not logged in'); }

            try {
                const foundBoard = await Board.findById(board);
                if (!foundBoard) { throw new Error('Board not found'); }
                if (foundBoard.owner !== user.user.id) { throw new Error('Board does not belong to current user'); }

                const list = new List();
                list.title = title;
                list.description = description;
                list.board = board;
                await list.save();

                return list;
            }
            catch (err) {
                throw new Error(err);
            }
        },

        async editList(root, { title, description, _id }, { user }) {
            if (!user) { throw new Error('You are not logged in'); }

            try {
                const foundList = await List.findById(_id)
                if (!foundList) { throw new Error('List not found'); }

                foundList.title = title;
                foundList.description = description;
                await foundList.save();

                return foundList;
            }
            catch (err) {
                throw new Error(err);
            }
        },

        async deleteList(root, { _id }, { user }) {
            if (!user) { throw new Error('You are not logged in'); }

            try {
                const foundList = await List.findById(_id)
                if (!foundList) { throw new Error('List not found'); }

                return await List.findOneAndRemove({ _id });
            }
            catch (err) {
                throw new Error(err);
            }
        },

        /*  ITEM */
        // list = list._id
        async addItem(root, { title, description, list }, { user }) {
            if (!user) { throw new Error('You are not logged in'); }

            try {
                const foundList = await List.findById(list);
                if (!foundList) { throw new Error('List not found'); }

                const item = new Item();
                item.title = title;
                item.description = description;
                item.list = list;
                await item.save();

                return item;
            }
            catch (err) {
                throw new Error(err);
            }
        },

        async editItem(root, { title, description, _id }, { user }) {
            if (!user) { throw new Error('You are not logged in'); }

            try {
                const foundItem = await Item.findById(_id)
                if (!foundItem) { throw new Error('Item not found'); }

                foundItem.title = title;
                foundItem.description = description;
                await foundItem.save();

                return foundItem;
            }
            catch (err) {
                throw new Error(err);
            }
        },

        async deleteItem(root, { _id }, { user }) {
            if (!user) { throw new Error('You are not logged in'); }

            try {
                const foundItem = await Item.findById(_id)
                if (!foundItem) { throw new Error('List not found'); }

                return await Item.findOneAndRemove({ _id });
            }
            catch (err) {
                throw new Error(err);
            }
        }
    }
};

module.exports = resolvers;
