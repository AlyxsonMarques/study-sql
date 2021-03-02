const pgp = require('pg-promise')();

//instancia o db de acordo com os parametros
const db = pgp({
	user: 'postgres',
	password: '12345',
	host: 'localhost',
	port: '5432',
	database: 'clientes'
});

//exporta o db já aberto
module.exports = db;


//dica: aspas duplas no postgresql (shell) se referem a coluna no insert into