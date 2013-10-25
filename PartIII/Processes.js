//Processes.js
var child_process = require('child_process');
var exec = child_process.exec;
var options = {
	timeout: 10000,
	killSignal:'SIGKILL'
};
exec('cat *.js|wc -l', options, function (err, stdout, stderr) {
	// body...
	if (err){
		console.log('child_process exited with error code', err.code);
		return;
	}
	});

// example1:
var env = process.env,
	varName,
	envCopy = {};
for (varName in env)
{
	envCopy[varName] = env[varName];
}
envCopy['PATH'].append(";D:\\node\\partIII");
console.log(envCopy);
envCopy['Custom env var'] = 'some value';
exec('node D:\\node\\partIII\\file.js', { env : envCopy}, function(err, stdout, stderr)
	{
		if (err) { throw err;}
		console.log('stdout', stdout);
		console.log('stderr', stderr);
	});