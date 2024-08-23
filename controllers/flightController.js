const express = require('express');
const router = express.Router();
const { calculateFlightRequests } = require('../services/flightService');

router.post('/requests', async (req, res) => {
  try {
    const { polygonBoundary, requestData } = req.body;
    const matchingRequests = await calculateFlightRequests(polygonBoundary, requestData);
    res.json(matchingRequests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to process flight requests' });
  }
});

module.exports = router;