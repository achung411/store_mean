store.controller('Customers', function($scope, StoreFactory) {
	$scope.customers = StoreFactory.getCustomers();
	$scope.addCustomer = function() {
		StoreFactory.addNewCustomer($scope.customer);
	};
	$scope.removeCustomer = function(individual) {
		StoreFactory.removeCustomer(individual);
	};
});

store.controller('Orders', function($scope, StoreFactory) {
	$scope.customers = StoreFactory.getCustomers();
	$scope.orders = StoreFactory.getOrders();
	$scope.addOrder = function() {
		StoreFactory.addOrder($scope.order);
	};
});