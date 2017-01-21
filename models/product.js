/**
 * Created by Best Collateral on 1/21/2017.
 */
//Dependencies
var restful  = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var productSchema = new mongoose.Schema({
    name: String,
    sku: String,
    price: Number
});

//Return model
module.exports = restful.model('Products', productSchema);
