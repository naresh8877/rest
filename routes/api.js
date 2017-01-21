/**
 * Created by Best Collateral on 1/21/2017.
 */

//Dependencies
var express = require('express');
var router = express.Router();

//Models
var Product = require('../models/product');

//Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');


// Return router
module.exports = router;
