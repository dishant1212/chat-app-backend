const mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Messages = mongoose.model('messages', messagesSchema);

module.exports = Messages;
