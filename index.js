const http =  require('http');

let server = http.createServer((request, response) => {
if(request.url === '/'){
response.writeHead(200, {'content-type': 'text/html'}) //status head 200, json obj content type
response.write('<html><body><h1>hello world</h1><p>this is root page</p></body></html>')
response.end();
}else if(request.url === '/profile'){
    response.writeHead(200, {'content-type': 'text/html'}) //status head 200, json obj content type
    response.write('<html><body><h1>welcome to profile,hnbvnbvnbvnbvnvbvvggvsdhshdsdh</h1><p>this is root page</p></body></html>')
    response.end();
}
else{
    response.writeHead(404,{'content-type': 'text.html'});
    response.write('<html><body><h1> 404 page not found</h1></body></html>')
}
})

server.listen(8000);
console.log('server is running on port: ', 8000);