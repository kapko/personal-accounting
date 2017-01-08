var app = require('./app.js');

app
	.use('/api', require('./api/list/list.server.js'))
	.use('/api', require('./api/limit/limit.model.js'))
	.listen(3030);

console.log('port 3030');



