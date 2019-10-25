//interface para perguntas
const mongoose = require('mongoose');
let perguntaSchema = new mongoose.Schema({
    enunciado: String,
    resA: String,
    resB: String,
    resC: String,
    resD: String,
    correta: String
});
exports.perguntaSchema = perguntaSchema;
