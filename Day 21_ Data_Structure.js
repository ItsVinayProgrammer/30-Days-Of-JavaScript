//Day 21_ Data_Structure

// Creating a Stack data structure using an array
class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push element to the top of the stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove and return the top element of the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    // Return the top element of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size() {
      return this.items.length;
    }
  
    // Print the elements of the stack
    printStack() {
      let stackString = "";
      for (let i = 0; i < this.items.length; i++) {
        stackString += this.items[i] + " ";
      }
      console.log(stackString.trim());
    }
  }
  
  // Create a stack instance and test the functionality
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.push(40);
  stack.printStack(); // Output: 10 20 30 40
  console.log(stack.peek()); // Output: 40
  console.log(stack.pop()); // Output: 40
  console.log(stack.size()); // Output: 3
  console.log(stack.isEmpty()); // Output: false
  stack.printStack(); // Output: 10 20 30
  