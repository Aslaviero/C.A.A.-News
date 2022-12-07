const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/caanews_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  console.log(`mongodb connected!`)
);

module.exports = mongoose.connection;
