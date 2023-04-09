const vName = require("fs");

var content = vName.readFileSync("./details.txt"); 
console.log("this is Sync call :", content.toString());
