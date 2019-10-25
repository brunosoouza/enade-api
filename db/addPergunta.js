const { questoes } = require("./questoes");

async function setPerguntas(_enunciado, _resA, _resB, _resC, _resD, _correta) {
    try {
        let rst = ""
        let addPergunta = new questoes({
            enunciado: _enunciado,
            resA: _resA,
            resB: _resB,
            resC: _resC,
            resD: _resD,
            correta: _correta
        });
        await addPergunta.save()
            .then(() => rst = "feito")
            .catch((err) => rst = err);
        return rst
    } catch (error) {
        return "error"
    }
}
exports.setPerguntas = setPerguntas;
