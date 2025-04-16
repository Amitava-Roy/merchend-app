const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: String,
  name: String,
  stage: String,
  lastUpdate: String,
});

module.exports = mongoose.model('Product', productSchema);