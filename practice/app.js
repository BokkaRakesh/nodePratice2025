const express = require('express');
const app = express();
app.use('/',(req, res, next) => {
   console.log('This Always runs!');
   next(); // Allows the request to continue to the next middleware in line
});
app.use('/add-product',(req, res, next) => {
    console.log('In the another middleware');
    res.send('<h1>"Add Product" page</h1>');
});
app.use('/',(req, res, next) => {
    console.log('In the another middleware');
    res.send('<h1>Hello from Express!</h1>');
});
app.listen(3000); // Start the server on port 3000