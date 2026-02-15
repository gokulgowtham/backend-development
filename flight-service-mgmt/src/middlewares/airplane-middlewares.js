const {StatusCodes}=require('http-status-codes');
const {CommonUtils, ErrorUtils}=require('../utils');
const AppError = ErrorUtils.AppError;
const {ErrorResponse}=CommonUtils;
function validateCreateRequest(req, res, next) {
    if(!req.body.modelNumber){
        ErrorResponse.message = 'Something went wrong while creating the airplane';

        ErrorResponse.error = new AppError('Missing model number', StatusCodes.BAD_REQUEST);
        return res.status(ErrorResponse.error.statusCode).json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest,
}