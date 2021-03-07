const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.statusCode = 200
    res.send("Admin panel")
})

router.get("/:id", (req, res) => {
    res.statusCode = 200
    res.send(`Acessando painel administrativo com usuário: ${req.params.id}`)
})

module.exports = router