var ex = require('express'),
	router = ex.Router(),
	rest = require('node-restful'),
	mongo = rest.mongoose,
	schema = mongo.Schema,
	limit = new schema({
		hour: String,
		day: String,
		month: String,
		year: String,
	});
	
rest
	.model('limit', limit)
	.methods(['get', 'post', 'put', 'delete'])
	.register(router, '/limits');

module.exports = router;