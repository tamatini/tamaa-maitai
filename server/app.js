// Imports
const express = require('express');
const app = express();

const send404 = require('./src/DB/Controllers/404');

// Routes imports
const foodRoutes = require('./src/Routes/foodRoutes');
const userRoutes = require('./src/Routes/UserRoutes');
const authRoutes =require('./src/Routes/authRoutes');

// Application middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Application routes
app.use(`/api/v1/foods`, foodRoutes);
app.use(`/api/v1/users`, userRoutes);
app.use(`/api/v1/auth`, authRoutes);
app.use(send404);

// Exports
module.exports = app;
