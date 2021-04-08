const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("./../middleware/auth");

const config = require("config");

const User = require("./../models/User");

const router = express.Router();

// rota    -----  GET api/auth
// descrição ---- Pegar usuario logado
// acesso ----- Privado
router.get("/", auth, async (req, res) => {
	try {
		// Eu não quero que retorne a senha, então uso o select
		const user = await await User.findById(req.user.id).select("-password");
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Ocorreu um erro no servidor");
	}
});

// rota    -----  POST api/auth
// descrição ---- Autenticar usuario e pegar token
// acesso ----- Publico
router.post(
	"/",
	[
		check("email", "Por favor inclua um email válido").isEmail(),
		check("password", "Senha inválida").exists()
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			if (!user) {
				return res.status(400).json({ msg: "Email inexistente" });
			}

			// verifica se a senha recebida é a mesma senha (hasheada) registrada no banco de dados
			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res
					.status(400)
					.json({ msg: "Senha inválida, tente novamente" });
			}

			const payload = {
				user: {
					id: user.id
				}
			};

			jwt.sign(
				payload,
				config.get("secret"),
				{
					expiresIn: 360000
				},
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.error(err.message);
			res.status(500).json({ msg: "Houve um erro ao tentar acessar a conta" });
		}
	}
);

module.exports = router;