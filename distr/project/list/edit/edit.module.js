import template from './edit.template.html'
import controller from './edit.controller.js'

var link = 'main.count.list.edit',
	app = angular.module(link, []);

app.config(($stateProvider)=>{
	$stateProvider.state(link, {
		url: '/{id}',
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

