var express = require('express');
var app = express();
var port = process.argv[2]

app.get('/home', function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.end('Hello World!')
})

app.listen(port)