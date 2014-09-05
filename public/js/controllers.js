store.controller('Customers', function($scope, StoreFactory) {
	StoreFactory.getCustomers(function(data) {
		$scope.customers = data;
	});

	$scope.addCustomer = function() {
		StoreFactory.addNewCustomer($scope.customer);
	};
	$scope.removeCustomer = function(individual) {
		StoreFactory.removeCustomer(individual);
	};
});

store.controller('Orders', function($scope, StoreFactory) {
	StoreFactory.getCustomers(function(data) {
		$scope.customers = data;
	});

	StoreFactory.getOrders(function(data) {
		$scope.orders = data;
	});

	// $scope.orders = StoreFactory.getOrders();
	$scope.addOrder = function() {
		StoreFactory.addOrder($scope.order);
	};
});