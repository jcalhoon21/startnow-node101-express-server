// import files and packages up here
    
    // requiring express framework
        var express = require('express');
        var morgan = require('morgan');
        var data = require('./data.json')

// create your express server below

    // operating web server below
        var app = express();

// add your routes and middleware below -- middleware is any transaction from client to server

app.use(morgan('dev'));

app.use('/', express.static('public'));

app.get('/data', function (req, res){
    res.json(data);
})



// finally export the express application
module.exports = app;
