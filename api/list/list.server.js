var ex = require('express'),
	router = ex.Router(),
	rest = require('node-restful'),
	mongo = rest.mongoose,
	schema = mongo.Schema,
	listSchema = new schema({
		title: String,
		description: String,
		start_day: String,
		price: Number,
	});

rest
	.model('list', listSchema)
	.methods(['get', 'post', 'put', 'delete'])
	.register(router, '/lists');

module.exports = router;