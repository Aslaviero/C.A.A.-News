const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://ant123:ant123@caanews.i5ssc2d.mongodb.net/caanews_db?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;

// caanews.i5ssc2d.mongodb.net
