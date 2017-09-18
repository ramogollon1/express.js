var express = require('express')
var app = express()
var http = require('http').Server(app)

var port = 8080

app.use(express.static(__dirname + '/'))
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html')
})

http.listen(port, function (err) {
	if (err) return console.log(err)
	console.log('servidor escuchando en: ', 8080)
})