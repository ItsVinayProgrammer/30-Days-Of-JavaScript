// Day 5: Arrays and Array Manipulation

// Example of creating an array
let fruits = ["apple", "banana", "orange", "grape"];

// Example of accessing array elements
console.log(fruits[0]); // Output: "apple"
console.log(fruits[2]); // Output: "orange"

// Example of updating array elements
fruits[1] = "kiwi";
console.log(fruits); // Output: ["apple", "kiwi", "orange", "grape"]

// Example of adding elements to the end of an array
fruits.push("melon");
console.log(fruits); // Output: ["apple", "kiwi", "orange", "grape", "melon"]

// Example of removing elements from the end of an array
let lastFruit = fruits.pop();
console.log(fruits); // Output: ["apple", "kiwi", "orange", "grape"]
console.log(lastFruit); // Output: "melon"

// Example of adding elements to the beginning of an array
fruits.unshift("mango");
console.log(fruits); // Output: ["mango", "apple", "kiwi", "orange", "grape"]

// Example of removing elements from the beginning of an array
let firstFruit = fruits.shift();
console.log(fruits); // Output: ["apple", "kiwi", "orange", "grape"]
console.log(firstFruit); // Output: "mango"

// Example of finding the index of an element in an array
let index = fruits.indexOf("orange");
console.log(index); // Output: 2

// Example of removing elements from a specific index in an array
let removedFruit = fruits.splice(1, 2);
console.log(fruits); // Output: ["apple"]
console.log(removedFruit); // Output: ["kiwi", "orange"]

// Example of joining array elements into a string
let joinedString = fruits.join(", ");
console.log(joinedString); // Output: "apple"

// Example of checking the length of an array
let length = fruits.length;
console.log(length); // Output: 1