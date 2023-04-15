var maxTime = 1000;
var name = 'Srikanth';

var sub = (a, b) => {
  return a - b;
};

console.log(sub);

// Left hand name is external name, imported files need to use left side names to access those fiels from the exported module
// fields need to be exported to able to acces from child modules/other .js files
module.exports.sub = sub;
module.exports.mT = maxTime;
module.exports.name1 = name;
