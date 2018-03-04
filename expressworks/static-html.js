var path = require('path')
var express = require('express');
var app = express();
var port = process.argv[2]
var html_file = process.argv[3]

app.use(express.static(html_file || path.join(__dirname, 'public')))

app.listen(port)