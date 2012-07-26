module.exports = function( logs ) {
	var env = process.env;

	console.log( 'server: ' + process.env.IRC_SERVER );
	console.log( 'nick: ' + process.env.IRC_BOT_NICK );
	console.log( 'channels: ' + process.env.IRC_CHANNELS );

	// start the irc bot, and for each message on each channel, append to the logs
	if( process.env.IRC_SERVER && process.env.IRC_BOT_NICK && process.env.IRC_CHANNELS ) {
		var irc = require('irc'),
			channels = process.env.IRC_CHANNELS.split(',');

		console.log( 'connecting to IRC!' );

		var client = new irc.Client(
			process.env.IRC_SERVER,
			process.env.IRC_BOT_NICK,
			{
				password: process.env.IRC_BOT_PASSWORD || null,
				channels: channels,
			}
		);

		for( var c in channels ) {
			logs[ channels[c] ] = [];
			client.addListener('message' + channels[c], function (from, message) {
				logs[ channels[c] ].push({ from: from, message: message, stamp: (new Date).getTime() });
			});
		}

	} else {
		console.log( 'NOT STARTING IRC BOT!!!!' );
		console.log( 'You are missing some environment vars dummy.' );
	}

}