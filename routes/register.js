const express = require('express');
const router = express.Router();

/* POST users listing. */
router.post("/", (req, res) => {
  const user = `login: ${req.body.login} \nsenha: ${req.body.senha}`
  // const user = {
  //   "login": req.body.login,
  //   "senha": req.body.senha
  // }

  res.send(`Novo usuário registrado: ${user}`)
})

module.exports = router;
