// parentProcess.js
var spawn = require('child_process').spawn;
var child =spawn('node', ['D:\\node\\PartIII\\childProcess.js']);
child.stdout.on('data', function(data)
	{
		console.log('stdout', data.toString());
	});
child.stderr.on('data', function(data)
{
	console.log('stderr', data.toString());
});
child.on('exit', function(code, signal)
{
	console.log('child process terminated with code ', code);
	console.log('child process terminated with signal ', signal);
});
child.stdin.write('test');

setTimeout(function(){
	child.kill();
}, 1000);