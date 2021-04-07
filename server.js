const express = require("express");
const connectDB = require("./config/db");

const app = express();

// conectar banco de dados
connectDB();

// iniciar Middleware
app.use(express.json({ extended: false }));


app.get("/", (req, res) => {
	res.json({ msg: "Olá Planeta, esse é o Contact Keeper usando redux para a uninove 2021" });
});

// rotas
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));