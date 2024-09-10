const Refrigerante = require("../models/refrigerantes.js")

const store = (req, res) => {
    Refrigerante.create(req.body);
    res.json();
}


const index = (req, res) => {
    const content = Refrigerante.find().exec;
    res.json(content);
};

const show = (req, res) => {
    const content = Refrigerante.findById(req.params.id).exec;
    res.json(content);
}
const update = (body, id) => {
    Refrigerante.findByIdAndUpdate(req.paramsid, req.body).exec;
    res.json();
}

const destroy = (req, res) => {
    Refrigerante.findByIdAndDelete(req.params.id).exec;
    res.json();
}

module.exports = {
    store,
    update,
    index,
    show,
    destroy
}