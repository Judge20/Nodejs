//PostGoogle.js
var http = require("http");
var options = {
	host: "www.google.com.hk",
	port: 80,
	path: "/upload",
	method: "POST"	
}

var request = http.request(options, function(response){
	console.log("status", response.statusCode);
	console.log("Headers", response.headers);
	response.setEncoding('utf8');
	response.on('data', function(chunk){
		console.log("Body", chunk);
	})
});

request.write('this is a piece of data.\n');
request.write('this is another piece of data \n');
request.end();