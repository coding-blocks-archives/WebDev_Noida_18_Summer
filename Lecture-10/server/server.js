/**
 * Created by aayusharora on 7/5/18.
 */
const express = require('express');
const app = express();

app.get('/', function(req, res){

    res.send("Hello World");
});

app.listen(5000, function(){
   console.log("Server is Listening at port 5000")

});