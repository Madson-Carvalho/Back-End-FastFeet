const Router = require("express");

const RecipientController = require("../controllers/RecipientController")

const recipientRoutes = Router()

const recipientController = new RecipientController()

recipientRoutes.post('/create', recipientController.create);
recipientRoutes.put('/edit/:id', recipientController.update);
recipientRoutes.delete('/remove/:id', recipientController.delete);
recipientRoutes.get('/find-all', recipientController.findAll);
recipientRoutes.get('/find-by-id/:id', recipientController.findById);

module.exports = recipientRoutes