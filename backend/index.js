const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const orderRoutes = require("./routes/orderRoutes");
const productRoutes = require("./routes/productRoutes");
const shipmentRoutes = require("./routes/shipmentRoutes");
const vendorRoutes = require("./routes/vendorRoutes");
const sampleRoutes = require("./routes/sampleRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Ensure JSON parsing middleware is used
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connection made.");
  })
  .catch((error) => {
    console.error("connection error:", error);
  });

// Use routes
app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);
app.use("/api/shipments", shipmentRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/samples", sampleRoutes);

// Default error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
