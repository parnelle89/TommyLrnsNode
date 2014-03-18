function dirFilter(directory, fileType, callBack) {
	var fs = require('fs');
	var path = require('path');

	fs.readdir(directory, filter);

	function filter(err, files) {
		if (err) {
			return callBack(err);
		}

		var retArray = [];		
		files.forEach(function(file) {
			if (path.extname(file) === '.' + fileType) {
				retArray.push(file);
			}
		});

		return callBack(null, retArray);
	}
}

module.exports = dirFilter;

// Solution
// var fs = requir('fs');
// var path = require('path');

// module.exports = function (dir, filterStr, callback) {

// 	fs.readdir(dir, function(err, list) {
// 		if (err)
// 			return callback(err);

// 		list = list.filter(function(file) {
// 			return path.extname(file) === '.' + filterStr
// 		});

// 		callback(null, list);
// 	})
// }