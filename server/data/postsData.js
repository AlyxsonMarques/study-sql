const db = require('../infra/database.js');

exports.getPosts = function () {
	//faz a query no db retornando uma promisse para o mediador
	return db.query('SELECT * FROM clientes');
};
