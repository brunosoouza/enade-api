const { questoes } = require("./questoes");
async function searchOne(id) {
    try {
        return await questoes.findOne({ _id: id }).then((result) => result);
    } catch (error) {
        return "error"
    }
}

exports.searchOne = searchOne