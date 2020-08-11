const io = require('socket.io-client');

socket = io('ws://todo-orders.herokuapp.com/');

socket.on('connect', () => {
    console.log(socket.connected);
    socket.emit('message', { 'message': 'client' });
    socket.on('message', data => {
        console.log(data);
    });
});