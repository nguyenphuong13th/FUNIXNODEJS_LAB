const express = require('express');//importing express module
const router = express.Router();//creating an express router
const path = require('path');//importing path module
const rootDir=require('../ultil/path');
const adminData = require('./admin');//importing admin routes
router.get('/',(req, res, next) => {// use get method if use use post method then it will not run into post method or you can put post method before this use method
    //dirname = routes where contains this shop file so we must go up 1 level by ../ then go to views folder and then go to shop.html file . path.join will join all segments together to have the file path
    // console.log('shop.js',adminData.products);
    // res.sendFile(path.join(rootDir,'views','shop.html'));//sending a response

    const products = adminData.products;//getting the products array from admin.js


    res.render('shop',{prods:products,pageTitle:'Shop',path:'/'});//rendering the shop page we dont need to defined path because it is already defined in views folder, we dont need to write shop.pug because it is already defined in second-app.js we will use pug template engine
})
module.exports = router;//exporting the router