import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/doutores', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createDoutores(body);
    return reply.status(201).send();
})

// READE
server.get('/doutores', async () => {
    const doutores = await databasePostgres.listDoutores();
    return doutores;
});

// UPDATE
server.put('/doutores/:id', async (request, reply) => {
    const doutoresID = request.params.id;
    const body = request.body;
    await databasePostgres.updateUser(doutoresID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/doutores/:id', async (request, reply) => {
    const doutoresID = request.params.id;
    await databasePostgres.deleteDoutores(doutoresID);

    return reply.status(204).send();
})


server.listen({
    port: 3333
});
