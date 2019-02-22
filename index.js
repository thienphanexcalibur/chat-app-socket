const express  = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = 8000;

io.on('connection', function (socket) {
    console.log('a is connected');
    socket.on('message', (val) => {
        console.log(val);
        io.emit('message', val);
    });
});


app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

http.listen(port, '10.170.77.1', () => {console.log('Connected')});