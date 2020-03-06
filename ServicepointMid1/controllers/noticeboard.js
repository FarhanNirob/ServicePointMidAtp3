var express = require('express');
var usermodel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/',function(req,res){
	//noticeModel.getByid(req.session.id,function(result){
		res.render('noticeboard/noticeboard',{notice:result});
	});




module.exports = router;

