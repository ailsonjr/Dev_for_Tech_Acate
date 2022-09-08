const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
let resposta;

const server = http.createServer((req, res) => {
  const urlParse = url.parse(req.url, true);
  const params = queryString.parse(urlParse.search);

  if (urlParse.pathname == '/criar-atualizar-usuario') {
    fs.writeFile(`users/${params.id}.txt`, JSON.stringify(params), function (erro) {
      if (erro) throw erro;
    });

    resposta = 'Usuario cadastrado com sucesso';

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(resposta);

  } else if (urlParse.pathname === '/selecionar-usuario') {
    fs.readFile(`users/${params.id}.txt`, (erro, data) => {
      resposta = erro ? 'Usuario nao encontrado' : data;

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(resposta);
    });
  } else if (urlParse.pathname === '/remover-usuario') {
    fs.unlink(`users/${params.id}.txt`, (erro) => {
      resposta = erro ? 'Usuario nao encontrado' : 'Usuario removido';

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    });
  }

});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
