 //.js extention not required

var obj = require("../ownModule/own_Module");
var sub_res = obj.sub(5,3);

console.log("sub : ", +sub_res);
console.log("name : ",+obj.name);
console.log("Max Time  : "+obj.mT);

// var obj = require("../event");
// console.log("from event.js : ",+obj.name);
