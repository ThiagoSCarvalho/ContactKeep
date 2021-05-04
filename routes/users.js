const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require("config");

const User = require("./../models/User");


const router = express.Router();

// rota    --------  POST api/users
// descrição ------- Registrar usuario
// acesso --------- Público
router.post(
	"/",
	[
		check("name", "Por favor digite o nome")
			.not()
			.isEmpty(),
		check("email", "Por favor inclua um email válido").isEmail(),
		check(
			"password",
			"Por favor digite uma senha com 6 ou mais carácteres"
		).isLength({ min: 6 })
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			if (user) {
				return res.status(400).json({ msg: "Usuário já existe" });
			}

			user = new User({
				name,
				email,
				password
			});

			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			await user.save();

			const payload = {
				user: {
					id: user.id
				}
			}

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
			)

		} catch (err) {
			console.error(err.message);
			res
				.status(500)
				.json({ msg: "Houve um erro ao tentar cadastrar o usuario" });
		}
	}
);

module.exports = router;