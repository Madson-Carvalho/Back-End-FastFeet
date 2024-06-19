const Router = require("express");

const AuthenticationController = require("../controllers/AuthenticationController")

const authRoutes = Router()

const authController = new AuthenticationController()

authRoutes.post('/login', authController.login);

module.exports = authRoutes