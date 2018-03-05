/**
 * Exercise 9 - aggregate
 * Aggegation allows operations on multiple documents fields
 * $group operators: $avg, $first, $last, $max, $min, $push, $addToSet
 */

const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'

const databaseName = 'learnyoumongo'
const collectionName = 'prices'
const size = process.argv[2]

mongo.connect(url, function (err, db) {
    if (err) throw err
    const lynDb = db.db(databaseName)
    var collection = lynDb.collection(collectionName)

    collection.aggregate([{
        // simimlar to query. allows to select the documents to meet the criteria
        // in this case, we get all documents with a specific size
        $match: {
            size: size
        }
    }, {
        // allows to run operations with the matched documents provided
        $group: {
            _id: 'average', //our own title
            average: {
                $avg: '$price'
            }
        }
    }]).toArray(function (err, results) {
        if (err) throw err
        if (!results.length) {
            throw new Error('No results found!')
        }
        console.log(Number(+results[0].average).toFixed(2))
    })
    db.close()
})