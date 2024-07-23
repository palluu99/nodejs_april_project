 const http = require('http')
 const fs = require('fs')
 const path = require('path')

 const server = http.createServer((req,res)=>{

    //handle root or home URL
    
    if(req.url ==='/' || req.url.toLocaleLowerCase()==='/home')
    {
        fs.readFile(path.join(__dirname,'public','index.html'),(err,data)=>{
            if(err) throw err
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(data,'utf8');
        })
    }

    //handle css file

    else if(req.url.match(/\.css$/))
    {
        fs.readFile(path.join(__dirname,'public/css',req.url),(err,data)=>{
          if(err) throw err
          res.writeHead(200,{'Content-Type':'text/css'});
          res.end(data,'utf8');
        })
    }

    //handle image file

    else if(req.url.match(/\.(png|jpg|jpeg|webp|gif)$/))
        {
            let img_ext = path.extname(req.url).substring(1);
            fs.readFile(path.join(__dirname,'public/images',req.url),(err,data)=>{
                if(err) throw err;
                res.writeHead(200,{'Content-Type':`image/${img_ext}`});
                res.end(data);    
        })
    }
 });
 const port = 1010;
 server.listen(port,()=>{
    console.log('Server is running on port ${port}')
 });