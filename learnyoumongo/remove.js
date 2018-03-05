/**
 * Exercise 7 - remove
 * remove a document with given id
 * database name - process.argv[2]
 */

const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';

const database = process.argv[2]
const collectionName = process.argv[3]
const id = process.argv[4]

mongo.connect(url, function (err, db) {
    if (err) throw err;
    const lynDb = db.db(database);
    var usersCollection = lynDb.collection(collectionName);
    usersCollection.remove({
        _id: id
    }, function (err, data) {
        if (err) throw err;
    })
    db.close();
});