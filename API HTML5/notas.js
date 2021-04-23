// LOCALSTORAGE Y SESSION STORAGE

// Almacenamiento
sessionStorage.setItem("twitter", "@pako");
localStorage.setItem("facebook", "@pozo");

// Leer
let valor = localStorage.getItem("facebook"); // devuelve siempre STRING
console.log("Valor -> " + valor + " tipo " + typeof valor);

// Almacenar objetos 'convirtiendon a string JSON
let persona = {
  nombre: "Xavi",
  apellidos: "Rordiguez",
};
//Almacenamos utilizando la conversión a texto el objeto JSON
localStorage.setItem("Datos", JSON.stringify(persona));
//Recuperamos realizando la conversión de texto a Objeto JSON.
let resultado = JSON.parse(localStorage.getItem("Datos"));
console.log(`Resuultado -> ${resultado.nombre} + Tipo -> ${typeof resultado}`);

// Elimiar
localStorage.removeItem("Datos");
localStorage.clear(); //Elimiar todo

// Eventos
/**
 *  StorageEvent {
        readonly DOMString key;
        readonly any oldValue;
        readonly any newValue;
        readonly DOMString url;
        readonly Storage storageArea
    }
 */
function handleStorage(event) {
  event = event || window.event; // support IE8
  if (event.newValue === null) {
    // it was removed
    // Do somthing
  } else {
    // Do somthing else
  }
}

window.addEventListener("storage", () => {
  // When local storage changes, dump the list to the console.
  console.log(JSON.parse(window.localStorage.getItem("sampleList")));
});
window.onstorage = () => {
  // When local storage changes, dump the list to the console.
  console.log(JSON.parse(window.localStorage.getItem("sampleList")));
};


