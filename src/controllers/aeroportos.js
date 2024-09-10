const Aeroporto = require("../models/aeroportos.js")

const store = (req, res) => {
    Aeroporto.create(req.body);
    res.json();
}


const index = (req, res) => {
    const content = Aeroporto.find().exec;
    res.json(content);
};

const show = (req, res) => {
    const content = Aeroporto.findById(req.params.id).exec;
    res.json(content);
}
const update = (body, id) => {
    Aeroporto.findByIdAndUpdate(req.paramsid, req.body).exec;
    res.json();
}

const destroy = (req, res) => {
    Aeroporto.findByIdAndDelete(req.params.id).exec;
    res.json();
}

module.exports = {
    store,
    update,
    index,
    show,
    destroy
}