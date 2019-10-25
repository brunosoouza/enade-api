const { questoes } = require("./questoes");
async function update(pesquisaId, objetoMudancas) {
    try {
        await questoes.findOneAndUpdate({ _id: pesquisaId }, objetoMudancas);
        return "feito"
    } catch (error) {
        return "error"
    }
}
exports.update = update;
