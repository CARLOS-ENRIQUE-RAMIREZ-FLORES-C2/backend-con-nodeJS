const util = require('util');

const helloPluto = util.deprecate(() => {
    console.log('hello pluto')
}, 'pluto is deprecated. It is not a planet anymore [USAME PARA AVISAR AL USUARIO QUE ALGUNAS FUNCIONES DESAPARECERAN EN UN FUTURO O YA ESTAN ABSOLETAS]');


helloPluto();