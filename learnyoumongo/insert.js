/**
 * Exercise 5 - Insert
 * Insert a document into the 'docs' collection
 * JSON document with 'firstName' and 'lastName'
 * 
 */
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

var firstName = process.argv[2]
var lastName = process.argv[3]

mongo.connect(url, function (err, db) {
    if (err) throw err;
    const myDb = db.db('learnyoumongo');
    var docsCollection = myDb.collection('docs');
    //document
    var userDocument = {
        firstName: firstName,
        lastName: lastName
    }
    //insert
    docsCollection.insert(userDocument, function (err, res) {
        if (err) throw err
        console.log(JSON.stringify(userDocument))
    })
    db.close()

});