const http = require('http');//importing http module
//creating server
const server = http.createServer((req,res)=>
{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My Second App</title></head>');
    res.write('<body><h1>Hello from my Node.js server</h1></body>');
    res.write('</html>');
    res.end();
})
//listening to port
server.listen(3000);// listrning to port 3000 loccalhost:3000