/**
 * Created by aayusharora on 7/17/18.
 */
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
}

function signUp(username, hash, cb) {
    connection.query(`Insert into users (username,password) values (?,?)`, [username, hash], function(err, results) {

         cb(results);
    })

}

module.exports = {
    connectDb,
    signUp
};