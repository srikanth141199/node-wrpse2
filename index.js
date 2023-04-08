// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

var fs = require("fs");

var content = fs.readFileSync("details.txt")
console.log(content.toString());
console.log(" Who r u");

// above is a example of Blocking code

console.log("=================================");

const readStream = fs.createReadStream('details.txt');

console.log('Start');

readStream.on('data', (chunk) => {
	console.log(chunk.toString());
  console.log("=================================");
});

console.log('End');

console.log("=================================");

fs.readFile('details.txt', function (err, data) {
	if (err) return console.error(err);
	console.log(data.toString());
});
console.log("End of Program execution");










