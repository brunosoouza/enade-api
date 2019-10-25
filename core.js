const { rota } = require("../route/rotas")
const { searchAll } = require("../db/searchAll")
const { conectar } = require("../db/conectar")
const { setPerguntas } = require("../db/addPergunta")
const { apagar } = require("../db/apagar")
const { update } = require("../db/update")
const { searchOne } = require("../db/searchOne")
const { desconectar } = require("../db/desconectar")

const exibeTudo = new rota('GET', '/questoes', async (request, h) => {
    conectar()
    let result = await searchAll().then(result => result)
    desconectar()
    return result
})

const exibeUm = new rota("GET", "/questoes/{id}", async (request, h) => {
    conectar()
    let result = await searchOne(request.params.id).then(rst => rst)
    desconectar()
    return result
})

const addQuestao = new rota("POST", '/questoes', async (request, h) => {
    conectar()
    let result = await setPerguntas(
        request.payload.enunciado,
        request.payload.resA,
        request.payload.resB,
        request.payload.resC,
        request.payload.resD,
        request.payload.correta,
    ).then(result => result)
    desconectar()
    return result

})

const deletar = new rota("DELETE", '/questoes', async (request, h) => {
    conectar()
    let result = await apagar(request.payload.id).then(rst => rst)
    desconectar()
    return result
})

const editar = new rota("PUT", '/questoes', async (request, h) => {
    conectar()
    let novoDocumento = {
        enunciado: request.payload.enunciado,
        resA: request.payload.resA,
        resB: request.payload.resB,
        resC: request.payload.resC,
        resD: request.payload.resD,
        correta: request.payload.correta,
    }
    let result = await update(request.payload.id, novoDocumento)
    desconectar()
    return result

})

const about = new rota("GET", "/about", (request, h) => {
    return h.file("about.html")
})

const _404 = new rota("*", '/{any*}', (request, h) => {
    return '<h1>404 PAGINA/CAMINHO NAO ENCONTRADO</h1>'
})

let container = [
    exibeTudo, exibeUm, addQuestao, deletar, editar, about, _404
]

exports.container = container