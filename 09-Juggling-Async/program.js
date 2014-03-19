// My first solution
// Get supplied URLs and required
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var msg1 = "";
var msg2 = "";
var msg3 = "";
var msgReturned = 0;
var http = require('http');

// Get each URL
http.get(url1, cb1);
http.get(url2, cb2);
http.get(url3, cb3);

function cb1(response) {
	// Pass response and callback
	httpCallBack(response, function(message) {
		msg1 = message;
		printMessages();
	});
}

function cb2(response) {
	// Pass response and callback
	httpCallBack(response, function(message) {
		msg2 = message;
		printMessages();
	});
}

function cb3(response) {
	// Pass response and callback
	httpCallBack(response, function(message) {
		msg3 = message;
		printMessages();
	});
}

// handles the response and everything
function httpCallBack(response, cb) {
	response.setEncoding('utf8');
	var message = "";
	response.on("data", function(data) {
		message += data;
	});

	response.on("end", function() {
		msgReturned += 1;
		return cb(message);
	});
}

// Prints the messages once all are available
function printMessages() {
	if (msgReturned === 3) {
		console.log(msg1);
		console.log(msg2);
		console.log(msg3);
	}
}



// Main difference between my solution and the official solution is the genius implementation of abstraction below (loops, indexing, etc.)
// OFFICIAL SOLUTION
var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

function printResults() {
	for (var i = 0; i < 3; i++) {
		console.log(results[i]);
	}
}

function httpGet(index) {
	http.get(process.argv[2 + index], function (response) {
		response.pipe(bl(function(err, data) {
			if (err)
				return console.error(data);

			results[index] = data.toString();
			count++;

			if (count == 3) // yay! we are the last one!
				printResults();
		}));
	});
}