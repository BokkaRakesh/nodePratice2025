const express = require('express');
const routes = express.Router();
const indexController = require('../controllers/indexController'); 
routes.get('/', indexController.getIndex);
module.exports = routes;

