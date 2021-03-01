const express = require('express');
const app = express();
const port = 3000;

app.use('/', require('./routes/postsRoute'));

app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`);
})

/*Utiliza a rota / para integrar as rotas que foram passadas no requisito
Se a rota for /posts com método GET, ele pega o retorno de um mediador
Responsável por puxar o retorno de uma query select * from table
do database exportado no infra/database.js

database exportada -> query -> mediador -> route -> server.js