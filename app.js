var express 	= require('express');
var bodyParser 	= require('body-parser');
var login 		= require('./controller/login');
var app 		= express();

//config
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser());
app.use('/login', login);


app.get('/', function(req, res){
	res.send("Please login here!<br> <a href='/login'> Log in</a> ");
});


app.listen(1000, function(){
	console.log('express server started at port:1000');
});