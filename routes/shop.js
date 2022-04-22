const express = require('express');//importing express module
const router = express.Router();//creating an express router

router.get('/',(req, res, next) => {// use get method if use use post method then it will not run into post method or you can put post method before this use method
    res.send('<h1>Hello from Express.js</h1>');//sending a response
})
module.exports = router;//exporting the router