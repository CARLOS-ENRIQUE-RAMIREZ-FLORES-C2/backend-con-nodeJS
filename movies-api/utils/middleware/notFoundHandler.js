/**
 * repositorio de boom para menejo de errores
 * https://github.com/hapijs/boom
 */
const boom = require('@hapi/boom');

function notFoundHandler(req, res) {
    const { output: 
        { statusCode, payload } 
    } = boom.notFound();

    res.status(statusCode).json(payload)
}

module.exports = notFoundHandler;