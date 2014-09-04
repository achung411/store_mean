var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
  customer: String,
  product: String,
  quantity: Number,
  created_at: { type: Date, default: Date.now },
  hidden: Boolean,
});
OrderSchema.path('customer').required(true, 'Please choose a customer identity.');
OrderSchema.path('product').required(true, 'Please select a product.');
OrderSchema.path('quantity').required(true, 'Please specify the number of goods to purchase.');
mongoose.model('Order', OrderSchema);