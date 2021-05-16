/**
 * Dentro de la carpeta param creamos string_name.js
 * Tenemos que crear un comando y le vamos pasar nuestro nombre y apellidos.
 * Pero en este caso, tiene que sacar por pantalla.
 *
 * Hola, me llamo <Nombre> y mis apellidos son <Apellidos>
 *
 */

var myArgs = process.argv.slice(2); // Slice para eliminar las dos primeras lineas de process.argv
console.log(`Hola, me llamo ${myArgs[0]} y mis apellidos son ${myArgs[1]} ${myArgs[2]}`);
