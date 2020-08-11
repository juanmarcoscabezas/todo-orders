const io = require('socket.io-client');

socket = io('ws://localhost:3001');

console.log(socket.connected);

socket.on('connect', () => {
    socket.emit('message', { 'message': 'client' });
    socket.on('message', data => {
        console.log(data);
    });
});