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
router.post(
	"/",
	[
		auth,
		[
			check("name", "O campo nome é obrigatório")
				.not()
				.isEmpty()
		]
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, phone, type } = req.body;

		try {
			const newContact = new Contact({
				name,
				email,
				phone,
				type,
				user: req.user.id
			});

			const contact = await newContact.save();

			res.json(contact);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Erro no servidor");
		}
	}
);

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