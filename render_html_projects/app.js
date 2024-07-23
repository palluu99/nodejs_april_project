const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req,res)=>{

    if(req.url === "/home")
    {
        fs.readFile('index.html',(err,data)=>{
            if(err)
            {
                res.writeHead(500,{'Content-Type':'text/plain'});
                res.end('500 internal server error');
            }
            else
            {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(data);
            }
        });
    }
});

const port = 8080;
server.listen(port,()=>{
    console.log("server Started...")
})