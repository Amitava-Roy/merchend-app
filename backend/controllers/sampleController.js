const Sample = require('../models/Sample');

// Get all samples
const getAllSamples = async (req, res) => {
  try {
    const samples = await Sample.find();
    res.json(samples);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch samples' });
  }
};

// Create a new sample
const createSample = async (req, res) => {
  try {
    const newSample = new Sample(req.body);
    await newSample.save();
    res.status(201).json(newSample);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create sample' });
  }
};

module.exports = {
  getAllSamples,
  createSample,
};