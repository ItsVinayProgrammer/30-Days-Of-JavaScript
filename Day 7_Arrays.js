// Day 7: Arrays

// Creating an array
let fruits = ["apple", "banana", "orange"];

// Accessing elements in an array
console.log(fruits[0]); // Output: "apple"
console.log(fruits[1]); // Output: "banana"

// Modifying elements in an array
fruits[2] = "grape";
console.log(fruits); // Output: ["apple", "banana", "grape"]

// Adding elements to an array
fruits.push("mango");
console.log(fruits); // Output: ["apple", "banana", "grape", "mango"]

// Removing elements from an array
fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "grape"]

// Finding the length of an array
console.log(fruits.length); // Output: 3

// Iterating over an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
