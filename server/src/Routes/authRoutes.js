const express = require('express');
const Router = express.Router();
const authController = require('../DB/Controllers/authController');
const { authenticateToken, isAdmin } = require('../Helpers/functions');

Router.post('/register', authController.registerUser);
Router.post('/login', authController.login);
Router.get('/logout', authController.logout);

module.exports = Router;
