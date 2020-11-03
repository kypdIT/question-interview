const mongoose = require("mongoose");

const mulchoiceSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true,
  },
  answer: {
    type: String,
    required: true,
  },
  tags: [
    {
      tagId: { type: mongoose.Schema.Types.ObjectId, ref: "Tag" },
      tag: Array,
    },
  ],
  lod: {
    type: Number,
    required: true,
    trim: true,
    min: 1,
    max: 5,
    default: 1,
  },
});

module.exports = mongoose.model("Mul-choice", mulchoiceSchema);
