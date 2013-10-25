//TCPCommandLineClient.js
var net = require('net');
var port = 4001;
var retryInterval = 3000;
var closed = false;
var retriedTimes = 0;
var maxRetries = 10;
var conn;
process.stdin.resume();

(function connect(){
	function reconnect()
	{
		
		if (retriedTimes >= maxRetries)
		{
			throw new Error('Max Retries, give up');
		}
		retriedTimes += 1;
		setTimeout(connect, retryInterval);
	};

    conn = net.createConnection(port);
	conn.on('error', function (err) {
		// body...
		console.log('Get Error: ', err);
	});
	conn.on("connect", function(){
		console.log("Connection");
		retriedTimes = 0;
	});

	conn.on('close', function()
		{
			if (true === closed)
			{
				return;
			}
			console.log('connection got closed, will try to reconnect');
			reconnect();
		});
	conn.pipe(process.stdout, {end: false});
	//process.stdin.pipe(conn);
}());

process.stdin.on('data', function(data)
	{
		if (data.toString().trim().toLowerCase() === 'quit')
		{
			closed = true;
			conn.end();
			process.stdin.end();
		}
		else{
			conn.write(data);
		}
	});

