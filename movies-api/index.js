/*
video 14 https://platzi.com/clases/1646-backend-nodejs/22026-creando-tu-primer-servidor-con-expressjs/
para llegar ha este punto se tuvo que instalar y configurar las siguientes dependencias

Instalar: express y dotenv

Dependencias de desarrollo
 npm i -D nodemon  eslint eslint-config-prettier eslint-plugin-prettier prettier

 instalar 
 npx mrm lint-staged
*/
const express = require('express');
const app = express();

const { config } = require('./config/index');

app.get('/', (req, res) => {
    res.send('hi');
});


app.get('/json', (req, res) => {
    res.send({'hi':' carlos'});
});

app.listen(config.port , () => {
    console.log(`Corriendo en http://localhost:${config.port}`);
});