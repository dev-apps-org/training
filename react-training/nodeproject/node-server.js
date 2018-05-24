// Importing http module
let httpModule = require("http");
console.log("http module imported");

// creating a server
let httpServer = httpModule.createServer((request, response) => {
    console.log("request received from url: ", request.url);
    
    if(request.url == '/') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<html><body><h2>Best way to answer question is to smile !!!!!</h2></body></html>');
    }
    else if(request.url == '/testJson') {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(JSON.stringify({"id":"1","name":"Ankit"}));
    }
    else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.write('<html><body><h2>Errr....Invalid URL !!!</h2></body></html>');
    }
    
    // stopping response streaming with the response content
    // response.end("Hello World!!");
    response.end();
    
    console.log("response committed");
});

// listening the server at port <port number>
httpServer.listen(3002, "localhost", () => {
    console.log("Server is listening at port # 3002");
});