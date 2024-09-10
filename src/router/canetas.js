const express = require("express")
const router = express.Router()

const caneta = require("../controllers/canetas.js")


router.post("/",  (caneta.store))
router.get("/", (caneta.index))
router.get("/:id", (caneta.show))
router.put("/:id", (caneta.store))
router.delete("/:id", (caneta.destroy))

module.exports = router;