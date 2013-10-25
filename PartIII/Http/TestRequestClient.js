//TestRequestClient.js

var request = require("request");
var inspect = require("util").inspect;
request('http://localhost:4001/redirect',
	function (err, res, body) {
		// body...
		if (err) { throw err;}
		console.log(inspect({
			err: err, 
			res: { statusCode: res.statusCode},
			body: JSON.parse(body)
		}))
	});

request.post(
	'http://localhost:4001/abc/def',
	function (err, res, body) {
		// body...
		if (err) { throw err;}
		console.log(inspect({
			err: err, 
			res: { statusCode: res.statusCode},
			body: JSON.parse(body)
		}))
	});