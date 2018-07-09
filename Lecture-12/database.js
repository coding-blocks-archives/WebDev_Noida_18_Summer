/**
 * Created by aayusharora on 7/9/18.
 */
const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'arora',
    password : '1234',
    database : 'todoList'
});


function connectDb() {
   connection.connect();
    connection.query('SELECT * FROM TASK', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
    });
}


module.exports = {
    connectDb
};