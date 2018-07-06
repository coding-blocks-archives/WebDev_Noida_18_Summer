const server = require('express');

const app = server();
const PORT = process.env.PORT || 5000;

app.use('/', server.static('./public'));

app.get('/add', function(req,res) {
  res.send("Task Added");
});

app.listen(PORT, function(){
   console.log("Server running on Port " + PORT);

})