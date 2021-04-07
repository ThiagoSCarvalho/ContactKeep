const express = require("express");
const { check, validationResult } = require("express-validator");
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
		check("email", "Por inclua um email válido").isEmail(),
		check(
			"password",
			"Por favor digite uma senha com 6 ou mais carácteres"
		).isLength({ min: 6 })
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		res.send("passou");
	}
);

module.exports = router;