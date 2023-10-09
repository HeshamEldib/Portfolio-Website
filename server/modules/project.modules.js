const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  linkProject: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Project", projectSchema);
