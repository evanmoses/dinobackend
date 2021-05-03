const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  heroPos: String,
  vilPos: String,
  facing: String,
  stackDepth: Number,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
