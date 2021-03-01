const db = require('../database/database');

exports.getPassQuery = function (email) {
	return db.query('SELECT pass FROM auth WHERE email = $1', email)
}

exports.postInfoQuery = function(email, senha){
	db.query("INSERT INTO auth (email, pass) VALUES ($1, $2)", [email, senha])
}
