//below is an example for using this in event call

var events = require('events'); 
var myEmitter = new events.EventEmitter(); 

myEmitter.on('event', function(a, b) {
  console.log(a, b, this, this === myEmitter);
});
myEmitter.emit('event', 'a', 'b');

console.log("=================================");

myEmitter.on('event1', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously');

    console.log("=================================");
  });
});
myEmitter.emit('event1', 'a', 'b');

console.log("=================================");


// myEmitter.emit('error', new Error('whoops!'));


