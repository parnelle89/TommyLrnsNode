var url = process.argv[2];
var http = require('http');

http.get(url, httpCallBack);

function httpCallBack(response) {
	response.setEncoding('utf8');
	var message = "";
	response.on("data", function(data) {
		message += data;
	});
	response.on("end", function() {
		console.log(message.length);
		console.log(message);
	});
}

// Official solution
// var http = require('http');
// var bl = require('bl');

// http.get(process.argv[2], function(response) {
// 	response.pipe(bl(function (err, data) {
// 		if (err)
// 			return console.error(err);
// 		data = data.toString()
// 		console.log(data.length);
// 		console.log(data);
// 	}))
// })