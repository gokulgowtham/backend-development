const httpStatusCodes = require('http-status-codes');
const info = (req, res)=>{
    return res.status(httpStatusCodes.OK).json({
        success: true,
        message: "api is live",
        error: {},
        data: {}
    })
}

module.exports = {
    info
}