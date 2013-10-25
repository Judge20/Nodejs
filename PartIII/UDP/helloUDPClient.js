//helloUDPClient.js
var dgram = require("dgram");
var client = dgram.createSocket("udp4");
var port = 4000;
var buffer = new Buffer("Hello world");

client.send(buffer,
	0, 
	buffer.length, 
	port,
	"localhost",
	function(err, bytes){
		if (err) { throw err;}
		client.close();
	});