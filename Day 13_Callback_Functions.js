// Day 13: Callback Functions

// Example of a function that receives a callback function
function processArray(array, callback) {
    // Perform some operation on each element of the array
    for (let i = 0; i < array.length; i++) {
      // Call the callback function and pass the current element as an argument
      callback(array[i]);
    }
  }
  
  // Example callback functions
  function printElement(element) {
    console.log("Element:", element);
  }
  
  function doubleElement(element) {
    console.log("Doubled Element:", element * 2);
  }
  
  function squareElement(element) {
    console.log("Squared Element:", element * element);
  }
  
  // Example usage of the processArray function with different callback functions
  let numbers = [1, 2, 3, 4, 5];
  
  console.log("Printing Elements:");
  processArray(numbers, printElement);
  
  console.log("Doubling Elements:");
  processArray(numbers, doubleElement);
  
  console.log("Squaring Elements:");
  processArray(numbers, squareElement);
  