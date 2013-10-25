var path = require('path');
var result = path.normalize('D:\\\\node');
console.log(result);
var result1 = path.join('d:', 'node', 'PartIII');
console.log(result1);
var result2 = path.resolve('D:', 'node\\PartIII');
console.log(result2);
var result3 = path.relative('D:\\node\\PartIII', 'D:\\node\\Buffer');
console.log(result3);
var result4 = path.dirname('D:\\node\\Buffer\\Buffer.js');
console.log(result4);
var result5 = path.basename('D:\\node\\Buffer\\Buffer.js');
console.log(result5);

// exists;
path.exists('D:\\node\\PartIII', function(exists){
	console.log('exists:', exists);
});

var result6 = path.existsSync('D:\\node\\PartIII');
console.log('exists sync:', result6);

// fs module.
var fs = require('fs');
fs.stat('D:\\node\\PartIII\\filetest.txt', function(err, stats){
	if (err) {throw err;}
	console.log(stats);
	console.log('isFile', stats.isFile());
	//console.log('isDirectory', stats, isDirectory());
	console.log('isBlockDevice', stats.isBlockDevice());
	console.log('isCharacterDevice', stats.isCharacterDevice());
	console.log('isSymbolicLink', stats.isSymbolicLink());
	//console.log('isFifo', stats.isFifo());
	//console.log('isSockect', stats.isSockect());
});

fs.open('D:\\node\\PartIII\\filetest.txt', 'r', function opened(err, fd){
	if (err) { throw err;}
	var readBuffer = new Buffer(1024),
		bufferOffset = 0;
		bufferLength = readBuffer.length;
		filePosition = 0;
	fs.read(fd, 
			readBuffer,
			bufferOffset, 
			bufferLength, 
			filePosition,
			function read(err, readBytes){
				if (err) { throw err;}
				console.log('just read', readBytes + ' bytes');
				if (readBytes > 0)
				{
					console.log(readBuffer.slice(0, readBytes).toString());
				}
			});
});