import template from './list.template.html'
import controller from './list.controller.js'

// modules //
import Edit from './edit/edit.module.js'
import Create from './create/create.module.js'

var link = 'main.count.list',
	app = angular.module(link, [Edit.name, Create.name]);

app.config(($stateProvider)=>{
	$stateProvider.state(link, {
		url: 'listings',
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
