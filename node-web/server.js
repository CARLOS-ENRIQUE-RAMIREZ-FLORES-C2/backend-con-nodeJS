const http = require("http");
const server = http.createServer();

server.on("request", (req, res) =>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("HOLA NUEVO SERVER EN NODEJS");
} )
server.listen(3000, () => {
    console.log('Server en el puerto 3000')
});
