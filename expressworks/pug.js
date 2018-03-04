var path = require('path')
var express = require('express');
var app = express();
var port = process.argv[2]
var pug = process.argv[3]

//dirname - abs path of this file
//join - produce cross platform path
app.set('views', path.join(__dirname, 'templates'))

//tell epress what template engine to use
app.set('view engine', 'pug')

app.get('/home', function (req, res) {
    res.render('index', {
        date: new Date().toDateString()
    })
})

app.listen(port);