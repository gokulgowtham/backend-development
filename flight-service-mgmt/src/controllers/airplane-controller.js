const { AirplaneService } = require('../services');
const { LoggerConfig } = require('../config');
const { CommonUtils } = require("../utils");
const httpStatusCodes = require('http-status-codes');

const { SuccessResponse, ErrorResponse } = CommonUtils;
async function createAirplane(req, res) {
    try {
        // Form data sends everything as strings; coerce capacity to number for DB
        const modelNumber = req.body.modelNumber;
        const capacity =
          req.body.capacity != null ? Number(req.body.capacity) : 0;
        const airplane = await AirplaneService.createAirplane({
            modelNumber,
            capacity,
        });
        SuccessResponse.message = "Successfully created the airplane";
        SuccessResponse.data = airplane;
        return res.status(httpStatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        LoggerConfig.error('createAirplane failed', { error: error.message, stack: error.stack });
        ErrorResponse.error = error;

        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
  createAirplane,
};