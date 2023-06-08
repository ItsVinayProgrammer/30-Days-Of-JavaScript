// Day 8: Objects

// Example of creating an object
let person = {
    name: 'Vinay',
    age: 18,
    profession: 'Developer'
  };
  
  // Example of accessing object properties
  console.log(person.name); // Output: 'Vinay'
  console.log(person.age); // Output: 18
  console.log(person.profession); // Output: 'Developer'
  
  // Example of modifying object properties
  person.age = 18;
  console.log(person.age); // Output: 18
  
  // Example of adding new properties to an object
  person.location = 'India';
  console.log(person.location); // Output: 'India'
  
  // Example of nested objects
  let student = {
    name: 'Vinay',
    age: 18,
    education: {
      school: 'ABC High School',
      graduationYear: 2021
    }
  };
  
  console.log(student.education.school); // Output: 'ABC High School'
  console.log(student.education.graduationYear); // Output: 2021
  