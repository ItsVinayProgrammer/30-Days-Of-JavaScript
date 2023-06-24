//Day 24_Security

// User database
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' }
  ];
  
  // Regular expression for password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
  // Function to validate password
  function validatePassword(password) {
    return passwordRegex.test(password);
  }
  
  // Function to authenticate user
  function authenticateUser(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    return !!user;
  }
  
  // Function to sanitize user input to prevent XSS attacks
  function sanitizeInput(input) {
    const div = document.createElement('div');
    div.innerText = input;
    return div.innerHTML;
  }
  
  // Example usage
  const password1 = 'Abcdef123!'; // Valid password
  const password2 = '12345678';   // Invalid password
  
  console.log(validatePassword(password1)); // true
  console.log(validatePassword(password2)); // false
  
  const username = 'user1';
  const password = 'password1';
  
  if (authenticateUser(username, password)) {
    console.log('User authenticated successfully');
  } else {
    console.log('Authentication failed');
  }
  
  const userInput = '<script>alert("XSS attack!");</script>';
  const sanitizedInput = sanitizeInput(userInput);
  console.log(sanitizedInput); // &lt;script&gt;alert("XSS attack!");&lt;/script&gt;
  