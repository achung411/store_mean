var customers = require('./../server/controllers/customers.js');
module.exports = function Routes(app){
 app.get('/', function(req,res) { customers.index(req,res) });
 app.get('/users', function(req,res) { customers.index(req,res) });
 app.get('/users/index.json', function(req,res) { customers.index_json(req,res) });
 app.get('/users/new', function(req,res) { customers.new(req,res) });
 app.post('/users/create', function(req,res) { customers.create(req,res) });
 app.get('/users/:id', function(req,res) { customers.show(req,res) });
 app.get('/users/:id/edit', function(req,res) { customers.edit(req,res) });
 app.post('/users/newUser_json', function(req,res) { customers.newCustomer_json(req,res) });
};


// var mongoose = require('mongoose'),
//  Customer = mongoose.model('Customer'),
//  Order = mongoose.model('Order');
// module.exports = function Routes(app){
//  app.get('/', function(req,res) { res.render('index', { title: 'hello' }); });
//  app.post('/customers/create', function(req,res) {
//   var a = new User(req.body);
//   a.save(function(err, a){
//    console.log(err, a);
//   });
//  });
//  app.get('/customers.json', function(req, res) {

//  });
// };