var express = require('express');
var socket = require('socket.io');

var app = express();

var server = app.listen('8000', () => {
    console.log('listening on port 8000');
})

var io = socket(server);

io.on('connection', function (socket) {
    console.log('made socket connection');
    socket.on('message', function (data) {
            io.sockets.emit('typing', true);
            setTimeout(()=>{
              io.sockets.emit('chat', generateMessage());
            }, Math.random()*7000);
    });
})

function generateMessage() {
    var text = "",
    possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    length = Math.round((Math.random()*10)) || 3;

    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }