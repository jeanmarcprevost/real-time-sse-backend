const http = require('http');

http.createServer((request, response) => {
  console.log('Requested url: ' + request.url);

  if (request.url.toLowerCase() === '/events') {
    response.writeHead(200, {
      'Connection': 'keep-alive',
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': 'http://localhost:3001'
    });

    setTimeout(() => {
      response.write(
        'data: {"flight": "I768", "state": "landing"}'
      );
      response.write('\n\n');
    }, 3000);

    setTimeout(() => {
      response.write(
        'data: {"flight": "I768", "state": "landed"}'
      );
      response.write('\n\n');
    }, 6000);

    setTimeout(() => {
      response.write(
        'data: {"flight": "I768", "state": "coucou"}'
      );
      response.write('\n\n');
    }, 9000);

    setTimeout(() => {
      response.write(
        'data: {"flight": "I999", "origin": "Strabsourg", "arrival": "15:15", "state": ""}'
      );
      response.write('\n\n');
    }, 12000);

  } else {
    response.writeHead(404);
    response.end();
  }
}).listen(5000, () => {
  console.log('Server running at http://127.0.0.1:5000/');
});