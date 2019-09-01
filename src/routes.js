const express = require("express");
const ProductController = require("./controllers/ProductController");
const UserController = require("./controllers/UserConstroller");

const productRoutes = express.Router();
const userRoutes = express.Router();

productRoutes.use(
  productRoutes.post('/product', ProductController.add),

  productRoutes.get('/product', ProductController.findById),

  productRoutes.delete('/product/:id', ProductController.findById),
);

userRoutes.use(
  userRoutes.post('/user', UserController.add),

  userRoutes.get('/user', UserController.findAll),

  userRoutes.get('/user/login', UserController.findByUserPassword),
);

module.exports = (productRoutes, userRoutes);