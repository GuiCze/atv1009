const express = require("express")
const router = express.Router()

const moto = require("../controllers/motos.js")


router.post("/",  (moto.store))
router.get("/", (moto.index))
router.get("/:id", (moto.show))
router.put("/:id", (moto.store))
router.delete("/:id", (moto.destroy))

module.exports = router;