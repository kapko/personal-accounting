import template from './limit.template.html'
import controller from './limit.controller.js'
// import './limit.css'

// modules //
// import Edit from './edit/edit.module.js'
// import Create from './create/create.module.js'

var limit = 'main.count.limit',
	app = angular.module(limit, []);

app.config(($stateProvider)=>{
	$stateProvider.state(limit, {
		url: 'limit',
		views:{
			'content@':{
				template,
				controller,
				controllerAs: 'self',
			}
		}
	})
})

export default app;
