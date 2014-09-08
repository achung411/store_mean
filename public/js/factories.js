store.factory('StoreFactory', function($http) {
	var customers = [];
	var orders = [];
	var factory = {};

	factory.getCustomers = function(callback) {
		$http.get('/customers.json').success(function(data) {
			customers = data;
			callback(data);
		});
	};

	factory.addNewCustomer = function(newcomer) {
		newcomer.created_at = new Date();
		console.log("new customer info:", newcomer);
		$http.post('/customers/create', newcomer).success(function() {
			customers.push(newcomer);
		});
	};

	factory.removeCustomer = function(id) {
		var target = id;
		var packet = {id: target, _method: "delete"};
		$http.post('/customers/' + target, packet).success(function() {
			var index;
			for (var i=0; i<customers.length; i++) {
				if (customers[i]._id === target) {
					index = i;
				}
			}
			customers.splice(index, 1);
		});
	};

	factory.getOrders = function(callback) {
		$http.get('/orders.json').success(function(data) {
			orders = data;
			callback(data);
		});
	};

	factory.addOrder = function(invoice) {
		var buyer = invoice.customer.name;
		invoice.created_at = new Date();
		invoice.customer = buyer;
		$http.post('/orders/create', invoice).success(function() {
			orders.push(invoice);
		});
	};

	return factory;
});