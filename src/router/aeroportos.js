const express = require("express")
const router = express.Router()

const aeroporto = require("../controllers/aeroportos.js")
const cep_endereco = require("../middlewares/cep_endereco.js")


router.post("/",cep_endereco,  aeroporto.store)
router.get("/", aeroporto.index)
router.get("/:id", aeroporto.show)
router.put("/:id", aeroporto.store)
router.delete("/:id", aeroporto.destroy);

module.exports = router;