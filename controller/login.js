var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){

	if(req.body.uname == "admin" && req.body.uname == req.body.password){
		res.redirect('/admin');
	}else{
		res.send('Invalid username/password');
	}
	
});

module.exports = router;