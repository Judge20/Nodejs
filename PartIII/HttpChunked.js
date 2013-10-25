//HttpChunked.js
require('http').createServer(function  (req, res) {
	// body...
	res.writeHead(200, {'Content-Type': 'text/plain'});
	var left = 10;
	var internval = setInterval(function()
		{
			for (var i = 0; i < 100; i++) {
				res.write(Date.now() + " ");
			}
			res.write("\n");
			if( -- left === 0)
			{
				clearInterval(internval);
				res.end();
			}
		}, 1000);
}).listen(8080);