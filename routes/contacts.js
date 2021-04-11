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
router.put("/:id", auth, async (req, res) => {
	const { name, email, phone, type } = req.body;

	const contactFields = {};

	if (name) contactFields.name = name;
	if (email) contactFields.email = email;
	if (phone) contactFields.phone = phone;
	if (type) contactFields.type = type;

	try {
		let contact = await Contact.findById(req.params.id);

		if (!contact)
			return res.status(404).json({ msg: " Contato não encontrado " });

		if (contact.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: "Não autorizado" });
		}

		contact = await Contact.findByIdAndUpdate(
			req.params.id,
			{
				$set: contactFields
			},
			{ new: true }
		);

		res.json(contact);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Erro de servidor" });
	}
});

// rota    -----  DELETE api/contacts/:id
// descrição ---- deletar contato
// acesso ----- Privado
router.delete("/:id", auth, async (req, res) => {
	try {
		let contact = await Contact.findById(req.params.id);

		if (!contact)
			return res.status(404).json({ msg: " Contato não encontrado " });

		if (contact.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: "Não autorizado" });
		}

		await Contact.findByIdAndRemove(req.params.id);

		res.json({ msg: "Contato foi excluído" });
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Erro de servidor" });
	}
});

module.exports = router;