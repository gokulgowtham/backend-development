const express = require('express');
const router = express.Router();
const { InfoController } = require('../../controllers');
const airplaneRoutes = require('./airplane-routes');

router.get('/info', InfoController.info);

router.get('/db-health', InfoController.dbHealth);

router.use('/airplanes', airplaneRoutes);

module.exports = router;