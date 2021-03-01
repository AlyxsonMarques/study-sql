const express = require('express');
const router = express.Router();
const mediador = require('../mediador/mediador');
const crypto = require('crypto');

//Login
router.get('/login', async (req, res) => {
	res.render('layouts/login');
})


router.post('/login', async (req, res) => {

	inputEmail = req.body.email;
	inputSenha = req.body.pass;

	const passPromise = mediador.getPass(inputEmail);
	const passArray = await passPromise;

	if(!passArray[0]){
		res.send('Email e/ou senha inválidos')
	}

	else{

	const pass = passArray[0].pass
	let hashInputSenha = crypto.createHash('sha256')
	.update(inputSenha)
	.digest('hex');

	if(hashInputSenha == pass){
		res.send('Autenticado!')
	}
	else{
		res.send('Email e/ou senha inválidos')
	}

	}

})

//Registro
router.get('/register', async (req, res) => {
	res.render('layouts/register');
})

router.post('/register', async (req, res) => { 

	const inputEmail = req.body.email;
	const inputSenha = req.body.pass;

	const passPromise = mediador.getPass(inputEmail);
	const passArray = await passPromise;

	if(passArray[0] == undefined){
		mediador.postInfo(inputEmail, inputSenha)
		res.send('Cadastrado com êxito')
	}
	else{
		res.send('Email já cadastrado')
	}

	//mediador.postInfo(req.body.email, req.body.pass);

})

module.exports = router;