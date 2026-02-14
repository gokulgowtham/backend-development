const express = require('express');
const router = express.Router();
const { AirplaneController } = require('../../controllers');

/**
 * POST /api/v1/airplanes
 * Request Body: { modelNumber: 'Boeing 747', capacity: 400 }
 * Response: { id: 1, modelNumber: 'Boeing 747', capacity: 400 }
 */
router.post('/', AirplaneController.createAirplane);

module.exports = router;