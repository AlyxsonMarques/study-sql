const postsData = require('../data/postsData');

exports.getPosts = function() {
	//faz a mediação enviando o resultado da query para o Route separando
	// as responsabilidades da forma que deve ser
	
	return postsData.getPosts();
};
