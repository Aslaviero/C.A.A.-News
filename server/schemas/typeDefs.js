const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type User {

  _id: ID
    username: String
    email: String
    password: String
    posts: [Post]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(postId: ID!): Post
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!)
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
