const server = require('express');
const path = require('path');
const app = server();
const bodyParser = require('body-parser');
const todo = [];
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,"views"));

app.use('/', server.static('public'));

app.post('/data', function(req, res){
     todo.push(req.body.color);
     res.sendStatus(200);
});

app.get('/all',function(req,res){

    console.log(todo);
    res.render('main', {items: todo[todo.length - 1]}, function(err, html) {
        res.send(html);

    });
});

app.listen(5000, function(){

    console.log("App listening on port 5000");

});