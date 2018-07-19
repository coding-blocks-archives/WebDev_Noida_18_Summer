const express = require('express');
const app = express();
const mongoDb = require('./database');

app.get('/data', function(req,res){

    mongoDb.Insertdocs(function(data){
        console.log(data);
        res.send(data);

    })
});

app.listen(5000, function(){
    console.log("Server listening on port 5000");
    mongoDb.Connection();
});

