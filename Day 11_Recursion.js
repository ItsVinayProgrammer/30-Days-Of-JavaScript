// Day 11: Recursion

// Recursive function to calculate factorial
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

let number = 5;
console.log("The factorial of", number, "is:", factorial(number));

// Recursive function to generate Fibonacci sequence
function fibonacci(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let sequence = fibonacci(n - 1); 
  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  return sequence;
}

let fibonacciLimit = 8;
console.log("The Fibonacci sequence up to", fibonacciLimit, "is:", fibonacci(fibonacciLimit));
