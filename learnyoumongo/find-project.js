// projection 
// only fetch the fields we need
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var age = parseInt(process.argv[2])

mongo.connect(url, function (err, db) {
    if (err) throw err;
    // db gives access to the database
    const myDb = db.db('learnyoumongo');
    var parrots = myDb.collection('parrots');
    //query time in javascript object
    parrots.find({
        age: {
            $gt: age
        }
    }, {
        fields: {
            name: 1,
            age: 1,
            _id: 0

        }
    }).toArray(function (err, docs) {
        if (err) throw err;
        // docs is the query result
        console.log(docs);
        db.close();
    });
});