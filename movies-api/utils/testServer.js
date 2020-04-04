/**
 * servidor pequeño para hacer test
 * usamos los paquetes
 * instalar: npm i -D mocha supertest sinon proxyquire
 */
const express = require('express');
const supertest = require('supertest');

function testServer(route) {
  const app = express();
  route(app);
  return supertest(app);
}
module.exports = testServer;