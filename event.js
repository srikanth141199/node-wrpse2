var events = require('events');  //here we are importing events
var eventEmitter = new events.EventEmitter();  // creating an object to access the instances for EventEmitter like properties,methods

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!', this, this == myEventHandler);
};

//Assign the eventhandler to an event:
eventEmitter.on('scream', myEventHandler);  // this will be executed when eventEmitter emit "scream" . on property is used to bind a function with the event.

//Fire the 'scream' event:
eventEmitter.emit('scream'); //emit is used to fire an event. 





