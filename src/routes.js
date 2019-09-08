const express = require("express");

const ProductController = require("./controllers/ProductController");
const UserController = require("./controllers/UserConstroller");

const router = express.Router()

router.post('/product', ProductController.add)
router.post('/product/:id/like', ProductController.likeById)

router.get('/product', ProductController.findAll)
router.get('/product/:id', ProductController.findById)

router.delete('/product/:id', ProductController.deleteById)
router.delete('/product', ProductController.deleteAll)

router.post('/user', UserController.add)
router.get('/user', UserController.findAll)
router.get('/user/login', UserController.findByUserPassword)

module.exports = router;