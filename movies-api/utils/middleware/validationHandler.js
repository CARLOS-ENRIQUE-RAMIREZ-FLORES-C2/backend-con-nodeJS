/**
 * repositorio de boom para menejo de errores
 * https://github.com/hapijs/boom
 * joi para validacion
 * https://github.com/hapijs/joi
 */
const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

function validate(data, schema) {
    //console.log(schema);
    const { error } = joi.object(schema).validate(data);
    return error;
}

function validationHandler(schema, check = 'body') {
    return function (req, res, next) {
        const error = validate(req[check], schema);
        error ? next(boom.badRequest(error)) : next();
    }
}

module.exports = validationHandler;