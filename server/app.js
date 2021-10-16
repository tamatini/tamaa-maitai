// Imports
const express = require('express');
const app = express();
const foodRoutes = require('./src/Routes/foodRoutes');
const send404 = require('./src/DB/Controllers/404');

// Application middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Application routes
app.use(`/api/v1/foods`, foodRoutes);
app.use(send404);

// Exports
module.exports = app;
