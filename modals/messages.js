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
  status: {
    type: String,
    require: true,
  },
  createdAt: {
    type: String,
    require: true,
  },
  id: {
    type: String,
    require: true,
  },
});

const Messages = mongoose.model('messages', messagesSchema);

module.exports = Messages;
