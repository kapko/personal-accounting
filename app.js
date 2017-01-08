var ex = require('express'),
	app = ex(),
	router = ex.Router(),
	methodOverride = require('method-override'),
	bodyParser = require('body-parser'),
	// mongo 
	restful = require('node-restful'),
	mongoose = restful.mongoose,
	schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mongo');
mongoose.Promise = global.Promise;

app
	.use(bodyParser.urlencoded({ extended: true }))
	.use(bodyParser.json())
	.use(methodOverride())
	.use(ex.static('views'))
	.set('views', __dirname + '/views/')
	.set('view engine', 'jade')
	.get('/', function(req, res){res.render('index')});

module.exports = app;