const Moto = require("../models/motos.js")

const store = (req, res) => {
    Moto.create(req.body);
    res.json();
}


const index = async (req, res) => {
    try {
        const content = await Moto.find().exec();
        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const show = async (req, res) => {
    try {
        const content = await Moto.findById(req.params.id).exec();
        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const update = (body, id) => {
    Moto.findByIdAndUpdate(req.paramsid, req.body).exec;
    res.json();
}

const destroy = (req, res) => {
    Moto.findByIdAndDelete(req.params.id).exec;
    res.json();
}

module.exports = {
    store,
    update,
    index,
    show,
    destroy
}