var http = require('http');
var fs = require('fs');
 
console.log("++++++ Starting server ++++++++++")

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  
  var contents = fs.readFileSync('/home/node/resouce/file.txt', 'utf8');
  console.log("File content : " + contents);
  var env = process.env.EXT_PROPERTY;
  console.log("Environment Variable: " + env);
  response.end('Hello World !. File content ' + contents + ", Environment Variable: " + env);
};
var www = http.createServer(handleRequest);
www.listen(8080);
