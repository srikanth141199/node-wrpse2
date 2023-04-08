// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

var fs = require("fs");

var content = fs.readFileSync("details.txt")
console.log(content.toString());
console.log(" Who r u");

// above is a example of Blocking code


