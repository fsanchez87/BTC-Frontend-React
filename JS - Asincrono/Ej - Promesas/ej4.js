/**
 * Task 4: Fetch a country's neighboring countries
 */

const fetch = require("node-fetch");

const fetchCountry = async (alpha3code) => {
  try {
    const res = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${alpha3code}`
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCountryAndNeighbors = async () => {
  const spain = await fetchCountry("es");

  //  El método Promise.all(iterable) devuelve una promesa que termina correctamente cuando todas
  // las promesas en el argumento iterable han sido concluidas con éxito, o bien rechaza la petición
  // con el motivo pasado por la primera promesa que es rechazada.
  const neighbors = await Promise.all(
    spain.borders.map((border) => fetchCountry(border))
  );

  console.log(neighbors);
};

fetchCountryAndNeighbors();
