const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse the body of POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Define routes to serve HTML files
app.get('/t', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/users', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'users.html'));
});

// Handle registration logic (POST to '/')
app.post('/', (req, res) => {
  const { username, email, password } = req.body;
  
  // Log the received registration data (in real-world apps, save this to a database)
  console.log('Registration Data:', { username, email, password });

  // Redirect to a success page or users page
  res.redirect('/users');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
