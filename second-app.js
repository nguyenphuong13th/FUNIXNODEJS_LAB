const express = require('express');//importing express module
const app = express();//creating an express application
const bodyParser = require('body-parser');//importing body-parser module
const adminRoutes = require('./routes/admin');//importing admin routes
const shopRoutes = require('./routes/shop');//importing shop routes
app.use(bodyParser.urlencoded({extended:true}));//using body-parser
app.use(adminRoutes);//using admin routes
app.use(shopRoutes);//using shop routes
app.use ((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');//sending a response
});
// const server = http.createServer(app);//creating a server
// //listening to port
// server.listen(3000);// listrning to port 3000 loccalhost:3000
app.listen(3000);//listrning to port 3000 loccalhost:3000
