const server = require('express');

const app = server();
const PORT = process.env.PORT || 5000;

let todoList = [];
// Create TodoList Array Here
app.use('/', server.static('./public'));

app.get('/add', function(req,res) {
   let todo = req.query.todo;


   // Get the todoItem using req.query
  // Push In todoList ARRAY
    todoList.push(todo);
    // Response back => req.query
    res.send(todo);
});

app.get('/delete', function(req,res){
   let index = req.query.id;
   todoList.splice(index,1);
   res.sendStatus(200);

});

app.get('/display', function(req,res) {
   // Send TodoList Array to the client
    res.send(todoList);
})


app.listen(PORT, function(){
   console.log("Server running on Port " + PORT);

})