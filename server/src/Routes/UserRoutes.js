const express = require('express');
const Router = express.Router();
const userController = require('../DB/Controllers/UserController');
const { authenticateToken } = require('../middleware/authentitication');

Router.get('/', userController.getAllUser);
Router.get('/:id', userController.getUserById);
Router.put('/:id',authenticateToken, userController.updateUser);
Router.delete('/:id',authenticateToken, userController.deleteUser);

module.exports = Router;
