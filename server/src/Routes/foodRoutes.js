// Imports
const express = require('express');
const Router = express.Router();
const foodController = require('../DB/Controllers/FoodControllers');

// Routes
Router.get('/', foodController.getAllFood);
Router.post('/', foodController.postFood);
Router.get('/:id', foodController.getFoodById);
Router.put('/:id', foodController.updateFood);
Router.delete('/:id', foodController.deleteFood);

// Exports
module.exports = Router;
