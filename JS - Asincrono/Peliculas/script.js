const key = "e39857b2e071fb83dba7d82258147a51&language=es-ES";
const keyPopularMovies =
  "https://api.themoviedb.org/3/movie/popular?api_key=e39857b2e071fb83dba7d82258147a51&language=es-ES";

const renderMovies = (movies) => {
  for (const movie of movies) {
    document.querySelector("main.movies").innerHTML += `
    <div class="movie">
        <h2>${movie.title}</h2>
        <img src="http://image.tmdb.org/t/p/w185${movie.poster_path}">
    </div>`;
  }
};

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
