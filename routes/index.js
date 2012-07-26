
/*
 * GET home page.
 */

exports.index = function( logs ) {
	return function(req, res) {
		var channels = [];
		for( var k in logs ) {
			channels.push({
				href: encodeURIComponent( k ),
				name: k
			});
		}
		res.render(
			'index',
			{
				irc_server: process.env.IRC_SERVER,
				channels: channels
			}
		);
	}
};

exports.channel = function( logs ) {
	return function( req, res ) {
		res.render(
			'channel',
			{
				irc_server: process.env.IRC_SERVER,
				channel: req.params.channel,
				logs: logs[ req.params.channel ]
			}
		);
	}
}