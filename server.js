import {  fastify } from 'fastify'

const server = fastify();

server.get('/', () => {
    return 'Eu sei onde você mora...'
})

server.listen({
    port: 3333
})