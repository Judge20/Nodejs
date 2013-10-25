//TCP.js
var server = require('net').createServer();
var port = 4001;
server.on('listening', function  () {
	// body...
	console.log('Server is listening on port', port);
});
server.on('connection', function(socket){
	console.log('Server was a new connection');
	socket.on('data', function(data)
		{
			console.log('Get Data: ', data.toString());
			socket.write('data recieved');
		});
	socket.on('end', function()
		{
			console.log('connection terminated');
		});
	socket.on('error', function(err)
		{
			console.log('Get error', err);
		});
	//socket.end();
	//server.close();
});

server.on('close', function(){
	console.log('server is now closed');
});

server.on('error', function(err){
	console.log('Error occurred:', err.message);
});

server.listen(port);