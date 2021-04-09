const express = require("express");

const router = express.Router();

const { check, validationResult } = require("express-validator");

const auth = require("./../middleware/auth");

const Contact = require("./../models/Contact");
const User = require("./../models/User");

// rota    -----  GET api/contacts
// descrição ---- Pegar contatos do usuario
// acesso ----- Privado
router.get("/", (req, res) => {
	res.send("Pegar contatos ");
});

// rota    -----  POST api/contacts
// descrição ---- Add contato
// acesso ----- Privado
router.post("/", (req, res) => {
	res.send("Add contatos ");
});

// rota    -----  PUT api/contacts/:id
// descrição ---- Atualizar contato
// acesso ----- Privado
router.put("/:id", (req, res) => {
	res.send("Atualizar contato");
});

// rota    -----  DELETE api/contacts/:id
// descrição ---- deletar contato
// acesso ----- Privado
router.delete("/:id", (req, res) => {
	res.send("Deletar contato");
});

module.exports = router;