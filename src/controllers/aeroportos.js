const Aeroporto = require("../models/aeroportos.js")

const store = (req, res) => {
    Aeroporto.create(req.body);
    res.json();
}


const index = async (req, res) => {
        const content = await Aeroporto.find().exec();
        res.status(200).json(content);
};

const show = async (req, res) => {
        const content = await Aeroporto.findById(req.params.id).exec();
        res.status(200).json(content);  
};
const update = (req, res) => {
    Aeroporto.findByIdAndUpdate(req.params.id, req.body, {new: true}).exec();
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