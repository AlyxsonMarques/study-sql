const queryManager = require('../querier/queryManager');
const crypto = require('crypto');

exports.getPass = function (email) {
	return queryManager.getPassQuery(email)
}

exports.postInfo = function (email, senha) {
	let hash = crypto.createHash('sha256')
		.update(senha)
		.digest('hex');

	queryManager.postInfoQuery(email, hash)
}