const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req,res)=>{
     if(req.url === "/")
     {
        fs.readFile('index.html',(err,data)=>{
            if(err)
            {
                res.writeHead('500',{'Content-Type': 'text/plain'});
                res.end('500 Internal server Error');
            }
            else
            {
                res.writeHead('200',{'Content-Type': 'text/html'});
                res.end(data);
            }
        });
     }

     else if(req.url ==='/style.css')
     {
        fs.readFile('css/style.css',(err,data)=>{
            if(err)
            {
                res.writeHead('500',{'content-Type':'text/plain'});
                res.writeHead('500 Internal Server Error');
            }
            else
            {
                res.writeHead('200',{'Content-Type':'text/css'});
                res.end(data);
            }
        });
     }
     else
     {

     }
});
const port = 7070;
server.listen(port,()=>{
  console.log('Server Strated')
});