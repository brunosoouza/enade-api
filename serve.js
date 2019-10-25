'use strict'

const { container } = require("./core/core")
const Hapi = require('@hapi/hapi');
const Path = require('path');
const inert = require('@hapi/inert');

const init = async () => {
    const server = Hapi.server({
        port: 3500,
        host: "localhost",
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    })
    await server.register(inert);
    server.route(container)

    await server.start();
    console.log(`servidor rodando na porta ${server.info.uri}`)
}

init()
