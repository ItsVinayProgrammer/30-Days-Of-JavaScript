// Day 10: Regular Expressions

// Regular expressions (regex) are powerful tools for pattern matching and manipulation of text. They allow you to search, extract, and modify strings based on specific patterns.

// Example 1: Matching a specific word
const text = "Hello, world!";
const pattern = /world/;
const result = pattern.test(text);
console.log(result); // Output: true

// Example 2: Matching multiple occurrences of a pattern
const text2 = "Hello, hello, hello!";
const pattern2 = /hello/gi;
const matches = text2.match(pattern2);
console.log(matches); // Output: ["Hello", "hello", "hello"]

// Example 3: Extracting information using capture groups
const text3 = "My phone number is (123) 456-7890";
const pattern3 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const match = text3.match(pattern3);
const phoneNumber = match[0];
const areaCode = match[1];
const firstThreeDigits = match[2];
const lastFourDigits = match[3];
console.log(phoneNumber); // Output: (123) 456-7890
console.log(areaCode); // Output: 123
console.log(firstThreeDigits); // Output: 456
console.log(lastFourDigits); // Output: 7890

// Example 4: Replacing text using regular expressions
const text4 = "I love JavaScript!";
const pattern4 = /JavaScript/;
const replacedText = text4.replace(pattern4, "coding");
console.log(replacedText); // Output: I love coding!

// Example 5: Splitting text using regular expressions
const text5 = "Hello, World!";
const pattern5 = /[\s,]+/;
const parts = text5.split(pattern5);
console.log(parts); // Output: ["Hello", "World!"]

