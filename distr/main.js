import httpService from './service/http.js'
import helperService from './service/helper.js'
import Project from './project/count.module.js'

var Main = angular.module('main', [
		'ngMaterial',
		'ngMessages',
		'ui.router',
		'smDateTimeRangePicker',
		Project.name,
	])
	.service('http', httpService)
	.service('helper', helperService);

Main.config(($stateProvider, $urlRouterProvider, $locationProvider)=>{
	$stateProvider.state('main', {
		url: '',
		abstract: true,
	})
	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true).hashPrefix('!');
})
