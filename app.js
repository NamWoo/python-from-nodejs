let {PythonShell} = require('python-shell')
// var PythonShell = require('python-shell');

let options = {
  mode: 'text',
  pythonPath: '/usr/bin/python3',
  pythonOptions: ['-u'], // get print results in real-time
  scriptPath: './',
  args: ['value1', 'value2', 'value3']
};
 
PythonShell.run('test.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results);
});
