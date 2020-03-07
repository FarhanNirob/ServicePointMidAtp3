var	express		= require('express');
var router		= express.Router();
var loginModel	= require.main.require('./models/login-model');
var employeeModel= require.main.require('./models/employee-model');

router.get('/',function(req,res){
	console.log("Requested : ADMIN " +  req.session.email);

	var user ={
		email : req.session.email,
	};		
	res.render('adminHome/index',{admin : user});
	//res.send('admin');
	
});

router.get('/viewemployee', function(req, res){
		//res.send("VIEW EMPLOYEE");
	
		employeeModel.getAll(function(results){
			console.log(results)
			if(results.length > 0){
				res.render('adminHome/view_employee', {userlist: results});
			}else{
				res.redirect('/admin');
			}
		});
});
// router.get('/view_employee', function(req, res){
	
// 		userModel.getAll(function(results){
// 			if(results.length > 0){
// 				res.render('home/view_employee', {userlist: results});
// 			}else{
// 				res.redirect('/adminHome');
// 			}
// 		});
// });

module.exports = router;
