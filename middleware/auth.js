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

		//  Retira o ID do token que foi enviado como payload na hora de criar o token, esse id pode ser usado para fazer as buscas que eu quiser no banco de dados, toda rota que tiver acesso a este middleware, passará por verificação, será checado se o token é valido e será pego o id dentro do token
		req.user = decoded.user;
		
		next();
	} catch (err) {
		res.status(401).json({ msg: "Token inválido" });
	}
};