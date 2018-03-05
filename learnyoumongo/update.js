/**
 * Exercise 6 - update
 * Update a document
 * database name - process.argv[2]
 */

const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';

const database = process.argv[2]

var userObj = {
    'name': 'Tina',
    'age': 40,
    'username': 'tinatime'
}

mongo.connect(url, function (err, db) {
    if (err) throw err;
    const lynDb = db.db(database);
    var usersCollection = lynDb.collection('users');
    usersCollection.update({
        username: userObj.username
    }, {
        $set: {
            age: userObj.age
        }
    }, function (err, data) {
        if (err) throw err;
    })
    db.close();
});