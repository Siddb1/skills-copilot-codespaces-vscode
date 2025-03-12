// Create web server
// Create a web server that listens for incoming requests on port 3000 and logs the request method and request URL to the console.

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  res.end();
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});