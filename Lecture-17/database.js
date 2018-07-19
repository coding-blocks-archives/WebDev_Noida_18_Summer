/**
 * Created by aayusharora on 7/19/18.
 */
const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const dbName = 'shopping';
let shopping;

function Connection() {
    mongo.connect(url, function(err, client) {
        shopping = client.db(dbName);

    })
}

function Insertdocs(cb) {
    const collection = shopping.collection('documents');
    collection.insertMany([

    ], function(err, result) {

        update(function(data) {
            findDocs(function(data) {
                cb(data)

            });

        })


    })

}

function findDocs(cb) {
    const collection = shopping.collection('documents');
    collection.find({}).toArray(function(err, result) {
       cb(result)

    })

}

function update(cb) {
    const collection = shopping.collection('documents');
    collection.update({a:1},
        {$set: {a:9}}, function(err, result) {


         cb(result);
    })

}

module.exports = {
    Connection,
    Insertdocs
}