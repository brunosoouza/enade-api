const { questoes } = require("./questoes");
async function verificaResposta(id, resposta) {
    let rst
    try {
        await questoes.findOne({ _id: id }).then((result) => {
            if (result.correta == resposta)
                rst = "correta"
            else
                rst = "errou"
        });
        return rst
    } catch (error) {
        return "error"
    }
}
exports.verificaResposta = verificaResposta