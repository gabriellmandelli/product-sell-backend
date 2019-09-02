const express = require("express");
const ProductController = require("./controllers/ProductController");
const UserController = require("./controllers/UserConstroller");

const routes = express.Router()

//- Product
routes.post('/product', ProductController.add)
routes.get('/product', ProductController.findAll)
routes.get('/product/:id', ProductController.findById)

//-- User
routes.post('/user', UserController.add)
routes.get('/user', UserController.findAll)
routes.get('/user/login', UserController.findByUserPassword)

module.exports = routes;