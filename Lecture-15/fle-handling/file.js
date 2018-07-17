/**
 * Created by aayusharora on 7/16/18.
 */

const file = require('fs');

function writeFile(dta, cb) {
    file.appendFile('index.txt', dta, function(err) {
        if(err) {
            cb(err);
        }

        file.readFile('index.txt', function(err, data) {
            if (err) throw err;
            cb(data);

        })


    });

}


module.exports = {
    writeFile
}
