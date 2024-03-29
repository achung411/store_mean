var express = require('express.io');
var http = require('http');
var path = require('path');
var app = express();
var config = require('./config/mongoose');
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
var routes = require('./config/routes')(app);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});