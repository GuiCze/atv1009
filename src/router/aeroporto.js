const express = require("express")
const router = express.Router()

const aeroporto = require("../controllers/aeroporto.js")
const cep_endereco = require("../middlewares/cep_endereco.js");
const nomezator = require("../middlewares/nomezator.js")

router.post("/",cep_endereco,nomezator, (req, res) => {
    const body = req.body;
    const code = aeroporto.store(body);
    res.status(code).json();
});

router.get("/", (req, res) => {
    const code = aeroporto.index();
    res.json(code);
})

router.get("/:id", (req, res) => {
    const code = aeroporto.show(req.params.id);
    res.json(code);
});

router.put("/:id",nomezator,cep_endereco,  (req, res) => {
    const body = req.body;
    const code = aeroporto.update(body, req.params.id);
    res.status(code).json();
})

router.delete("/:id", (req,res) => {
    aeroporto.destroy(req.params.id);
    res.json();
})

module.exports = router;