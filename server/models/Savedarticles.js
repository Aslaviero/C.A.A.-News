const mongoose = require("mongoose");
const { Schema } = mongoose;

const SavedarticlesSchema = new Schema({
  SavedarticleID: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  description: {
    type: String,
    requiere: true,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  image: {
    type: Image,
  },
  url: {
    type: String,
  },
});

const Savedarticles = mongoose.model("Savedarticles, SavedarticlesSchema");

module.exports = Savedarticles;
