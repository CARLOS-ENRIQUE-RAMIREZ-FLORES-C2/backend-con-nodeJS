/**
 * script para imprimir lo que escribimos en consola
 */
const { Writable } = require('stream');// modulo nativo 

const writableStream = new Writable({
    write(chunk, encoding, cb){
        console.log(chunk.toString())
        cb()
    }
})

process.stdin.pipe(writableStream)