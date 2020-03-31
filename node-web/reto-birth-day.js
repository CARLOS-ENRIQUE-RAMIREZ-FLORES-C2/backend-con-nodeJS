const http = require('http');
const server = http.createServer();

const ArrayDias = [
        'Lunes', 
        'Martes', 
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sabado',
        'Domingo'];
const ArrayMeses = [
        'Enero', 
        'Febrero', 
        'Marzo', 
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diembre'];

server.on("request", (req, res) => {
    if (req.method === "POST" && req.url == "/birthday") {
        let body = [];
        req.on('data', chunk => {
            body.push(chunk);
        })
            .on('end', () => {
                res.writeHead(200, { "Content-Type": "text/plain" });// enviamos el codigo y el tipo de contenido en una sola funcion
                body = Buffer.concat(body).toString();

                let fecha = body.split('-');
                let mes = parseInt(fecha[1])-1;
                let dia = new Date(body);
                let diaSemana = dia.getDay();

                res.end(`Naciste el día ${ArrayDias[diaSemana]} ${fecha[2]} de ${ArrayMeses[mes]} del año ${fecha[0]}`);

            })
    } else {
        res.statusCode = 404;
        res.end();
    }
})

server.listen(8000, () => console.log('Server corriendo en el puerto 8000'));