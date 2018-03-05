/**
 * Exercise 8 - count
 * count a number of docs that meet a certain criteria
 */

const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';

const databaseName = 'learnyoumongo'
const collectionName = 'parrots'
const age = +process.argv[2]

mongo.connect(url, function (err, db) {
    if (err) throw err
    const lynDb = db.db(databaseName)
    var collection = lynDb.collection(collectionName)
    collection.count({
        age: {
            $gt: age
        }
    }, function (err, count) {
        if (err) throw err
        console.log(count)
    })
    db.close()
})