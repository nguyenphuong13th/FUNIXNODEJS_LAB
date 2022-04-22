const express=require('express');
const path=require('path');
const router=express.Router();
const rootDir=require('../ultil/path');
//admin/add-product => GET
router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(rootDir,'views','add-product.html'));//sending a response, action is the url where the form will be submitted, method is the method used to submit the form (POST or GET)
})
//admin/add-product => POST
router.post('/add-product',(req, res, next) => { // only for post requests url can be the same with get
    console.log(req.body);//logging the request body
    res.redirect("/");//back to the root
})
module.exports=router;