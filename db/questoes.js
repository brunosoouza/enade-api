//definindo coleçao
const mongoose = require('mongoose');
const { perguntaSchema } = require("./perguntaSchema");
const questoes = mongoose.model("questoes", perguntaSchema);
exports.questoes = questoes;