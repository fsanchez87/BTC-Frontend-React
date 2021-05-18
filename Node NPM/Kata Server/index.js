//Cargamos las librerias necesaria del core de node.js
const http = require("http");
const url = require("url");

// Definimos variables a usar.
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  let pathName = url.parse(req.url).pathname; //Obtenemos el path name de la petición mediante el módulo url.
  // Gestionando rutas
  if (pathName === "/") {
    console.log(pathName);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
  } else if (pathName === "/About") {
    console.log(pathName);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("About us\n");
  } else if (pathName === "/Contact") {
    console.log(pathName);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Francisco Sanchez\n");
  } else {
    console.log(pathName);
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end(`${res.statusCode} Not found`);
  }
});

// Creamos el objeto servidor donde pasamos los dos parámetros.
// FORMA 1
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World\n");
// });

//Activamos nuestro servidor.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
