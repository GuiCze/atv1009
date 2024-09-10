const db = require("../db.js")

const Schema = db.Schema;

const refrigeranteSchema = new Schema({
    cor: {
        type: String,
        required: true
    },
    ehBic: {
        type: Boolean,
        required: true
    }
});

const Refrigerante = db.model("Refrigerante", refrigeranteSchema);


module.exports = Refrigerante;