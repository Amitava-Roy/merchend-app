const mongoose = require('mongoose');

const SampleSchema = new mongoose.Schema({
  id: String,
  productId: String,
  version: Number,
  status: String,
  requestedBy: String,
  date: String,
});

module.exports = mongoose.model('Sample', SampleSchema);