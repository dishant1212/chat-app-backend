const Messages = require('../modals/messages');

const handlerAddMessages = async (req, res) => {
  try {
    const message = req.body;
    console.log('message', message);
    if (!message) {
      res.status(400).json({ success: false, message: 'Message not recived.' });
    }
    const newMessage = await Messages.create(message);
    console.log('newMessage', newMessage);
    res.status(201).json({
      success: true,
      message: 'Message added successfully',
      data: newMessage,
    });
  } catch (error) {
    // console.error('Error adding message:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

const handlerGetMessages = async (req, res) => {
  try {
    const messages = await Messages.find().sort({ createdAt: 1 });
    console.log(messages);
    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

const handlerDeleteAllMessages = async (req, res) => {
  try {
    const result = await Messages.deleteMany({});

    res.status(200).json({
      success: true,
      message: 'All messages deleted successfully.',
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    console.error('Error deleting all messages:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports = {
  handlerAddMessages,
  handlerGetMessages,
  handlerDeleteAllMessages,
};
