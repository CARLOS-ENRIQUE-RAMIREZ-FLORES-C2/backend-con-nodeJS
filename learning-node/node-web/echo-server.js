const http = require("http");
const server = http.createServer();

server.on("request", (req, res) =>{
    //codigo primera version
    //res.statusCode = 200;
    //res.setHeader("Content-Type", "text/plain");
    //res.end("HOLA NUEVO SERVER EN NODEJS");
    
    //codigo segunda version
    if( req.method === "POST" && req.url == "/echo"){
        let body = [];
        req.on('data', chunk => {
            body.push(chunk);
        })
        .on('end', () => {
            res.writeHead(200, { "Content-Type": "text/plain" });// enviamos el codigo y el tipo de contenido en una sola funcion
            body =  Buffer.concat(body).toString();
            res.end(body);
        })
    }else{
        res.statusCode = 404;
        res.end();
    }
    
} )
server.listen(3002, () => {
    console.log('Server en el puerto 3002')
});
