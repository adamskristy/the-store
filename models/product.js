// load mongoose
const mongoose = require('mongoose')


// add a shortcut to Schema
const Schema = mongoose.Schema

// create our Schema
const productSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String }, 
    price: { type: Number,  required: true }, 
    descr: { type: String, required: true },
    qty: {type: Number, min: 0, required: true },
    inStock: { type: Boolean, required: true}
})

// create a Model from our Schema
const Product = mongoose.model('Product', productSchema)

// export our Model
module.exports = Product