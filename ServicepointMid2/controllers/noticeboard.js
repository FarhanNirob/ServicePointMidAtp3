var express = require('express');
var noticeModel = require.main.require('./models/notice-model');
var router = express.Router();
var bodyParser = require('body-parser');


//Get Method

router.get('/',function(req,res){
	console.log("Requested for notice post");
	res.render('noticeboard/noticeboard');
});

//Post Method

router.post('/',function(req,res){
	var notice ={
		postid      : req.parms.postid,
		discription : req.parms.discription,
	}
	console.log("notice posted");
	noticeModel.insert(notice,function(status){
		//req.session.username=req.body.username
		res.redirect('/noticeboard');
	});

	
});



module.exports = router;




