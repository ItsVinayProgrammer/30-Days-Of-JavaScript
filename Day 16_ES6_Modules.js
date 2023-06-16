// Module 1: utils.js
export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Module 2: math.js
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// Module 3: storage.js
let data = [];

export function addToStorage(item) {
  data.push(item);
  console.log(`${item} added to storage.`);
}

export function removeFromStorage(item) {
  const index = data.indexOf(item);
  if (index !== -1) {
    data.splice(index, 1);
    console.log(`${item} removed from storage.`);
  } else {
    console.log(`${item} not found in storage.`);
  }
}

export function getStorage() {
  return data;
}

// Module 4: main.js
import { capitalize, generateRandomNumber } from './utils.js';
import { add, multiply } from './math.js';
import { addToStorage, removeFromStorage, getStorage } from './storage.js';

const name = 'john doe';
const capitalized = capitalize(name);
console.log(capitalized); // Output: John doe

const randomNumber = generateRandomNumber(1, 10);
console.log(randomNumber); // Output: Random number between 1 and 10

const sum = add(5, 3);
console.log(sum); // Output: 8

const product = multiply(2, 4);
console.log(product); // Output: 8

addToStorage('Apple');
addToStorage('Banana');
addToStorage('Orange');
console.log(getStorage()); // Output: ['Apple', 'Banana', 'Orange']

removeFromStorage('Banana');
console.log(getStorage()); // Output: ['Apple', 'Orange']
