const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  id: String,
  customer: String,
  deadline: String,
  status: String,
  value: Number,
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;