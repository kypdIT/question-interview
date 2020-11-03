const mongoose = require("mongoose");

const essaySchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  answer: {
    type: Array,
    required: true,
    trim: true,
  },
  time: {
    type: String,
    required: true,
    trim: true,
  },
  mark: {
    type: Number,
    required: true,
    trim: true,
    min: 1,
    max: 10,
    default: 0,
  },
  reviews: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      review: String,
    },
  ],
});

module.exports = mongoose.model("Essay", essaySchema);

//id: { type: mongoose.Schema.Types.ObjectId, ref: "Mul-choice"},
