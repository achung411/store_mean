store.factory('StoreFactory', function($http) {
	var customers = [
		{name: 'Michael Choi', created_at: new Date(2014, 3, 3)},
		{name: 'John Supsupin', created_at: new Date(2014, 3, 3)},
		{name: 'Trey Villafane', created_at: new Date(2014, 3, 1)},
		{name: 'India Meisner', created_at: new Date(2014, 2, 15)}
		];

	var orders = [
		{customer: 'India Meisner', product: 'Black Belts', quantity: 5, created_at: new Date(2012, 1, 2)}
		];

	var factory = {};
	factory.getCustomers = function() {
		return customers;
	};
	// factory.getCustomers = function(callback) {
	// 	$http.get('/customers.json').success(function(data) {
	// 		customers = data;
	// 		callback(data);
	// 	});
	// }

	factory.addNewCustomer = function(info) {
		customers.push({
			name: info.name,
			created_at: new Date()
		});
	};
	
	factory.removeCustomer = function(individual) {
		var index;
		for (var i=0; i<customers.length; i++) {
			if (customers[i].name === individual.name) {
				index = i;
			}
		}
		customers.splice(index, 1);
	};

	factory.getOrders = function() {
		return orders;
	};

	factory.addOrder = function(info) {
		orders.push({
			customer: info.customer.name,
			product: info.product,
			quantity: info.quantity,
			created_at: new Date()
		});
	};
	return factory;
});