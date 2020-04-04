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
const moviesApi = require('./routes/movies')

const { logErrors, errorHandler } = require('./utils/middleware/errorHandlers');


app.use(express.json());
moviesApi(app);
//middleware siempre van al final de las rutas
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, () => {
    console.log(`Corriendo en http://localhost:${config.port}`);
});