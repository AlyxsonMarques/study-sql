const express = require('express');
const router = express.Router();
const postsService = require('../service/postsService');


//database.db have table clients

router.get('/posts', async function(req, res) {
	//res.end() encerra a response;
	
	const posts = await postsService.getPosts();
	//transforma o resultado da query em json e envia
	res.json(posts);

	//res.json() responde com um json
});

router.get('/posts/:id', async function(req, res) {
	res.send('Hello, World!');

});
router.post('/posts', async function(req, res) {

});
router.put('/posts/:id', async function(req, res) {

});
router.delete('/posts/:id', async function(req, res) {

});

//put é para atualização, equivalente a UPDATE (CRUD)



module.exports = router;