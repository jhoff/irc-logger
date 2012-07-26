
/**
 * Module dependencies.
 */

var express = require('express')
  , cons = require('consolidate')
  , routes = require('./routes')
  , http = require('http');

var app = express();

var irc_logs = {};

// start the irc bot!
require('./bot')( irc_logs );

app.engine('html', cons.hogan);

app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'html');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
	app.use(express.errorHandler());
});

app.get( '/:channel', routes.channel( irc_logs ) );

app.get( '/', routes.index( irc_logs ) );

http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});

