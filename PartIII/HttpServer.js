var http = require('http');
var server = http.createServer();
var spawn = require('child_process').spawn;
var util = require('util');
server.on('request', function(req, res){
		var child = spawn("node", ['D:\\node\\PartIII\\childprocess.js']);
		child.stdin.write(req.url);
		child.stdout.pipe(res);

		res.end();
		child.kill();
		res.on('end', function()
		{
				child.kill();
			
			});
	});

//server.on('request', function(req,res)
//		res.end();
//		res.write('hello world');
//		res.write(req.method);
//		res.write(req.url);
//		res.write(util.inspect(req.headers));
//		res.writeHead(200, {'Content-Type': 'text/plain'});
//		res.writeHead(200, {'Content-Type':'text/plain'});
//		rs.pipe(res);
//		var rs = fs.createReadStream('D:\\node\\PartIII\\filetest.txt');
//	{
//	{
//	});
//	});
//HttpServer.js
//server.listen(8080);
//server.listen(8080);
//server.on('request', function(req, res)

//var fs = require('fs');
server.listen(8080);

