/**
 * ## Task

Create a promise. Have it fulfilled with a value of 'FULFILLED!' in
executor after a delay of 300ms, using setTimeout.

Then, print the contents of the promise after it has been fulfilled by passing
console.log to then.

## Boilerplate

    'use strict';
    
    var promise = new Promise(function (fulfill, reject) {
      // Your solution here
    });
    
    // Your solution here

 */

var promise = new Promise(function (fulfill, reject) {
  // Your solution here
  setTimeout(() => {
    fulfill("FULFILLED!");
  }, 300);
});

// Your solution here
promise.then((str) => console.log(str));
promise.then(console.log);

