var db = require('./db');

module.exports ={



getAll : function(callback){
		var sql = "select * from worker";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});
	},

getById : function(id, callback){
		var sql = "select * from worker where user_id=?";
		db.getResult(sql, [id], function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},

insert: function(user, callback){
		var sql = "insert into worker values(?,?,?,?)";
		db.execute(sql, [null, user.user_name, user.user_email, user.user_password,user.user_phoneno], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

update : function(user, callback){
		var sql = "update worker set user_name=?, user_email=?, user_password=?, user_phoneno where user_id=?";
		db.execute(sql, [user.user_name, user.user_email, user.user_password,user.user_phoneno, user.user_id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},






}
