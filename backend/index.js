const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');
const shipmentRoutes = require('./routes/shipmentRoutes');
const vendorRoutes = require('./routes/vendorRoutes');
const sampleRoutes = require('./routes/sampleRoutes');

const app = express();
const PORT = 3000;
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connection made.");
  });

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
app.use('/api/shipments', shipmentRoutes);
app.use('/api/vendors', vendorRoutes);
app.use('/api/samples', sampleRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});