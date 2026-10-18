const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const FILE_NAME = 'Glow & Grace _ Premium Salon & Beauty Studio (1).html';
const filePath = path.join(__dirname, FILE_NAME);

const server = http.createServer((req, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Error loading salon file: ' + err.message);
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache'
      });
      res.end(data);
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n========================================`);
  console.log(` Glow & Grace Salon website running at:`);
  console.log(` Local:   http://localhost:${PORT}/`);
  console.log(`========================================\n`);
});
