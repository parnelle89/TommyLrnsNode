var fs = require('fs');
var filePath = process.argv[2];

var buf = fs.readFileSync(filePath);
var sBuf = buf.toString();
var iNewLines = sBuf.split('\n').length - 1;
console.log(iNewLines);

// // Official solution
// var fs = require('fs');

// var contents = fs.readFileSync(process.argv[2]);
// var lines = contents.toString().split('\n').length -1;
// console.log(lines);