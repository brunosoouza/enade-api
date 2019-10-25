//conecta ao mongo
const mongoose = require('mongoose');
function conectar() {
    try {
        mongoose.connect('mongodb+srv://brn:brn@cluster0-phd9n.gcp.mongodb.net/enade?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("conectado ao mongoDB")
    } catch (error) {
        console.log("error ao conectar ao banco de dados", error)
    }
}
exports.conectar = conectar;