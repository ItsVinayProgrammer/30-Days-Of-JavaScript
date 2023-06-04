// Day 4: Functions

// Example of a function that calculates the factorial of a number
function calculateFactorial(number) {
    let factorial = 1;
  
    if (number === 0 || number === 1) {
      return factorial;
    } else {
      for (let i = 2; i <= number; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  
  // Example usage of the calculateFactorial function
  let number = 5;
  let result = calculateFactorial(number);
  console.log("The factorial of " + number + " is: " + result);
  
  // Example of a function that generates Fibonacci series
  function generateFibonacciSeries(limit) {
    let fibonacciSeries = [0, 1];
  
    if (limit <= 2) {
      return fibonacciSeries.slice(0, limit);
    } else {
      for (let i = 2; i < limit; i++) {
        let nextNumber = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
        fibonacciSeries.push(nextNumber);
      }
      return fibonacciSeries;
    }
  }
  
  // Example usage of the generateFibonacciSeries function
  let fibonacciLimit = 8;
  let fibonacciSeries = generateFibonacciSeries(fibonacciLimit);
  console.log("Fibonacci series up to " + fibonacciLimit + ": " + fibonacciSeries.join(", "));
  