class AppError extends Error {
    constructor(message, statusCode, errors = [], stack = "") {
        super(message);
        this.statusCode = statusCode;
        this.explanation = message;
    }
}

module.exports = {
    AppError,
}