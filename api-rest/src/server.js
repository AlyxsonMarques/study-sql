const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser');
const port = 3000;

	//Using body-parser
	app.use(bodyParser.urlencoded( {extended: false} ))
	app.use(bodyParser.json())
	
	//Using handlebars as template engine.
	app.engine('handlebars', handlebars({defaultLayout: 'main'}))
	app.set('view engine', 'handlebars')

app.use('/', require('./routes/routeManager'))

app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`)
})