const express = require("express");

const router = express.Router();

// rota    -----  GET api/auth
// descrição ---- Pegar usuario logado
// acesso ----- Privado
router.get("/", (req, res) => {
	res.send("Pegar usuario logado");
});

// rota    -----  POST api/auth
// descrição ---- Autenticar usuario e pegar token
// acesso ----- Publico
router.post("/", (req, res) => {
	res.send("Logar usuario");
});

module.exports = router;