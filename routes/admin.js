const express=require('express');

const router=express.Router();
router.get('/add-product',(req, res, next) => {
    res.send('<html><body><form action = "/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form></body></html>');//sending a response, action is the url where the form will be submitted, method is the method used to submit the form (POST or GET)
})
router.post('/add-product',(req, res, next) => { // only for post requests url can be the same with get
    console.log(req.body);//logging the request body
    res.redirect("/");//back to the root
})
module.exports=router;