export const errorHandler = (statusCode, message) => {
    const error = new Error();
    error.status_code = statusCode;
    error.message = message;
    return error;
}