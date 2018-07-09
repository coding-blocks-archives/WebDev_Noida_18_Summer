/**
 * Created by aayusharora on 7/9/18.
 */
const server = require('express');
const app = server();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use('/',server.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

var todoList = [];
app.post('/add', function(req,res) {
    let todo = req.body.todo;
    console.log(todo);
    // Get the todoItem using req.query
    // Push In todoList ARRAY
    todoList.push(todo);
    // Response back => req.query
    res.send(todo);
});

app.post('/delete', function(req,res){
    let index = req.body.id;
    todoList.splice(index,1);
    res.sendStatus(200);
});

app.get('/display', function(req,res) {
    // Send TodoList Array to the client
    res.send(todoList);
});

app.listen(5000, function(req,res) {
   console.log("Server running on port 5000");
});