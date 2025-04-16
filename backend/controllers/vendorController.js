const Vendor = require('../models/Vendor');

// Get all vendors
const getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch vendors' });
  }
};

// Create a new vendor
const createVendor = async (req, res) => {
  try {
    const newVendor = new Vendor(req.body);
    await newVendor.save();
    res.status(201).json(newVendor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create vendor' });
  }
};

module.exports = {
  getAllVendors,
  createVendor,
};