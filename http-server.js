const http = require('http');

const PORT = 3002;

const server = http.createServer(function (req, res){
    console.log('req received on url: ', req);

    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Hello World</h1>');
    }
    else if(req.url === '/api/users'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({name: 'John', age: 30}));
    }
    else{}
})


server.listen(PORT, function(){
    console.log(`server is running on port ${PORT}`);
})