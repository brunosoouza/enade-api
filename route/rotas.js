class rota {
    constructor(method, path, funcao) {
        this.instucoes = {
            method: method,
            path: path,
            handler: funcao
        }
        return this.instucoes
    }
}

exports.rota = rota