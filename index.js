const dotenv = require('dotenv');
const http = require('node:http');
const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');
const messageRouter = require('./routes/messages');
const { connectDB } = require('./connection');
const Messages = require('./modals/messages');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

// app.use(express.static('./public'));
app.use(express.json());
app.use(cors());
app.use('/api', messageRouter);

// connect mongoDB
connectDB(process.env.MONGO_URI);

// Socket io
io.on('connection', (socket) => {
  console.log('A new user connected.');
  socket.on('message', (message) => {
    io.emit('message', message);
  });
});

server.listen(PORT, () => {
  console.log(`Server startded at port on: http://localhost:${PORT}`);
});
