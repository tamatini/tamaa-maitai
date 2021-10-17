// Imports
const express = require('express');
const Router = express.Router();
const foodController = require('../DB/Controllers/FoodControllers');
const { authenticateToken } = require('../middleware/authentitication');

// Routes
Router.get('/', foodController.getAllFood);
Router.post('/',authenticateToken, foodController.postFood);
Router.get('/:id', foodController.getFoodById);
Router.put('/:id',authenticateToken, foodController.updateFood);
Router.delete('/:id',authenticateToken, foodController.deleteFood);

// Exports
module.exports = Router;
