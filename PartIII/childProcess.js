process.stdin.resume();
process.stdin.on('data', function(data)
	{
		try
		{
			process.stdout.write('child process out ' + data);
		}		
		catch(err){
			process.stderr.write('child process error ' + err.message);
		}
	});
