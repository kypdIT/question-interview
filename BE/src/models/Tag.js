const mongoose = require("mongoose");

const tagSchema = mongoose.Schema({
  tagName: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Tag", tagSchema);
