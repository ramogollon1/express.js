// require express module
var express = require('express')
// ejecutando express
var app = express()
// require http module local
var http = require('http').Server(app)
// definiendo puerto
var port = 8080
// call index '/'
app.get('/', function(req, res) {
	res.send('<h1>Hello World</h1>')
})
// escuchar puerto 8080
http.listen(port, function(err){
	if (err) return console.log(err)
	console.log('servidor escuchando en: ', 8080)
})