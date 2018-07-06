const server = require('express');

const app = server();
const PORT = process.env.PORT || 5000;


// Create TodoList Array Here
app.use('/', server.static('./public'));

app.get('/add', function(req,res) {
  res.send("Task Added");
   // Get the todoItem using req.query
  // Push In todoList ARRAY
    // Response back => req.query
});

app.get('/display', function(req,res) {
   // Send TodoList Array to the client

})


app.listen(PORT, function(){
   console.log("Server running on Port " + PORT);

})