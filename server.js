import { fastify } from 'fastify';
import { Database } from './database-users.js';

const server = fastify();
const database = new Database;

server.post('/users', async (request, reply) => {
  const body = request.body; 
  await database.createUser(body);
  return 201;
});

server.listen({
  port: 3333,
})
