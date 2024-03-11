const { Schema } = require("mongoose");
const mongoose = require('mongoose');



const ProductSchema = new Schema({
    name : String,
    description : String,
    price : Number,
    picture : String

})

module.exports = mongoose.model('Product', ProductSchema);
