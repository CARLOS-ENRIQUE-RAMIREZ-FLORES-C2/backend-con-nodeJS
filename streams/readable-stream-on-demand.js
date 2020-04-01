const { Readable } = require('stream')

const readableStream = new Readable({
    read(size) {
        setTimeout(() => {
            if (this.currenCharCode > 90){
                this.push(null)
                return ;
            }
            this.push(String.fromCharCode(this.currenCharCode++))
        }, 100);
    }
});

readableStream.currenCharCode = 65;

readableStream.pipe(process.stdout)