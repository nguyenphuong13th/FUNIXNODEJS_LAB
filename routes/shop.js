const express = require('express');//importing express module
const router = express.Router();//creating an express router
const path = require('path');//importing path module

router.get('/',(req, res, next) => {// use get method if use use post method then it will not run into post method or you can put post method before this use method
    //dirname = routes where contains this shop file so we must go up 1 level by ../ then go to views folder and then go to shop.html file . path.join will join all segments together to have the file path
    res.sendFile(path.join(__dirname,'../','views','shop.html'));//sending a response

})
module.exports = router;//exporting the router