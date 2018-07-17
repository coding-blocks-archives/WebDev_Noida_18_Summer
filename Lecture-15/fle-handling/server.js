/**
 * Created by aayusharora on 7/16/18.
 */
const server = require('express');
const app = server();
const bodyParser = require('body-parser');
const file = require('./file');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/', server.static('public'));

app.post('/write', function(req,res) {
   file.writeFile(req.body.todo, function(data) {
       if(data) {
           res.send(data);
       }
       else {
           throw data;
       }

   });

})

app.listen(5000, function(){

    console.log("App listening on port 5000");

});