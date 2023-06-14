// Day 14: Promises

// Simulating an asynchronous API call to fetch user data
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [
        { id: 1, name: "John Doe", age: 25 },
        { id: 2, name: "Jane Smith", age: 32 },
        { id: 3, name: "Bob Johnson", age: 40 }
      ];
      
      resolve(users); // Resolve the Promise with the user data
    }, 2000); // Simulating a delay of 2 seconds
  });
}

// Simulating an asynchronous API call to fetch user posts
function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [
        { id: 1, userId: 1, title: "First Post", body: "This is my first post" },
        { id: 2, userId: 1, title: "Second Post", body: "This is my second post" },
        { id: 3, userId: 2, title: "Hello World", body: "Just saying hello!" },
        { id: 4, userId: 3, title: "Final Post", body: "Last post of the day" }
      ];
      
      const userPosts = posts.filter(post => post.userId === userId);
      resolve(userPosts); // Resolve the Promise with the user's posts
    }, 1500); // Simulating a delay of 1.5 seconds
  });
}

// Fetching user data and posts using Promises
fetchUserData()
  .then(users => {
    console.log("User data:", users);
    const userId = users[0].id; // Assume we want to fetch posts for the first user
    
    return fetchUserPosts(userId); // Return the Promise chain for fetching user posts
  })
  .then(posts => {
    console.log("User posts:", posts);
  })
  .catch(error => {
    console.log("An error occurred:", error);
  });
