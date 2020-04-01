const { Transform } = require('stream');

const capitalizeStream = new Transform({
    transform(chunk, encoding, cb) {
        let string =  chunk
            .toString()
            .trim()
            .split(' ')
            .map( res =>  {
                return typeof res === 'string' ? res.charAt(0).toUpperCase() + res.slice(1) : ''
            })
            .join('');
            
        this.push(string)
        cb();
        
    }
})

process.stdin.pipe(capitalizeStream).pipe(process.stdout);

