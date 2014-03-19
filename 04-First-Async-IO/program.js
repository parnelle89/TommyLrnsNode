var fs = require('fs');
var filePath = process.argv[2];
fs.readFile(filePath, 'utf8', sCall);

function sCall(err, data) {
	if (err) throw err;
	var lines = data.split('\n').length - 1;
	console.log(lines);
}

// // Official solution
// var fs = require('fs');
// var file = process.argv[2];

// fs.readFile(file, function(err, contents) {
// 	// fs.readFile(file, 'utf8', callback) can also be used
// 	var lines = contents.toString().split('\n').length - 1;
// 	console.log(lines);
// });