// Day 6: Object-Oriented Programming (OOP)

// Example of a class representing a Bank Account
class BankAccount {
    constructor(owner, balance = 0) {
      this.owner = owner;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited ${amount} into ${this.owner}'s account. New balance: ${this.balance}`);
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from ${this.owner}'s account. New balance: ${this.balance}`);
      } else {
        console.log(`Insufficient funds. ${this.owner}'s account balance: ${this.balance}`);
      }
    }
  
    displayBalance() {
      console.log(`${this.owner}'s account balance: ${this.balance}`);
    }
  }
  
  // Example usage of the BankAccount class
  const account1 = new BankAccount('John Doe');
  account1.displayBalance(); // John Doe's account balance: 0
  
  account1.deposit(500); // Deposited 500 into John Doe's account. New balance: 500
  account1.withdraw(200); // Withdrawn 200 from John Doe's account. New balance: 300
  account1.displayBalance(); // John Doe's account balance: 300
  
  account1.withdraw(400); // Insufficient funds. John Doe's account balance: 300
  
  const account2 = new BankAccount('Jane Smith', 1000);
  account2.displayBalance(); // Jane Smith's account balance: 1000
  
  account2.deposit(200); // Deposited 200 into Jane Smith's account. New balance: 1200
  account2.displayBalance(); // Jane Smith's account balance: 1200
  