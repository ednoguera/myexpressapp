const express = require('express');
const router = express.Router();


//Função middleware que será executada após requisição do usuário na rota
const registerResponse = (req, res, next) => {
	console.log(`Usuário registrado com sucesso!`)
	return next()
}

/* POST users listing. */
router.post("/",  registerResponse, (req, res) => {
	const user = `login: ${req.body.login} \nsenha: ${req.body.senha}`
	res.send(`Novo usuário registrado: ${user}`)
})

module.exports = router;
