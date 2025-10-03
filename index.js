var express = require('express');
var socket = require('socket.io');
var app = express();

app.use(express.static('public'));

var server = app.listen(4000, '0.0.0.0' || 'localhost', () => {
    console.log('server on port http://18.225.31.202:4000');
    console.log('server on port http://localhost:4000');
});


var io = socket(server);
io.on('connection', function(socket){
    console.log('hay una conexion', socket.id);

    socket.on('chat', function(data){
        console.log(data);
        io.sockets.emit('chat', data);
    });

    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
});
