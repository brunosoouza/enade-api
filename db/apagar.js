const { questoes } = require("./questoes");
async function apagar(pesquisaId) {
    try {
        await questoes.findOneAndDelete({ _id: pesquisaId });
        return "feito";
    } catch (error) {
        return "error"
    }
}
exports.apagar = apagar;
