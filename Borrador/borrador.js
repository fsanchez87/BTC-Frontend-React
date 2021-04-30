/**
 * ASYNC AWAIT
 *
 * 1. Sintaxis más concisa.
 * 2. Manejar ambos errores síncronos y asíncronos redeando el código en un bloque try/cath.
 * 3. Evita nesting adicional
 */

// SIN async await
let getFilm = () =>
  new Promise((res, rej) => {
    res("Matrix");
  });
let getMain = (film) =>
  new Promise((res, rej) => {
    film === "Matrix" ? res("Neo") : rej("404");
  });

getFilm().then((film) => getMain(film).then((main) => console.log(main)));

getFilm().then(getMain).then(console.log);

/**
 * CON asyc await
 *
 * Todas las funciones async devuelven una promesa
 * Siempre ponemos AWAIT porque sabemos que devuelve una promesa
 *
 */
async function queue() {
  var film = await getFilm();
  var main = await getMain(film);
  console.log(main);
}
queue();

/**
 * async function devuelve una promesa
 */
async function get() {
  return 100;
}

const get2 = new Promise((res, rej) => {
  res("200");
});

get().then(console.log);

get2.then((res) => console.log(res));

var resuelveteEnUno = () =>
  new Promise((res, rej) => {
    res(1);
  });
resuelveteEnUno.then((val) => console.log(val));
