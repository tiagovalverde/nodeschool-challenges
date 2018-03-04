var fs = require('fs');
var express = require('express');
var app = express();

app.get('/books', function (req, res) {
    fs.readFile(process.argv[3], function (error, content) {
        //fails to read file
        if (error) {
            res.send(500);
        }
        try {
            var books = JSON.parse(content.toString());
            res.json(books);
        } catch (error) {
            //fails to parse
            res.send(500);
        }
    });
});