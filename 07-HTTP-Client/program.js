var requestURL = process.argv[2];
var http = require('http');

http.get(requestURL, httpCallback);

function httpCallback(response) {
	response.on("data", function(data) {
		console.log(data.toString());
	});
}

// Official solution
// var http = require('http');

// http.get(process.argv[2], function(response) {
// 	response.setEncoding('utf8');
// 	response.on('data', console.log);
// 	response.on('error', console.error);
// });