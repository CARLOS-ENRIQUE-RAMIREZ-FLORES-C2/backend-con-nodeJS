const { Transform } = require('stream');

const transformStram =  new Transform({
    transform(chunk, encoding, cb) {
        this.push(chunk.toString().toUpperCase());
        cb();
    }
})

process.stdin.pipe(transformStram).pipe(process.stdout);