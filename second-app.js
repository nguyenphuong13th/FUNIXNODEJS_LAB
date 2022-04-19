const http = require('http');//importing http module
const express = require('express');//importing express module
const app = express();//creating an express application
const server = http.createServer(app);//creating a server
//listening to port
server.listen(3000);// listrning to port 3000 loccalhost:3000