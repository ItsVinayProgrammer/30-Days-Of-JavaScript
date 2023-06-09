// Day 9: Error Handling

// Example of a function that performs a risky operation
function performRiskyOperation() {
    try {
      // Perform a risky operation that may throw an error
      throw new Error("Something went wrong");
    } catch (error) {
      console.log("An error occurred: " + error.message);
      // Perform error handling or fallback logic here
    } finally {
      console.log("Finally block executed");
      // Perform cleanup or finalization tasks here
    }
  }
  
  // Example usage of the performRiskyOperation function
  performRiskyOperation();
  
  // Example of a custom error class
  class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomError";
    }
  }
  
  // Example of a function that throws a custom error
  function throwCustomError() {
    try {
      throw new CustomError("This is a custom error");
    } catch (error) {
      console.log("An error occurred: " + error.message);
      console.log("Error name:", error.name);
      // Perform error handling or fallback logic here
    }
  }
  
  // Example usage of the throwCustomError function
  throwCustomError();
  