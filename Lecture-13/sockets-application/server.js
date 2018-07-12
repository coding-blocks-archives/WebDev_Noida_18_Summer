/**
 * Created by aayusharora on 7/12/18.
 */
const http = require('http');
const express = require('express');
const app = express();
const socketServer = http.Server(app);
const socket = require('socket.io');

const io = socket(socketServer);

app.use('/', express.static('public'));



console.log(io);
// const server = http.createServer((req,res)=> {
//     res.write("Hello World");
//     res.end();
// });

socketServer.listen(8080, function(){
    console.log("Server is listening on port 8080");

});