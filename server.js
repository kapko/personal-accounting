const app = require('./app.js'),
	urls = [
		'/', 
		'/listings', 
		'/listings/create', 
		'listings/{id}/edit',

		'/limit',
		'/limit/create',
		'/limit/{id}/edit',
	];

// routes //
urls.map(item=>{
	app.get(item, (req, res)=>{res.render('index')});
});


// RESTfull API
app
	.use('/api', require('./api/list/list.server.js'))
	.use('/api', require('./api/limit/limit.model.js'))
	.listen(3030);


console.log('port 3030');



