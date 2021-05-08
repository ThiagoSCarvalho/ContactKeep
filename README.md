# projeto-uninove-contact-keep
https://projeto-uninove-contact-keep.herokuapp.com/

# Como instalar
``` Antes de iniciar, você precisa ter o mongoDB configurado em sua máquina  ``` 

- Baixe ou clone esta aplicação;
- Pelo terminal, acesse a pasta raíz do projeto e digite: ` npm i `
- Dentro da pasta raíz crie uma pasta com nome "config", dentro dessa pasta crie dois arquivos com nome de "db.js" e "default.json";
- No arquivo "db.js", insira o seguinte código:
```
const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});
		console.log("conectado com o db");
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

module.exports = connectDB;


```
- Em  "default.json", insira:
```
{
	"mongoURI": "INSIRA O SEU ACESSO AO MONGODB AQUI",
	"secret": "ALGUM VALOR SECRETO AQUI"
}

```
- Após isso, no terminal, digite: ` npm run dev `



## Tecnologias utilizadas
- MongoDB;
- Node.js;
- Express.js;
- React;
- Redux
- Materialize.css
