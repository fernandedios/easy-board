const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  type User {
    _id: String!
    name: String!
    email: String!
    role: String!
    avatar: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    signup (name: String!, email: String!, password: String!, role: String!, avatar: String): String
    login (email: String!, password: String!): String
  }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers });