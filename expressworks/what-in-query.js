var express = require('express');
var app = express();

app.get('/search', function (req, res) {
    // url encoded to JSON
    var query = req.query;
    res.send(query);
});

app.listen(process.argv[2]);