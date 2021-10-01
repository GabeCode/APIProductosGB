const { set } = require('express/lib/response');
var mongoose = require('mongoose');
var dev_db_url = "mongodb+srv://gblanco:gabrego@gabrieldb.pzad5.mongodb.net/GabrielDB?retryWrites=true";

var mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB)

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('connected to the database'));

var Product = require('./Product');

/// Create

exports.product_create = function (req, res) {

    var product = new Product({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        precio: req.body.precio,
        stock: req.body.stock

    });

    product.save(function (err) {
        if (err) return console.error(err);
        res.send({ 'message': "Created" })
    })
    
}

exports.product_read = function (req, res) {
    Product.findById(req.query.id, function (err, product) {
        if (err) return console.error(err);
        res.send(product)
    })
}

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.query.id, {$set:req.body}, function (err) {
        if (err) return console.error(err);
        res.send({ 'message':"Update"})
    })
}

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.query.id, function (err, Product) {
        if (err) return console.error(err);
        res.send({ 'message': "Deleted" })
    })
}