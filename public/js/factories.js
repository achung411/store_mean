store.factory('StoreFactory', function($http) {
	// var customers = [
	// 	{name: 'India Meisner', created_at: new Date(2014, 2, 15)}
	// 	];

	var customers = [];
	var orders = [];

	// var orders = [
	// 	{customer: 'India Meisner', product: 'Black Belts', quantity: 5, created_at: new Date(2012, 1, 2)}
	// 	];

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

	factory.removeCustomer = function(individual) {
		var index;
		for (var i=0; i<customers.length; i++) {
			if (customers[i].name === individual.name) {
				index = i;
			}
		}
		customers.splice(index, 1);
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


	// 	orders.push({
	// 		customer: info.customer.name,
	// 		product: info.product,
	// 		quantity: info.quantity,
	// 		created_at: new Date()
	// 	});
	// };
	return factory;
});