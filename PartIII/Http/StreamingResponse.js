//StreamingResponse.js
var http = require("http");
var fs = require("fs");
var options = {
	host: "www.google.com.hk",
	port: 80,
	path: '/',
	method: "GET"
};
var file = fs.createWriteStream("D:\\node\\PartIII\\Http\\test.txt");
http.request(options, function  (res) {
	// body...
	res.pipe(file);
}).end();

