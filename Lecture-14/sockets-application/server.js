/**
 * Created by aayusharora on 7/12/18.
 */
const http = require('http');
const express = require('express');
const app = express();
const socketServer = http.Server(app);
const socket = require('socket.io');
const PORT = process.env.PORT || 8080;
const io = socket(socketServer);
var messages = [];
app.use('/', express.static('public'));

io.on('connection', function(sk){
    sk.on('message', function(data){
        messages.push(data);
        io.emit('show', data)

    })

    sk.emit('ms', messages)
})

socketServer.listen(PORT, function(){
    console.log("Server is listening on port "+ PORT);

});