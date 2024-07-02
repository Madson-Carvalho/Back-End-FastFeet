const Router = require("express");

const PackageController = require("../controllers/PackageController")

const packageRoutes = Router()

const packageController = new PackageController()

packageRoutes.post('/create', packageController.create);
packageRoutes.put('/edit/:id', packageController.update);
packageRoutes.delete('/remove/:id', packageController.delete);
packageRoutes.get('/find-all', packageController.findAll);
packageRoutes.get('/find-by-id/:id', packageController.findById);
packageRoutes.get('/count', packageController.countPackages);

packageRoutes.get('/find-all-by-id/:id', packageController.findAllById);

module.exports = packageRoutes
