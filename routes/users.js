const express = require("express");

const router = express.Router();

// rota    -----  POST api/users
// descrição ---- Registrar usuario
// acesso ----- Público
router.post("/", (req, res) => {
	res.send("Registrar usuario");
});

module.exports = router;