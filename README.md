# General purpose IRC logging bot for heroku

	Logs into the specified IRC server and channels
	
	Stores the logs in memory ( nothing to disk )
	
	Purges messages after 1000 entries
	
	Simple Web Interface for browsing logs

### Setup

	Configuration is done through environment variables
	
		IRC_SERVER - ex. 'irc.freenode.net'
		IRC_BOT_NICK - ex. 'foobot'
		IRC_BOT_PASS - ex. 'barpass'
		IRC_CHANNELS - ex. '#freenode,#mychannel'
		
	Then, deploy to heroku and enjoy!