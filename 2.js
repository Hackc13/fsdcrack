var events = require('events');
var eventEmitter = new events.EventEmitter();
var buttonClicked = function () {
console.log("button clicked!");}
var welcome =function() {
console.log("HelloWelcome!");}
var hai =function(msg) {
console.log("HelloWelcome!"+ msg);}
eventEmitter.on('whatEvent', buttonClicked);
eventEmitter.emit('whatEvent');
eventEmitter.on('WhatNext', welcome);
eventEmitter.emit('WhatNext');
eventEmitter.on('WhatPrev', hai);
eventEmitter.emit('WhatPrev', 'student');
