const express = require('express')
const app = express()
const port = 3002

// import funciones
const { getUserByEmail } = require('./controllers/getUserByEmail.js')

//accesos

app.all('*', function (req, res, next) {
	res.set('Access-Control-Allow-Origin', '*');
	next();
});

app.get('/byEmail/:email', getUserByEmail)

app.listen(port, () => {
    console.log('Server runing on port ', port);
})