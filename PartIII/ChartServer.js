//ChartServer.js
var net = require('net');
var server = net.createServer();
var sockets = [];
server.on('error',function(err)
	{
		console.log('server error:', err.message);
	});

server.on('close',function()
	{
		console.log('Server Closed');
	});

server.on('connection', function(socket)
	{
		console.log('got a new connection');
		socket.setTimeout(10000, function()
			{
				socket.end('time out close');
			});
		sockets.push(socket);
		socket.on('data', function(data)
			{
				console.log('got data:', data);
				sockets.forEach(function(otherSocket)
					{
						if (otherSocket != socket)
						{
							otherSocket.write(data);
						}
					});
			});
		
		socket.on('close', function()
			{
				console.log('connection closed');
				var index = sockets.indexOf(socket);
				sockets.splice(index, 1);
			});
	});

server.listen(4001);