const http = require('http');//importing http module
const fs = require('fs');//importing fs module
//creating server
const server = http.createServer((req,res)=>
{
    const url = req.url;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && req.method === 'POST'){
        fs.writeFileSync('message.txt','DUMMY');
        res.statusCode = 302;//code indicates that the resource requested has been temporarily moved to the URL given by the Location header
        res.setHeader('Location','/');//redirecting to home page
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My Second App</title></head>');
    res.write('<body><h1>Hello from my Node.js server</h1></body>');
    res.write('</html>');
    res.end();
})
//listening to port
server.listen(3000);// listrning to port 3000 loccalhost:3000