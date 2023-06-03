// Day 3: Loops

// Example of a for loop
for (let i = 1; i <= 5; i++) {
    console.log("Count: " + i);
    }
    
    // Example of a while loop
    let count = 1;
    while (count <= 5) {
    console.log("Count: " + count);
    count++;
    }
    
    // Example of a do...while loop
    let num = 1;
    do {
    console.log("Number: " + num);
    num++;
    } while (num <= 5);
    
    // Example of looping over an array
    const colors = ["red", "green", "blue", "yellow", "orange"]; 
    for (let i = 0; i < colors.length; i++) {
    console.log("Color: " + colors[i]);
    }
    
    // Example of looping over an object
    const person = {
    name: "Vinay Verma",
    age: 18,
    city: "India"
    };
    for (let key in person) {
    console.log(key + ": " + person[key]);
    }