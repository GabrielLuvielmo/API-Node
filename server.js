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
    let error = {};

    if (!body.nome) {
        error.nome = 'Faltou o Nome!'
    }
    if (!body.idade) {
        error.idade = 'Faltou a Idade!'
    }
    if (!body.areaFormacao) {
        error.areaFormacao = 'Faltou a Area de Formação!'
    }

    if (body.nome && body.idade && body.areaFormacao){
        await databasePostgres.createDoutores(body);
        return reply.status(201).send('Usuario Criado com Sucesso!');
    } else {
        return reply.status(400).send(error);
    }
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
    let error = {};

    if (!body.nome) {
        error.nome = 'Faltou o Nome!'
    }
    if (!body.idade) {
        error.idade = 'Faltou a Idade!'
    }
    if (!body.areaFormacao) {
        error.areaFormacao = 'Faltou a Area de Formação!'
    }
    if (!doutoresID) {
        error.doutoresID = 'Faltou o ID do Doutor!'
    }

    if (body.nome && body.idade && body.areaFormacao && doutoresID){
        await databasePostgres.updateUser(doutoresID, body);
        return reply.status(204).send();
    } else {
        return reply.status(400).send(error);
    }    
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
