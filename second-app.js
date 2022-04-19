const http = require('http');//importing http module
const express = require('express');//importing express module
const app = express();//creating an express application
app.use((req, res, next) => {
    console.log('this is the first middleware');
    next();//allows the request to continue to the next middleware
})//1st middleware
app.use((req, res, next) => {
    console.log('this is the second middleware');
    res.send('<h1>Hello from Express.js</h1>');//sending a response
})//2nd middleware

const server = http.createServer(app);//creating a server
//listening to port
server.listen(3000);// listrning to port 3000 loccalhost:3000