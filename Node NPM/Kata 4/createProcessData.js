/**
 * kata 1 fileSystem
 * El objetivo es crear un archivo data.json desde el código y luego vamos a leerlo y mostrarlo en la terminal.
 */

const fs = require("fs"); // Importación de filesystem

const data = JSON.stringify(process, null, 2); // Creamos OBJ en texto plano

fs.writeFileSync("data.json", data); // Crea el archivo

const dataRead = fs.readFileSync("./data.json", "utf-8"); // Leer

console.log(typeof dataRead) // Ver si lo trae como un string

const dataObj = JSON.parse(dataRead) // Convierte el string en un objeto

console.log(dataObj.version);
