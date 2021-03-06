//Import modules
var express = require('express');
var app = express();
var home = require('./express-server/routes/home.js');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var mongoose= require('mongoose');

mongoose.set('debug',true);
//Define constants. Move it to a config file later
const PORT= 3000;

//Mount middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text({type: 'application/graphql'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views')));
app.use('/',home);

//Start server on Port
app.listen(PORT,function(){
	console.log("Server listening on localhost at port: ",PORT);
	mongoose.connect('mongodb://localhost:27017/quotesdb')
})