var mongoose = require('mongoose')
var Customer = mongoose.model('Customer');
module.exports = {
 index: function(req, res){
  res.render('index', {title:'Welcome Page'});
 },
 index_json: function(req, res){ 
  Customer.find({}, function(err, results){
   res.send(JSON.stringify(results));
  });
 },
 create: function(req, res){
  var a = new Customer(req.body);
  a.save(function(err){
   if(err){
    res.send(JSON.stringify(err));
   }
   else
   {
    res.send('success');
   }
  });
 },
 destroy: function(req, res) {
  var target_id = req.body.id;
  Customer.remove({_id: target_id}, function(err) {
    if (!err) {
      res.send("Customer has been successfully eliminated!");
    }
    else {
      res.send("Uh, that didn't work...");
    }
  })
 }
}