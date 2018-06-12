const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  type User {
    _id: ID!
    name: String!
    email: String!
    role: String!
    avatar: String!
  }

  type Board {
    _id: ID!
    title: String!
    description: String!
    owner: User
    members: [User]
    lists: [List]
  }

  type List {
    _id: ID!
    title: String!
    description: String!
    board: Board
  }

  type Query {
    me: User
    getUserBoards: [Board]
    getOtherBoards: [Board]
    getAllBoards: [Board]
    getLists: [List]
  }

  type Mutation {
    signup (name: String!, email: String!, password: String!, role: String!, avatar: String): String
    login (email: String!, password: String!): String
    addBoard (title: String!, description: String!): Board
    editBoard (_id: String!, title: String!, description: String!): Board
    deleteBoard (_id: String!): Board
    addList (title: String!, description: String! board: String!): List
    editList (_id: String!, title: String!, description: String!): List
    deleteList (_id: String!): List
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
