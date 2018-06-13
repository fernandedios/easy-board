const { ObjectID } = require('mongodb');
const User = require('../../models/user');
const Board = require('../../models/board');

const users = [
    {
        _id: new ObjectID(),
        name: 'Tester One',
        email: 'tester1@tester.com',
        password: 'password',
        role: 'user',
        avatar: 'http://www.gravatar.com/avatar/?d=mp'
    },
    {
        _id: new ObjectID(),
        name: 'Tester Two',
        email: 'tester2@tester.com',
        password: 'password',
        role: 'user',
        avatar: 'http://www.gravatar.com/avatar/?d=mp'
    }
];

const boards = [
    {
        _id: new ObjectID(),
        title: 'Board One',
        description: 'Board description',
        owner: users[0]._id
    },

    {
        _id: new ObjectID(),
        title: 'Board Two',
        description: 'Board description',
        owner: users[1]._id
    }
];

const populateUsers = (done) => {
    jest.setTimeout(8000);

    User.remove({})
    .then(() => {
        let userOne = new User(users[0]).save();
        let userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo])
    })
    .then(() => done());
};

const populateBoards = (done) => {
    jest.setTimeout(8000);

    Board.remove({})
    .then(() => {
        return Board.insertMany(boards);
    })
    .then(() => done());
};

module.exports = { users, boards, populateUsers, populateBoards };
