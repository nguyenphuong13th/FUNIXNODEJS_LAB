const express=require('express');

const router=express.Router();
router.get('/add-product',(req, res, next) => {
    res.send('<html><body><form action = "/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form></body></html>');//sending a response
})
router.post('/product',(req, res, next) => { // only for post requests
    console.log(req.body);//logging the request body
    res.redirect("/");//back to the root
})
module.exports=router;