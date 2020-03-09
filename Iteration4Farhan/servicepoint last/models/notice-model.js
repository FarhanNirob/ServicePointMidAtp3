var db = require('./db');

module.exports = {
	getAll : function(callback){
		var sql = "select * from notice";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});
	},

insert: function(notice, callback){
		var sql = "insert into notice values(?,?)";
		db.execute(sql, [null, notice.notice_post], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},










}