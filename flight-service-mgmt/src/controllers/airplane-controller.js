const { AirplaneService } = require('../services');
const { LoggerConfig } = require('../config');
const httpStatusCodes = require('http-status-codes');

async function createAirplane(req, res) {
    try {
        // Form data sends everything as strings; coerce capacity to number for DB
        const modelNumber = req.body.modelNumber;
        const capacity = req.body.capacity != null ? Number(req.body.capacity) : undefined;
        if (!modelNumber || capacity == null || Number.isNaN(capacity)) {
            return res.status(httpStatusCodes.BAD_REQUEST).json({
                success: false,
                message: 'Missing or invalid modelNumber or capacity.',
                error: {},
                data: {},
            });
        }
        const airplane = await AirplaneService.createAirplane({
            modelNumber,
            capacity,
        });
        return res.status(httpStatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created the airplane',
            error: {},
            data: airplane,
        });
    } catch (error) {
        LoggerConfig.error('createAirplane failed', { error: error.message, stack: error.stack });
        return res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Something went wrong while creating the airplane',
            error: {
                message: error.message,
                name: error.name,
            },
            data: {},
        });
    }
}

module.exports = {
    createAirplane,
}