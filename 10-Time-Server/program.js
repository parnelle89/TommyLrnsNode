var net = require('net');
var port = process.argv[2];

var server = net.createServer(callback);
server.listen(+port);

function callback(socket) {
	socket.write(data);
	socket.end();
	// Or
	// socket.end(data);
}