const express = require('express');
const app = express();
const port = 3000;

//.get é o metodo http, o parâmetro é a URI, ou seja
//quando o método http é executado em determinada URI, ele responde com a callback function.
//.all é para todas os tipos de método http


//res.status(404).send('Sorry cant find that!');
//se o status for 404 send x;

app.use('/', require('./routes/postsRoute'));

//app.use carrega a função passada no segundo parâmetro no caso "require('./route/postsRoute')"
//na rota passada no primeiro parâmetro.

app.listen(port, () => {
	console.log(`Listening app at http://localhost:${port}`)
});