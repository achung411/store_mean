var store = angular.module('store', ['ngRoute']);

store.config(function ($routeProvider) {
	$routeProvider
		.when ('/',
		{
			templateUrl: 'partials/customers.html'
		})
		.when('/alt',
		{
			templateUrl: 'partials/orders.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});