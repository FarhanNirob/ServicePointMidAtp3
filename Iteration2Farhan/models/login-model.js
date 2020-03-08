var db = require('./db');

module.exports ={

	validate: function(user, callback){
		var sql = "select * from login where user_email=? and user_password=?";
		var sqlPrint = "select * from login where user_email="+user.user_email+" and user_password="+user.user_password+";";
		console.log(sqlPrint);
		db.getResult(sql, [user.user_email, user.user_password], function(result){
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getType: function(user, callback){
		var sql = "select user_type,account_status from login where user_email=? and user_password=?";
		var sqlPrint = "select user_type from login where user_email="+user.user_email+" and user_password="+user.user_password+";";
		console.log(sqlPrint);
		db.getResult(sql,[user.user_email, user.user_password], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	// insertLogin: function(user, callback){
	// 	var sql = "insert into login values(?,?,?,?,?,?)";
	// 	db.execute(sql, [ null,user.user_id,user.user_email,user.user_password,user.user_type,user.user_status ], function(status){
	// 		if(status){
	// 			callback(true);
	// 		}else{
	// 			callback(false);
	// 		}
	// 	});
	// },
	
}