const Router = require("express");

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()

const usersController = new UsersController()

usersRoutes.post('/create', usersController.create);
usersRoutes.put('/edit/:id', usersController.update);
usersRoutes.delete('/remove/:id', usersController.delete);
usersRoutes.get('/find-all', usersController.findAll);
usersRoutes.get('/find-by-id/:id', usersController.findById);
usersRoutes.get('/count', usersController.countUsers);

module.exports = usersRoutes