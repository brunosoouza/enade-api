const { questoes } = require("./questoes");
async function searchAll() {
    try {
        return await questoes.find({}).then((result) => result);
    } catch (error) {
        return "error"
    }
}
exports.searchAll = searchAll;


