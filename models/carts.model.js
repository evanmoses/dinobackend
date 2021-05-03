const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  heroPos: String,
  vilPos: String,
  facing: String,
  stackDepth: Number,
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
