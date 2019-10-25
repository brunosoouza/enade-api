const { rota } = require("../route/rotas")
const { searchAll } = require("../db/searchAll")
const { conectar } = require("../db/conectar")
const { setPerguntas } = require("../db/addPergunta")
const { apagar } = require("../db/apagar")
const { update } = require("../db/update")
const { searchOne } = require("../db/searchOne")

const exibeTudo = new rota('GET', '/questoes', async (request, h) => {
    conectar()
    return await searchAll().then(result => result)
})

const exibeUm = new rota("GET", "/questoes/{id}", async (request, h) => {
    conectar()
    return await searchOne(request.params.id).then(rst => rst)
})

const addQuestao = new rota("POST", '/questoes', async (request, h) => {
    conectar()
    return await setPerguntas(
        request.payload.enunciado,
        request.payload.resA,
        request.payload.resB,
        request.payload.resC,
        request.payload.resD,
        request.payload.correta,
    ).then(result => result)

})

const deletar = new rota("DELETE", '/questoes', async (request, h) => {
    conectar()
    return await apagar(request.payload.id).then(rst => rst)
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
    return await update(request.payload.id, novoDocumento)

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