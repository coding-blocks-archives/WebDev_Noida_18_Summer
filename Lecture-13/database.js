/**
 * Created by aayusharora on 7/9/18.
 */
const mysql = require('mysql');
const operations = require('./operations');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'arora',
    password : '1234',
    database : 'todoList'
});


function connectDb() {
   connection.connect();
}


function display(getData) {

    operations.sendTodoList(connection, function(data){
       getData(data);

    });

}


module.exports = {
    connectDb,
    display
};