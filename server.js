var express = require('./config/express');

var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function (client) {
    console.log('client connected');

    client.on('join', function (data) {
        console.log(data);
    });

    client.on('messages', function (data) {
        client.emit('broad', data);
        client.broadcast.emit('broad', data);
    });

});

server.listen(3000, function () {
    console.log('server on port 3000');
});
