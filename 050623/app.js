const express = require('express')
const http = require('http');
const socketIO = require('socket.io');
const path = require('path')
const userList = require('./userList')
const PORT = 5000;
const app = express();
const server = http.createServer(app)


const io = socketIO(server)

io.on('connection', (socket) => {
    console.log('New user connected');
  
    // Handle chat messages
    socket.on('chat message', (data) => {
      console.log(`Received message: ${data.message}`);
      const recipientSocket = io.sockets.sockets.get(data.recipientId);
      if (recipientSocket) {
        recipientSocket.emit('chat message', {
          senderId: socket.id,
          message: data.message,
        });
      }
    });
  
    // Handle disconnections
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
// Serve the static files
app.use(express.static(path.join(__dirname, '/')));

server.listen(PORT, () => {
    console.log(`Server is listening at : ${PORT}`);
})