var express 	= require('express');
var router 		= express.Router();
var loginModel	= require.main.require('./models/login-model');

router.get('/', function(req, res){
	console.log('login requested!');
	res.render('login/index');
});
router.post('/', function(req, res){
		
		var user ={
			user_email: req.body.user_email,
			user_password: req.body.user_password
		};

		console.log(user.user_email);

		loginModel.validate(user,function(status){
			if(status){
				console.log(status);
				loginModel.getType(user,function(result){
					console.log(result);
					console.log("valid hoi");
					var type = JSON.stringify(result.user_type.toString());
					var status = JSON.stringify(result.account_status.toString());

					if(type == '"admin"' && status == '"active"'){
						req.session.email = req.body.user_email;
						res.redirect('/admin');
					}else
					{
						
					}
				});
			}else{
				res.send('Invalid ID');

			}
		});

		

					
});


module.exports = router;