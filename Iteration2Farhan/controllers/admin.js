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
router.get('/edit_employee/:user_id', function(req, res){
	//res.send("Edit get kaj kore");
	employeeModel.getById(req.params.user_id, function(result){
		res.render('adminHome/edit_employee', {user: result});
	});
});

router.post('/edit_employee/:user_id', function(req, res){
	//res.send("Edit POST kaj kore");
		var user = {
			user_id: req.params.user_id,
			user_name: req.body.user_name,
			user_email: req.body.user_email,
			user_password: req.body.user_password,
			user_phoneno: req.body.user_phoneno
		};

		employeeModel.update(user, function(status){
			if(status){
				res.redirect('/admin/view_employee');
			}else{
				res.redirect('/admin/edit_employee/'+req.params.user_id);
			}
		});
});
router.get('/edit_worker/:user_id', function(req, res){
	//res.send("Edit get kaj kore");
	workerModel.getById(req.params.user_id, function(result){
		res.render('adminHome/edit_worker', {user: result});
	});
});

router.post('/edit_worker/:user_id', function(req, res){
	//res.send("Edit POST kaj kore");
		var user = {
			user_id: req.params.user_id,
			user_name: req.body.user_name,
			user_email: req.body.user_email,
			user_password: req.body.user_password,
			user_phoneno: req.body.user_phoneno
		};

		workerModel.update(user, function(status){
			if(status){
				res.redirect('/admin/view_worker');
			}else{
				res.redirect('/admin/edit_worker/'+req.params.user_id);
			}
		});
});
router.get('/edit_customer/:user_id', function(req, res){
	//res.send("Edit get kaj kore");
	customerModel.getById(req.params.user_id, function(result){
		res.render('adminHome/edit_customer', {user: result});
	});
});

router.post('/edit_customer/:user_id', function(req, res){
	//res.send("Edit POST kaj kore");
		var user = {
			user_id: req.params.user_id,
			user_name: req.body.user_name,
			user_email: req.body.user_email,
			user_password: req.body.user_password,
			user_phoneno: req.body.user_phoneno
		};

		customerModel.update(user, function(status){
			if(status){
				res.redirect('/admin/view_customer');
			}else{
				res.redirect('/admin/edit_customer/'+req.params.user_id);
			}
		});
});



module.exports = router;
