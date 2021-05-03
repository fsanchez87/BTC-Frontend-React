/**
 * FETCH o AXIOS
 *
 * Fetch.
 *  Permite hacer peticiones http a servidores y recibir respuestas
 *
 * Axios.
 *  Más capacidades que fetch.
 *  No viene incluida en los navegadores, icluirla desde CDN o módulo NODE
 *
 */

const fetch = require("node-fetch");
const axios = require("axios");

const urlApi =
  "https://api.themoviedb.org/3/movie/popular?api_key=e39857b2e071fb83dba7d82258147a51&language=es-ES";

// Petición GET con FETCH promesas SIN ASYNC
const getPeliculasPopulares = () => {
  fetch(urlApi)
    .then((res) => res.json())
    .then((res) => {
      const peliculas = res.results;
      peliculas.forEach((peliculas) => {
        console.log(peliculas);
      });
    });
};
//getPeliculasPopulares();

// Petición GET con fetch async/await
const getPeliculasPopulares2 = async () => {
  let res = await fetch(urlApi);
  res = await res.json();

  const peliculas = res.results;
  peliculas.forEach((pelicula) => {
    console.log(pelicula.title);
  });
};
//getPeliculasPopulares2();

// Petición GET con axios promesas
const getPeliculasPopulares3 = () => {
  axios.get(urlApi).then((res) => {
    const peliculas = res.data.results; // el body de la respuesta viene en la propiedad "data"
    peliculas.forEach((pelicula) => {
      console.log(pelicula.title);
    });
  });
};
//getPeliculasPopulares3();

// Petición GET con axios async/await
const getPeliculasPopulares4 = async () => {
  let res = await axios.get(urlApi);
  const peliculas = res.data.results;

  peliculas.forEach((pelicula) => {
    console.log(pelicula.title);
  });
};
getPeliculasPopulares4();