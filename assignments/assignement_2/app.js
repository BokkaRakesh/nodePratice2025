const express = require('express');
const app = express();
const logger1 = require('./middlewares/logger1');
const logger2 = require('./middlewares/logger2');
const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');

// Apply middleware
app.use(logger1);
app.use(logger2);

// Routes
app.use('/', indexRoutes);
app.use('/users', usersRoutes);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
