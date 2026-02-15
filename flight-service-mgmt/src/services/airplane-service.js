const { AirplaneRepository } = require('../repositories');
const { ErrorUtils } = require("../utils");
const { StatusCodes } = require("http-status-codes");
const airplaneRepository = new AirplaneRepository();
const AppError = ErrorUtils.AppError;

async function createAirplane(data){
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
          let explanation = [];
          error.errors.forEach((err) => {
            explanation.push(err.message);
          });
          throw new AppError(explanation.join(", "), StatusCodes.BAD_REQUEST);
        }
        throw new AppError(
          "Something went wrong while creating the airplane",
          StatusCodes.BAD_REQUEST,
        );
    }
}

module.exports = {
    createAirplane,
}