// https://www.freecodecamp.org/news/learn-promise-async-await-in-20-minutes/

/**
 * Task 3: Fetch country info from an API
 */

const fetch = require("node-fetch");

const fetchData = async () => {
  try {
    const res = await fetch("https://restcountries.eu/rest/v2/alpha/es"); // fetch() returns a promise, so we need to wait for it

    const country = await res.json();

    console.log(country);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
