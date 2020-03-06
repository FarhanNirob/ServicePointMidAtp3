var db = require('./db');

module.exports = {
	insert: function(notice, callback){
		var sql = "insert into noticeboard values(?,?);";
		db.execute(sql, [null,notice.postid, notice.discription], function(status){
			if(status){
				console.log(status);
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getBypostid: function(notice,callback){
		var sql = "select * from noticeboard where postid=?";
		db.getResults(sql,[postid],function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	}


}


