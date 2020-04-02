const fs  = require("fs");
const server = require('http').createServer();

server.on("request", (req, res) => {
    const src = fs.createReadStream("./big.txt")
    src.pipe(res);
})

server.listen(3000, () => console.log('Corriendo en el puerto 3000'))