//TCPClient.js
var net = require('net');
var port = 4001;
var host = '127.0.0.1'


function connectionListener (conn) {
	// body...
	console.log('We have a new connection');
}

var conn = net.createConnection(port, host, connectionListener);
conn.on('data', function(data)
	{
		console.log(data);
	});
conn.write('here is a string for you!');
conn.write('SGVsbG8gV29ybGQh', 'base64');
var buffer = new Buffer('Hello world!');
conn.write(buffer);
conn.write('Hey!', function(){
	console.log('data was written out');
});

conn.end();