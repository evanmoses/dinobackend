const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  heroPos: String,
  vilPos: String,
  facing: String,
  stackDepth: Number,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
