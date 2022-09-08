const http = require('http');
const url = require('url');
const queryString = require('query-string');

const hostname = '127.0.0.1';
const port = 3000;
let resposta;

const server = http.createServer((req, res) => {
  const urlParse = url.parse(req.url, true);
  const params = queryString.parse(urlParse.search);

  if (params.pergunta === 'melhor-filme') {
    resposta = 'Star Wars';
  }

  if (params.pergunta === 'melhor-tecnologia-backend') {
    resposta = 'NodeJs';
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Resposta ${resposta}`);
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
