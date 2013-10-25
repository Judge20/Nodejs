//Steam.js
var fs = require('fs');
var path = 'D:\\node\\PartIII\\filetest.txt';
//fs.open(path, 'r', function(err, fd)
//{
//	fs.createReadStream(null, {fd: fd, encoding: 'utf8'});
//	fd.on('data', console.log);
//});
//
// network stream;
//require('http').createServer(function(req, res){
//	var rs = fs.createReadStream(path);
//	rs.on('data', function(data){
//		if (!res.write(data))
//			{
//				rs.pause();
//			};
//	});
//
//	res.on('drain', function()
//	{
//		rs.resume();
//	})
//
//	rs.on('end', function()
//		{
//			res.end();
//		});
//}).listen(8080);


require('http').createServer(function(req, res){
	var rs = fs.createReadStream(path);
	rs.pipe(res, {end:false});
	rs.on('end', function()
		{
			res.write("And that's all, folkes!");
			res.end();
		});
}).listen(8080);
