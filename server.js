var express = require('express')
var app = express()

app.use(express.static(__dirname))

var server = app.listen(5678)