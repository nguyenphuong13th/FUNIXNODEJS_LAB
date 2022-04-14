const http = require('http');//importing http module
//creating server
const server = http.createServer((req,res)=>
{
    console.log(req);
})
//listening to port
server.listen(3000);// listrning to port 3000 loccalhost:3000