const Caneta = require("../models/canetas.js")

const store = (req, res) => {
    Caneta.create(req.body);
    res.json();
}


const index = (req, res) => {
    const content = Caneta.find().exec;
    res.json(content);
};

const show = (req, res) => {
    const content = Caneta.findById(req.params.id).exec;
    res.json(content);
}
const update = (body, id) => {
    Caneta.findByIdAndUpdate(req.paramsid, req.body).exec;
    res.json();
}

const destroy = (req, res) => {
    Caneta.findByIdAndDelete(req.params.id).exec;
    res.json();
}

module.exports = {
    store,
    update,
    index,
    show,
    destroy
}