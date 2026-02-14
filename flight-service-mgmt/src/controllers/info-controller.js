const httpStatusCodes = require('http-status-codes');
const db = require('../models');
const info = (req, res)=>{
    return res.status(httpStatusCodes.OK).json({
        success: true,
        message: "api is live",
        error: {},
        data: {}
    })
}

const dbHealth = async (req, res)=>{
    try {
        await db.sequelize.authenticate();
        return res.status(httpStatusCodes.OK).json({
            success: true,
            message: "DB is connected successfully",
            error: {},
            data: {}
        })
    }
    catch(error){
        return res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "DB is not connected",
            error: error,
            data: {}
        })
    }
}

module.exports = {
    info,
    dbHealth,
}