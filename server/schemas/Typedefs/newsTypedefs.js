const { gql } = require("apollo-server-express");
const newsTypeDefs = gql`{
    id: ID!
    title: String
    description: String
    content: String
    url: String
    publishedAt: String
    sourcename: String
    sourceurl: String
}

type Query {
    
}
`;

module.exports = newsTypeDefs;
