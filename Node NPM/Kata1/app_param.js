/**
 * Vamos a crear un fichero app_param.js que requerirá de un módulo Triple,
 * contendrá una función que triplica el valor que le pasamos por parámetros a app_param.js
 * Ejemplo:
 * $ node common/app_param.js 1   Resultado 3
 * $ node common/app_param.js 2   Resultado 6
 * $ node common/app_param.js 4   Resultado 12
 *
 * */
var number = +process.argv.slice(2);
var tripleNumber = require("./triple");
var result = tripleNumber(number);
console.log(result);
