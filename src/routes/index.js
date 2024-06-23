const {Router} = require("express");
const usersRoutes = require('./users.routes')
const authRoutes = require('./authentication.routes')
const authenticationToken = require("../middleware/authenticationJWT");
const recipientRoutes = require("./recipient.routes");

const routes = Router();

routes.use("/api/v1/users", authenticationToken, usersRoutes);
routes.use("/api/v1/recipient", authenticationToken, recipientRoutes);

routes.use("/api/v1/auth", authRoutes);

module.exports = routes;