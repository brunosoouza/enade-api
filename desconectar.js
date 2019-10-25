const mongoose = require('mongoose');

function desconectar(params) {
    return mongoose.connection.close().then(() => console.log("conexão fechada"))
}

exports.desconectar = desconectar