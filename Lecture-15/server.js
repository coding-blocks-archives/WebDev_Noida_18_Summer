const server = require('express');
const path = require('path');
const app = server();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,"views"));


app.post('/all',function(req,res){

    console.log(req.body.items);
    res.render('index', {items: req.body.items}, function(err, html) {
        res.send(html);

    });
});

app.listen(5000, function(){

    console.log("App listening on port 5000");

});