const http = require('http');//importing http module

const routes = require('./routes');//importing routes module
//creating server
console.log(routes.sometext);
const server = http.createServer(routes.handler);
//listening to port
server.listen(3000);// listrning to port 3000 loccalhost:3000