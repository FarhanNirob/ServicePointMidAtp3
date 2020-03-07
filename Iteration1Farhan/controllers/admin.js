var	express		= require('express');
var router		= express.Router();
var loginModel	= require.main.require('./models/login-model');
var employeeModel= require.main.require('./models/employee-model');
var workerModel= require.main.require('./models/worker-model');
var customerModel= require.main.require('./models/customer-model');

router.get('/',function(req,res){
	console.log("Looged in Admin: " +  req.session.email);

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
router.get('/viewworker', function(req, res){
		//res.send("VIEW WORKER");
	
		workerModel.getAll(function(results){
			console.log(results)
			if(results.length > 0){
				res.render('adminHome/view_worker', {workerlist: results});
			}else{
				res.redirect('/admin');
			}
		});
});
router.get('/viewcustomer', function(req, res){
		//res.send("VIEW CUSTOMER");
	
		customerModel.getAll(function(results){
			console.log(results)
			if(results.length > 0){
				res.render('adminHome/view_customer', {customerlist: results});
			}else{
				res.redirect('/admin');
			}
		});
});



module.exports = router;
