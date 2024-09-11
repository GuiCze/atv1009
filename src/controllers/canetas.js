const Caneta = require("../models/canetas.js")

const store = (req, res) => {
    Caneta.create(req.body);
    res.json();
}


const index = async (req, res) => {
    try {
        const content = await Caneta.find().exec();
        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const show = async (req, res) => {
    try {
        const content = await Caneta.findById(req.params.id).exec();
        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
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