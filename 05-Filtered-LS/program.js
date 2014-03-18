var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var fileType = process.argv[3];

fs.readdir(directory, readDir);

function readDir(err, files) {
	if (err) throw err;

	files.forEach(function(file) {
		if (path.extname(file) === '.' + fileType) {
			console.log(file);
		}
	});

}

// Official solution
// var fs = require('fs');
// var path = require('path');

// fs.readdir(process.argv[2], function(err, list) {
// 	list.forEach(function(file) {
// 		if (path.extname(file) === '.' + process.argv[3]) {
// 			console.log(file);
// 		}
// 	});
// });