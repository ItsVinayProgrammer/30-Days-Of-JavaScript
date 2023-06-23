//Day 23_Testing

// MathUtils.js
const MathUtils = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };
  
  // Test cases
  const testCases = [
    {
      name: 'Addition: adds two positive numbers correctly',
      input: [2, 3],
      expected: 5,
    },
    {
      name: 'Addition: adds a positive and a negative number correctly',
      input: [2, -3],
      expected: -1,
    },
    {
      name: 'Subtraction: subtracts two positive numbers correctly',
      input: [5, 3],
      expected: 2,
    },
    {
      name: 'Subtraction: subtracts a positive and a negative number correctly',
      input: [5, -3],
      expected: 8,
    },
    {
      name: 'Multiplication: multiplies two positive numbers correctly',
      input: [2, 3],
      expected: 6,
    },
    {
      name: 'Multiplication: multiplies a positive and a negative number correctly',
      input: [2, -3],
      expected: -6,
    },
    {
      name: 'Division: divides two positive numbers correctly',
      input: [6, 3],
      expected: 2,
    },
    {
      name: 'Division: divides a positive number by zero',
      input: [6, 0],
      expected: Infinity,
    },
  ];
  
  // Run the tests
  testCases.forEach(({ name, input, expected }) => {
    const { add, subtract, multiply, divide } = MathUtils;
  
    let result;
    switch (name.split(':')[0].trim()) {
      case 'Addition':
        result = add(...input);
        break;
      case 'Subtraction':
        result = subtract(...input);
        break;
      case 'Multiplication':
        result = multiply(...input);
        break;
      case 'Division':
        result = divide(...input);
        break;
      default:
        result = null;
        break;
    }
  
    if (result === expected) {
      console.log(`[PASS] ${name}`);
    } else {
      console.log(`[FAIL] ${name}`);
      console.log(`- Expected: ${expected}`);
      console.log(`- Actual: ${result}`);
    }
  });
  