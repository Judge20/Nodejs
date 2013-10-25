//HelloUDPTest.js
var dgram = require('dgram');
var server = dgram.createSocket("udp4");
server.on("message", function(message){
	console.log()
});