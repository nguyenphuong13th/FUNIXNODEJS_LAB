const express = require('express');//importing express module
const app = express();//creating an express application
const bodyParser = require('body-parser');//importing body-parser module
app.use(bodyParser.urlencoded({extended:true}));//using body-parser, to parse the body of the request which can contain anytype of data
app.use('/add-product',(req, res, next) => {
    res.send('<html><body><form action = "/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form></body></html>');//sending a response
})//2nd middleware
app.get('/',(req, res, next) => {// use get method if use use post method then it will not run into post method
    res.send('<h1>Hello from Express.js</h1>');//sending a response
})//3rd middleware
app.post('/product',(req, res, next) => { // only for post requests
    console.log(req.body);//logging the request body
    res.redirect("/");//back to the root
})//4th middleware
// const server = http.createServer(app);//creating a server
// //listening to port
// server.listen(3000);// listrning to port 3000 loccalhost:3000
app.listen(3000);//listrning to port 3000 loccalhost:3000
