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
    board: Board
    title: String!
    description: String!
    board: Board
    items: [Item]
  }

  type Item {
    _id: ID!
    list: List
    title: String!
    description: String!
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
    addItem (title: String!, description: String!, list: String!): Item
    editItem (_id: String!, title: String!, description: String!): Item
    deleteItem (_id: String!): Item
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
