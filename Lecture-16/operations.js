/**
 * Created by aayusharora on 7/17/18.
 */
const bcrypt = require('bcrypt');
const database = require('./database');

const saltRounds = 10;
function encrypt(username, password, cb) {

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {

            database.signUp(username, hash, function(data) {
                cb(data);

            })
        });
    });

}


module.exports = {
    encrypt
}