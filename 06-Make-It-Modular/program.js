var mymodule = require('./mymodule');
var directory = process.argv[2];
var fileType = process.argv[3];

function results(err, data) {
	if (err) throw err;
	data.forEach(function(file) {
		console.log(file);
	});
}

mymodule(directory, fileType, results);

// Solution
// var filterFn = require('./mymodule.js');
// var dir = process.argv[2];
// var fitlerStr = process.argv[3];

// filterFn(dir, filterStr, function(err, list) {
// 	if (err)
// 		return console.error("There was an error:", err);
// 	list.forEach(function(file) {
// 		console.log(file);
// 	});
// })