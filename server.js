var ex = require('express'),
	app = require('express')(),
	jade = require('jade'),
	http = require('http').Server(app),
	server = http.listen('3333');

app
	.set('view engine', 'jade')
	.set('views', __dirname + '/views')
	.use(ex.static(__dirname + '/views'));

app.get('/', function(req, res){
	res.render('index', {data:123});
});



