import template from './create.template.html'
import controller from './create.controller.js'

var link = 'main.app.create',
	app = angular.module(link, []);

app.config(($stateProvider)=>{
	$stateProvider.state(link, {
		url: 'create',
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

