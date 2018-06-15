const tester = require('graphql-tester').tester;
const { ObjectID } = require('mongodb');

const app = require('../server');
const create = require('./create');
const { users, boards, populateUsers, populateBoards } = require('./seed');

const defaultUser = {
    _id: new ObjectID(),
    name: 'Default User',
    email: 'user@tester.com',
    password: 'password101',
    role: 'user',
    avatar: 'http://www.gravatar.com/avatar/?d=mp'
};

const defaultBoard = {
    _id: new ObjectID(),
    title: 'Default Board',
    description: 'Default description'
};

describe('User', () => {
    const self = this;

    beforeAll(() => {
        self.test = tester({
            server: create(app),
            url: `/api`,
            contentType: 'application/json'
        });
    });

    beforeEach(populateUsers);

    it ('should signup a new user', (done) => {
        const { name, email, password, role, avatar } = defaultUser;

        self.test(
            JSON.stringify({
                query: `
                    mutation signup($name: String!, $email: String!, $password: String!, $role: String!, $avatar: String!) {
                        signup (name: $name, email: $email, password: $password, role: $role, avatar: $avatar)
                    }
                `,
                variables: { name, email, password, role, avatar }
            }),
            { jar: true }
        )
        .then((res) => {
            self.token = res.data;
            expect(res.status).toEqual(200);
            expect(res.success).toEqual(true);
            expect(res.data.signup).toBeDefined();
            done();
        })
        .catch(err => done(err));
    });

    it('should NOT signup a new user if email exists', (done) => {
        const { name, password, role, avatar } = defaultUser;
        const email = users[0].email;

        self.test(
            JSON.stringify({
                query: `
                    mutation signup($name: String!, $email: String!, $password: String!, $role: String!, $avatar: String!) {
                        signup (name: $name, email: $email, password: $password, role: $role, avatar: $avatar)
                    }
                `,
                variables: { name, email, password, role, avatar }
            }),
            { jar: true }
        )
        .then((res) => {
            self.token = res.data;
            expect(res.success).toEqual(false);
            expect(res.data.signup).toEqual(null);
            done();
        })
        .catch(err => done(err));
    })
});

describe('Board', () => {
    const self = this;

    beforeAll(() => {
        self.test = tester({
            server: create(app),
            url: `/api`,
            contentType: 'application/json'
        });
    });

    beforeEach(populateUsers);
    beforeEach(populateBoards);

    it('should add new board, when owner, title and description are valid', (done) => {
        const { title, description } = defaultBoard;
        const owner = users[0]._id;

        self.test(
            JSON.stringify({
                query: `
                    mutation addBoard($title: String!, $description: String!) {
                        addBoard (title: $title, description: $description)
                    }
                `,
                variables: { title, descriptioni, owner }
            }),
            { jar: true }
        )
        .then((res) => {
            self.token = res.data;
            expect(res.status).toEqual(200);
            expect(res.success).toEqual(true);
            expect(res.data.addBoard).toBeDefined();
            done();
        })
        .catch(err => done(err));
    })
});
