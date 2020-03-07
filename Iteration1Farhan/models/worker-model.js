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
	}

}