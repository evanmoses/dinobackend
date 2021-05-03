const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  heroPos: String,
  vilPos: String,
  facing: String,
  stackDepth: Number,
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
