const mongoose = require("mongoose");

const Messages = new mongoose.Schema({
  senderName: {
    type: String,
    required: [true, "please enter your name before sending."],
  },
  senderEmail: {
    type: String,
    required: [true, "please enter your email before sending."],
  },
  msgSubject: {
    type: String,
  },
  msgBody: {
    type: String,
    required: [true, "please enter a body or content before sending."],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Message", Messages);
