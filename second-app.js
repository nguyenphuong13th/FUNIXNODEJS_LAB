const express = require('express');//importing express module
const app = express();//creating an express application
const bodyParser = require('body-parser');//importing body-parser module
const adminData = require('./routes/admin');//importing admin routes
const shopRoutes = require('./routes/shop');//importing shop routes
const path = require('path');//importing path module
const { router } = require('json-server');
app.use(bodyParser.urlencoded({extended:true}));//using body-parser
app.use(express.static(path.join(__dirname,'public')));//using express static middleware . making the path of any file .css or .js to public folder of the project
app.use('/admin',adminData.routes);//using admin routes and change all url to localhost:3000/admin/...
app.use(shopRoutes);//using shop routes
app.use ((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404-Error.html'));//sending a response
});
// const server = http.createServer(app);//creating a server
// //listening to port
// server.listen(3000);// listrning to port 3000 loccalhost:3000
app.listen(3000);//listrning to port 3000 loccalhost:3000
