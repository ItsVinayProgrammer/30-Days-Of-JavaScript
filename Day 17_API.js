//Day 17: API

// Fetch user data from the GitHub API
fetch('https://api.github.com/users/ItsVinayProgrammer')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error fetching user data from the API');
    }
    return response.json();
  })
  .then(data => {
    // Process the retrieved data
    const username = data.login;
    const name = data.name;
    const bio = data.bio;
    const followers = data.followers;
    const following = data.following;
    const repos = data.public_repos;

    // Display the user information
    console.log(`Username: ${username}`);
    console.log(`Name: ${name}`);
    console.log(`Bio: ${bio}`);
    console.log(`Followers: ${followers}`);
    console.log(`Following: ${following}`);
    console.log(`Public Repositories: ${repos}`);
  })
  .catch(error => {
    console.error('Error fetching user data:', error);
  });
