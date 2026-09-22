const http = require('http');

const contacts = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

const text ={
    "message": "Hello Node.js"
}
const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.method === 'GET' && req.url === '/contacts') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(contacts));
    return;
  }
  if(req.method ==='GET' && req.url ==='/hello'){
    res.writeHead(200,{
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(text));
  }

  res.writeHead(404, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify({
    message: 'Not Found'
  }));
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});