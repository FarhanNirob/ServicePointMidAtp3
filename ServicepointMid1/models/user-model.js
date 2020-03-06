var db = require('./db');

module.exports = {
	insert: function(notice, callback){
		var sql = "insert into noticeboard values(?,?,?);";
		db.execute(sql, [null, notice.title, notice.discription], function(status){
			if(status){
				console.log(status);
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getByid: function(id,callback){
		var sql = "select * from noticeboard where id=?";
		db.getResults(sql,[id],function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	}


}
/*router.post( '/create', function( req, res, next ) {
    connection.query( 'INSERT INTO noticeboard SET title = ?, description = ?', [ req.body.title, req.body.description ], function( err, info ) {
        if( err ) return next( err );
        res.redirect( '/' );
        console.log( 'Item created:' );
        console.log( info );
    });
});*/