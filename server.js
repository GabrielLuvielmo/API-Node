import { fastify } from 'fastify'
import { DatabasePostgres } from './database-postgres.js';

const server = fastify();

const database = new DatabasePostgres

// database.read() // GET
// database.create() // POST
// database.update() // PUT
// database.delete() // DELETE


// Endpoints
server.get('/', async () => {
  const artigos = database.read();
  return artigos;
});

server.get('/bora-bill', () => {
  return 'RECEBA BORA BILL LÁ ELE!!!';
});

server.listen({
  port: 3333,
})