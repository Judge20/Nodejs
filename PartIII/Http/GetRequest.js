//GetRequest.js
var http = require('http');
var options = {
	host: "www.google.com.hk",
	port: 80,
	path: "/index.html"
}

http.get(options, function(res){
	console.log("Got response: ", res.statusCode);
});