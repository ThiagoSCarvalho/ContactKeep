const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
	// pegar o token do header
	const token = req.header("x-auth-token");

	// verifica se o token não existe
	if (!token) {
		return res.status(401).json({ msg: "Autorização negada. Sem token" });
	}

	try {
		const decoded = jwt.verify(token, config.get("secret"));

		req.user = decoded.user;
		next();
	} catch (err) {
		res.status(401).json({ msg: "Token inválido" });
	}
};