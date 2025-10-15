const express = require('express');
const {
  handlerGetMessages,
  handlerAddMessages,
  handlerDeleteAllMessages,
} = require('../controllers/messages');

const router = express.Router();

router.get('/messages', handlerGetMessages); // Get all messages
router.post('/messages', handlerAddMessages); // Add a new message
router.delete('/messages', handlerDeleteAllMessages); // Add a new message

module.exports = router;
