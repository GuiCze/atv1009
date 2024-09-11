const Refrigerante = require("../models/refrigerantes.js")

const store = (req, res) => {
    Refrigerante.create(req.body);
    res.json();
}


const index = async (req, res) => {
    try {
        const content = await Refrigerante.find().exec();
        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const show = async (req, res) => {
    try {
        const content = await Refrigerante.findById(req.params.id).exec();
        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
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