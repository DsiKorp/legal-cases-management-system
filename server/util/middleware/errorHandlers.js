const boom = require('@hapi/boom');
const { config } = require('../../config/index');

// Express maneja errores en html, entonces  para saber si se agrega el stack o no
function withErrorStack(error, stack) {
    if (config.dev) {
        return {
            // como llega un boom error, toca colocar ...error para que traiga el error, el status code y el mensaje
            ...error,
            stack,
        };
    }
    return error;
}

function logErrors(err, req, res, next) {
    // eslint-disable-next-line no-console
    console.log(err);
    next(err);
}

function wrapErrors(err, req, res, next) {
    if (!err.isBoom) {
        next(boom.badImplementation(err));
    }

    next(err);
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
    // eslint-disable-line
    // sacamos del err, el output, y de este el statusCode y el payload
    const {
        output: { statusCode, payload },
    } = err;
    //res.status(err.status || 500);
    //res.json(withErrorStack(err.message, err.stack));
    res.status(statusCode);
    res.json(withErrorStack(payload, err.stack));
}

module.exports = {
    logErrors,
    wrapErrors,
    errorHandler,
};