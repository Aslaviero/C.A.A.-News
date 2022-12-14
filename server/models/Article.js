const { Schema, model } = require("mongoose");

const articleSchema = new Schema({
  articleTitle: {
    type: String,
  },
  articleDescription: {
    type: String,
  },
  articleContent: {
    type: String,
  },
  articleImage: {
    type: Image,
  },
  articleurl: {
    type: String,
  },
  articlepublishedAt: {
    type: String,
  },
});

const Article = model("Article, articleSchema");

module.exports = Article;
