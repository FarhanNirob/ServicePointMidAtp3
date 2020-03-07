var	express		= require('express');
var router		= express.Router();
var loginModel	= require.main.require('./models/login-model');

router.get('/',function(req,res){
	console.log("Requested : ADMIN " +  req.session.email);

	var user ={
		email : req.session.email,
	};		
	res.render('adminHome/index',{admin : user});
	//res.send('admin');
	
});

module.exports = router;
