const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    # articles: [Article]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    # articles(title: String): [Article]
    # articles(description: String): Article
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): User
  }

  type Class {
    _id: ID
    title: String
    description: String
    content: String
    url: String
    image: String
  }
`;

module.exports = typeDefs;
