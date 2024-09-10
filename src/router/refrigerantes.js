const express = require("express")
const router = express.Router()

const refrigerante = require("../controllers/refrigerantes.js")


router.post("/",  (refrigerante.store))
router.get("/", (refrigerante.index))
router.get("/:id", (refrigerante.show))
router.put("/:id", (refrigerante.store))
router.delete("/:id", (refrigerante.destroy))

module.exports = router;