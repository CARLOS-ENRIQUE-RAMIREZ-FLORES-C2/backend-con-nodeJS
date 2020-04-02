const EventEmmiter = require('events');
class Logger extends EventEmmiter {
    execute(cb) {
        console.log('ejecucion 1')
        this.emit('start');
        cb()
        this.emit('finish')
        console.log('ultima ejecucion')
    }
}

const logger = new Logger();

logger.on('start => ', () => console.log('Starting'))
logger.on('finish => ', () => console.log('Finishing'))
logger.on('finish => ', () => console.log('It`s done'))

//logger.execute(() => console.log("HOLA MUNDO "))
logger.execute(() => setTimeout(() => console.log("HOLA MUNDO "), 1000))