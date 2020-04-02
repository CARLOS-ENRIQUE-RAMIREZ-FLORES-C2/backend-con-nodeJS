// %s
// %d
// %j
/*
 console.log("Un %s y un %s %j", "humano","perro", 4);

 console.info("[info] hello world");
 console.warn("[warn] hello error");

 console.assert(42 == "42");
 console.assert(42 === "42");

 console.trace("[trace ]hello"); indica la linea en que esta el error
*/
const util = require("util");
const debuglog = util.debuglog("foo");
debuglog("Hola soy debuflog y usame en entorno de desarrollo para debuger apps");