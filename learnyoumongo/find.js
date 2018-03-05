var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db) {
    if (err) throw err;
    const myDb = db.db('learnyoumongo');
    var parrots = myDb.collection('parrots');
    parrots.find({
        age: {
            $gt: +process.argv[2]
        }
    }).toArray(function (err, docs) {
        if (err) throw err;
        console.log(docs);
        db.close();
    });
});