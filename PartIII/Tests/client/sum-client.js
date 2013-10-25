//sum-client.js
var request = require('request');
function sum (a, b, callback) {
	// body...
	var options = {
		url : 'http://localhost:8080/',
		qs: {
			a: a,
			b: b
		}
	};

	request(options, function(err, res, body){
		var result;
		if (err){
			return callback(err);
		}

		try{
			result = JSON.parse(body);
		}	
		catch(err)
		{
			return callback(err);
		}
		return callback(null, result);
	});
}

module.exports = sum;