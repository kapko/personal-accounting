import template from './app.template.html'
import controller from './app.controller.js'
import './app.css'

// modules //
import Edit from './edit/edit.module.js'
import Create from './create/create.module.js'

var app = angular.module('main.app', [Edit.name, Create.name]);

app.config(($stateProvider)=>{
	$stateProvider.state('main.app', {
		url: '/',
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
