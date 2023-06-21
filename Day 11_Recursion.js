// Day 11: Recursion

// Example of a recursive function to calculate the factorial of a number
function calculateFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    }
    return number * calculateFactorial(number - 1);
  }
  
  let number = 5;
  let result = calculateFactorial(number);
  console.log("The factorial of", number, "is:", result);
  
  // Example of a recursive function to generate the Fibonacci sequence
  function generateFibonacciSequence(n) {
    if (n === 0) {
      return [];
    }
    if (n === 1) {
      return [0];
    }
    if (n === 2) {
      return [0, 1];
    }
    let sequence = generateFibonacciSequence(n - 1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;
  }
  
  let fibonacciLimit = 8;
  let fibonacciSequence = generateFibonacciSequence(fibonacciLimit);
  console.log("The Fibonacci sequence up to", fibonacciLimit, "is:", fibonacciSequence);
  
