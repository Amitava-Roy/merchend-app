const mongoose = require('mongoose');

const ShipmentSchema = new mongoose.Schema({
  id: String,
  orderId: String,
  destination: String,
  status: String,
  carrier: String,
});

module.exports = mongoose.model('Shipment', ShipmentSchema);