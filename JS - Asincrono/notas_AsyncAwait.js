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
async function get1() {
  return 100;
}
get1().then((x) => console.log("get1 -> " + x));

// Sin async
function get2() {
  return new Promise((res, rej) => {
    res(200);
  });
}
get2().then((x) => console.log("get2 -> " + x));

const get3 = () => new Promise((res) => res(300));
get3().then((x) => console.log("get3 -> " + x));

// Con async
async function getAsync() {
  return 400;
}
getAsync().then((x) => console.log("getAsync -> " + x));

const getAsync2 = async () => 500; // Más corto
getAsync2().then((x) => console.log("getAsync2 -> " + x));

/**
 * GESTIÓN DE ERRORES
 *
 * Cuando tiramos un "throw new Error" dentro del ASYNC es como un reject
 *
 * En vez de poner REJECT ponemos THROWERROR
 */

async function throwError() {
  throw new Error(
    "Esto no aparecerá como un Error sino como una promesa rechazada"
  );
}
throwError().catch(console.log);

// De forma inversa, cuando una llamada precedida por await devuelve una promesa rechazada, ésta se convierte en un error:
function rejectedPromise() {
  return new Promise(function (resolve, reject) {
    reject("Promesa rechazada");
  });
}
async function get() {
  await rejectedPromise(); // al rechazarse la promesa, esta línea lanza un error.
}
get().catch(console.error); //Promesa rechazada

// Con Try - Cath
async function getTC() {
  try {
    await rejectedPromise();
  } catch (error) {
    return error;
  }
}
getTC().then(console.log);

// Ejemplo
const sumaUno = async (x) => {
  if (typeof x !== "number") {
    throw "I need a number, not: " + x;
  }

  return x + 1;
};

async function run(initial) {
  let res = await sumaUno(initial);
  let res2 = await sumaUno(res + ""); // Falla porque pasamos las comillas
  let res3 = await sumaUno(res2);

  return res3;
}

run(1).then(console.log).catch(console.error);