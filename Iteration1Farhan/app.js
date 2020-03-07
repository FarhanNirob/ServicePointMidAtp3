var express 		= require('express');
var bodyParser 		= require('body-parser');
var ejs 			= require('ejs');
var exSession 		= require('express-session');
var cookieParser 	= require('cookie-parser');
var login 			= require('./controllers/login');
var admin 			= require('./controllers/admin');



var app = express();

//configuration
app.set('view engine', 'ejs');


//middleware
app.use('/design', express.static('design'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my top secret value', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.use('/login', login);
app.use('/admin', admin);


//routes
app.get('/', function(req, res){
	res.redirect('/login');
});

app.get('/login', function(req, res){
	res.redirect('/login');
});



//server startup
app.listen(3000, function(){
	console.log('Node server started at 3000!');
});

