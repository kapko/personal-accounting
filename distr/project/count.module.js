import template from './count.template.html'
import controller from './count.controller.js'
import sidebar from './sidebar.template.html'
import './count.css'
import './material.css'

// modules //
import Lists from './list/list.module.js'
import Limit from './limit/limit.module.js'

var link = 'main.count',
	count = angular.module(link, [
		Lists.ame,
		Limit.name,
	]);

count.config(($stateProvider)=>{
	$stateProvider.state(link, {
		url: '/',
		views:{
			'content@':{
				template,
				controller,
				controllerAs: 'self',
			},
			'sidebar@':{
				template: sidebar,
			}
		}
	})
})

export default count;
