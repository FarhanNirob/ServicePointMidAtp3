var	express		= require('express');
var router		= express.Router();
var loginModel	= require.main.require('./models/login-model');
var employeeModel= require.main.require('./models/employee-model');
var workerModel= require.main.require('./models/worker-model');
var customerModel= require.main.require('./models/customer-model');
var noticeModel= require.main.require('./models/notice-model');

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
			user_id: req.body.userid,
			user_name: req.body.username,
			user_email: req.body.useremail,
			user_password: req.body.userpassword,
			user_phoneno: req.body.userphoneno,
		};
		console.log(user);
		employeeModel.update(user, function(status){
			if(status){
				 res.redirect('../viewemployee');
				//res.send("SUCCESSFUL");
			}else{
				 res.redirect('/edit_employee/'+req.params.user_id);
				//res.send("FAILED");
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
			user_id: req.body.userid,
			user_name: req.body.username,
			user_email: req.body.useremail,
			user_password: req.body.userpassword,
			user_phoneno: req.body.userphoneno
		};

		workerModel.update(user, function(status){
			if(status){
				res.redirect('../viewworker');
			}else{
				res.redirect('/edit_worker/'+req.params.user_id);
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
			user_id: req.body.userid,
			user_name: req.body.username,
			user_email: req.body.useremail,
			user_password: req.body.userpassword,
			user_phoneno: req.body.userphoneno
		};

		customerModel.update(user, function(status){
			if(status){
				res.redirect('../viewcustomer');
			}else{
				res.redirect('/edit_customer/'+req.params.user_id);
			}
		});
});

router.get('/notice', function(req, res){
		//res.send("notice pai");
	
		noticeModel.getAll(function(results){			
				res.render('adminHome/notice', {noticelist:results });
			
		});
});
router.post('/notice', function(req, res){
	//res.send("insert POST kaj kore");
		 var notice = {
		 	notice_id: req.body.noticeid,
		 	notice_post: req.body.notice_post,
			
		 };

		noticeModel.insert(notice, function(status){
			//res.send("notice post hoi");
			res.redirect('/admin');
			
		});
});

// router.get('/deactive_employee/:user_email',function(req,res){
// 	employeeModel.getByEmail(req.params.user_email,function(result){
// 		//res.render('')

// 	});

//  });



module.exports = router;
