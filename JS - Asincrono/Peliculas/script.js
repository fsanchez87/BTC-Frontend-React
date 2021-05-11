const key = "e39857b2e071fb83dba7d82258147a51&language=es-ES";
const keyPopularMovies =
  "https://api.themoviedb.org/3/movie/popular?api_key=e39857b2e071fb83dba7d82258147a51&language=es-ES";

const getMovieHtml = (movie) => {
  return `
    <div class="movie" onclick="getMovieDetailed(${movie.id})">
      <img src="http://image.tmdb.org/t/p/w185${movie.poster_path}"alt="imagen de la pelicula">
      <h2>${movie.title}</h2>
    </div>`;
};

const getMovieDetailedHtml = (movie) => {
  return `
    <div class="movie" onclick="getMovieDetailed(${movie.id})">
      <img src="http://image.tmdb.org/t/p/w300${movie.poster_path}" alt="imagen de la pelicula">
      <h2>${movie.title}</h2>
      <span>Popularidad: ${movie.popularity}</span>
      <p>Descripción: ${movie.overview}</p>
      
    </div>`;
};

const renderMovies = (movies) => {
  document.querySelector("main.movies").innerHTML = ""; // Limpia el HTML
  for (const movie of movies) {
    document.querySelector("main.movies").innerHTML += getMovieHtml(movie);
  }
};

// Con PROMESAS
const getMovieDetailed = (movie_id) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=e39857b2e071fb83dba7d82258147a51&language=es-ES`
    )
    .then((res) => {
      const movie = res.data;
      document.querySelector("main.movies").innerHTML =
        getMovieDetailedHtml(movie);
    })
    .catch(console.error);
};

// con ASYNC AWAIT
const getLatestMovies = async () => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=e39857b2e071fb83dba7d82258147a51&language=es-ES"
    );

    const movies = res.data.results;
    renderMovies(movies);
  } catch (error) {
    console.error();
    error;
  }
};

// con PROMESAS
const getPopularMovies = () => {
  fetch(keyPopularMovies)
    .then((res) => res.json())
    .then((res) => {
      const movies = res.results;
      renderMovies(movies);
      console.log(movies);
    })
    .catch((error) => console.error(error));
};
