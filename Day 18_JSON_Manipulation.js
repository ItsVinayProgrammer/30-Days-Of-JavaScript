//Day 18: JSON Manipulation

// JSON data
const jsonData = `{
    "name": "Vinay Verma",
    "age": 18,
    "email": "itsvinayprogrammer@gmail.com",
    "address": {
      "street": "XYZ Main St",
      "city": "Chennai",
      "country": "India"
    }
  }`;
  
  // Parsing JSON string into JavaScript object
  const data = JSON.parse(jsonData);
  
  // Accessing the values in the JSON object
  const name = data.name;
  const age = data.age;
  const email = data.email;
  const address = data.address;
  const street = address.street;
  const city = address.city;
  const country = address.country;
  
  // Displaying the values
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Email:", email);
  console.log("Street:", street);
  console.log("City:", city);
  console.log("Country:", country);

  