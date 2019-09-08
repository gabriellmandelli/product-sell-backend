const express = require("express");

const ProductController = require("./controllers/ProductController");
const UserController = require("./controllers/UserConstroller");

const productRoutes = express.Router()
const userRoutes = express.Router()

productRoutes.post('/product', ProductController.add)
productRoutes.post('/product/:id/like', ProductController.likeById)

productRoutes.get('/product', ProductController.findAll)
productRoutes.get('/product/:id', ProductController.findById)

productRoutes.delete('/product/:id', ProductController.deleteById)
productRoutes.delete('/product', ProductController.deleteAll)

userRoutes.post('/user', UserController.add)
userRoutes.get('/user', UserController.findAll)
userRoutes.get('/user/login', UserController.findByUserPassword)

module.exports = [productRoutes, userRoutes];