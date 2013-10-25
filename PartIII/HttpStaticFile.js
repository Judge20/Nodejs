//HttpStaticFile.js
var path = require('path');
var fs = require('fs');
var http = require('http');
http.createServer(function  (req, res) {
	// body...
	var file = path.normalize('D:\\node\\PartIII' + req.url);
	console.log('try to server', file);
	function reportError(err)
	{
		console.log(err);
		res.writeHead(500);
		res.end('Internal Server error');
	};

	path.exists(file, function(exists)
	{
		if (exists)
		{
			fs.stat(file, function (err, stat) {
				var rs;
				if (err)
				{
					return reportError(err);
				}

				if (stat.isFile())
				{
					rs = fs.createReadStream(file);
					rs.on('error', reportError);
					res.writeHead(200);
					rs.pipe(res);
				}
				else
				{
					res.writeHead(403);
					res.end('Forbidden');
				}
			});
		}
		else
		{
			res.writeHead(404);
			res.end('not found');
		}
	});
}).listen(8080);
