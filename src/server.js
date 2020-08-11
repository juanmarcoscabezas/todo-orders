// src/server.ts
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
require('./models');

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({ 'message': 'Welcome' });
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.emit('message', {'messgae': 'Server'});
  socket.on('message', data => {
    console.log(data);
  });

  socket.on('disconnect', () => {
    console.log('User is gone')
  });
});

server.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});

