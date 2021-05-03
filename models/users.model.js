const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  heroPos: String,
  vilPos: String,
  facing: String,
  stackDepth: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
