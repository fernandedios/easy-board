const User = require('../../models/user');

const users = [
    {
        name: 'Tester One',
        email: 'tester1@tester.com',
        password: 'password',
        role: 'user',
        avatar: 'http://www.gravatar.com/avatar/?d=mp'
    },
    {
        name: 'Tester Two',
        email: 'tester2@tester.com',
        password: 'password',
        role: 'user',
        avatar: 'http://www.gravatar.com/avatar/?d=mp'
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

module.exports = { users, populateUsers };
