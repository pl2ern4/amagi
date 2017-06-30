var request = require('request');
var http = require('http');
var data = "";
request('https://amagi.herokuapp.com/ui-test/api/v1/spots', function (error, response, body) {
    if (!error && response.statusCode == 200) {
       
     }	 
   });
http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end(body);
   // Send the response body as "Hello World"
   ;
   
}).listen(8080);

// Console will print the message
console.log('Server running at http://127.0.0.1:8080/');