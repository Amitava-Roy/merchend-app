const express = require('express');
const router = express.Router();
const { getAllSamples, createSample } = require('../controllers/sampleController');

router.get('/', getAllSamples);
router.post('/', createSample);

module.exports = router;