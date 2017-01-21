/**
 * Created by Best Collateral on 1/21/2017.
 */

//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


//MongoDb
mongoose.connect('mongodb://localhost/rest_test');


// Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// extended fi you run it will a logs in a console when we run


//Routes
app.use('/api', require('./routes/api'));

// start server
app.listen(4000);
console.log('API running on port 4000');
