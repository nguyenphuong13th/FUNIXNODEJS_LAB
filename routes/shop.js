const express = require('express');//importing express module
const router = express.Router();//creating an express router
const path = require('path');//importing path module
const productController = require('../controller/product');//importing product controller
router.get('/',productController.getProduct);//getting all products
module.exports = router;//exporting the router