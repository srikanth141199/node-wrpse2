var fs = require("fs");

var data ="";

// Creating a readable stream
var readerStream = fs.createReadStream('./stream/data.txt', {encoding : "UTF8"});

// Set the encoding to be utf8. 
// readerStream.setEncoding('UTF8');
// https://stackoverflow.com/questions/46394411/how-to-know-what-encoding-to-use-when-reading-files

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function() {
   console.log(data);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");