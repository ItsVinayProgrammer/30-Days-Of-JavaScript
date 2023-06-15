// Day 15:  

// Simulating an asynchronous API request
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating successful API response
        const userData = { id: userId, name: 'Vinay', email: 'Vinay@example.com' };
        resolve(userData);
        
        // Simulating error response
        // reject(new Error('Failed to fetch user data'));
      }, 2000);
    });
  }
  
  // Simulating an asynchronous database query
  function fetchOrders(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating successful database response
        const orders = ['Order 1', 'Order 2', 'Order 3'];
        resolve(orders);
        
        // Simulating error response
        // reject(new Error('Failed to fetch user orders'));
      }, 1500);
    });
  }
  
  // Example usage of the Promises
  console.log('Fetching user data...');
  fetchUserData(1)
    .then((userData) => {
      console.log('User data fetched successfully:', userData);
      console.log('Fetching user orders...');
      return fetchOrders(userData.id);
    })
    .then((orders) => {
      console.log('User orders fetched successfully:', orders);
      console.log('All operations completed!');
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
  