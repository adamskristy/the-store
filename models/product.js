// load mongoose
const mongoose = require('mongoose')


// add a shortcut to Schema
const Schema = mongoose.Schema

// create our Schema
const productSchema = new Schema({
    title: { type: String, required: true }, 
    entry: { type: String, required: true },
    price: { type: String, required: true },
    quantity: {type: Number, min:0, max: 25, required: true },
    inStock: Boolean
})

// create a Model from our Schema
const Product = mongoose.model('Product', productSchema)

// export our Model
module.exports = Product