const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

// function validate(data, schema) {
//     const { error } = joi.validate(data, schema);
//     return error;
// }

const validate = (data, schema) => {
    const { error } = joi.object(schema).validate(data);

    return error;
};

// recibe un esquema y una opción de donde chequear
function validationHandler(schema, check = 'body') {
    // retorna una función Middleware
    return function(req, res, next) {
        // se determina si validate retorna un error, se toma el request oara que chequee el body, y pasamos el esquema
        const error = validate(req[check], schema);

        //error ? next(new Error(error)) : next();
        // devuelve el error de que los datos no son validos
        error ? next(boom.badRequest(error)) : next();
    };
}

module.exports = validationHandler;