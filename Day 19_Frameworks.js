//Day 19_Frameworks

const express = require('express');
const bodyParser = require('body-parser');

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Mock data
let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen' }
];

// Routes
app.get('/api/books', (req, res) => {
  res.json(books);
});

app.get('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) {
    res.status(404).json({ error: 'Book not found' });
  } else {
    res.json(book);
  }
});

app.post('/api/books', (req, res) => {
  const book = req.body;
  book.id = books.length + 1;
  books.push(book);
  res.status(201).json(book);
});

app.put('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) {
    res.status(404).json({ error: 'Book not found' });
  } else {
    Object.assign(book, req.body);
    res.json(book);
  }
});

app.delete('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    res.status(404).json({ error: 'Book not found' });
  } else {
    books.splice(index, 1);
    res.sendStatus(204);
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
