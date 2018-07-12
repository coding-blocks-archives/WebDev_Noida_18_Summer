/**
 * Created by aayusharora on 7/12/18.
 */


function sendTodoList(connection, data) {

    connection.query('SELECT * FROM TASK', function (error, results, fields) {
        if (error) throw error;
        data(results);
    });

}

module.exports = {
    sendTodoList
}