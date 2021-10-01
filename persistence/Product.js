var mogoose = require("mongoose");
var Schema = mogoose.Schema;

var ProductSchema = new Schema({
    codigo: { type: String, required: true},
    nombre: { type: String, required: true},
    precio: { type: Number, required: true},
    stock: { type: Number, required: true},
})

module.exports = mogoose.model('Product', ProductSchema);