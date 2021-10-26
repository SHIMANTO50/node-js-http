const http = require("http");
const fs=require("fs");

const PORT = 2000;
const hostname = "localhost";
const home=fs.readFileSync("./index.html","utf-8");
const server = http.createServer((req, res) => {
     
    if(req.url==="/"){
         res.end(home);
    }
    else if(req.url==="/about"){
        res.end("<h1> PAGE</h1>");
    }
    else if(req.url==="/contact"){
        res.end("<h1>CONTACT PAGE</h1>");
    }
    else if(req.url==="/service"){
         res.end("<h1>SERVICE PAGE</h1>");
    }else{
        res.end("<h1>404 Page Not Found</h1>");
    }
});

server.listen(PORT, hostname, () => {
    console.log('Server is working on ' + hostname + ' and port ' + PORT);
});