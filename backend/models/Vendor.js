const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
  id: String,
  name: String,
  material: String,
  rating: Number,
  location: String,
});

module.exports = mongoose.model('Vendor', VendorSchema);