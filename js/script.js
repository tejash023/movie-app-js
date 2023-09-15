const globalState = {
  currentPage: window.location.pathname,
};

//fetch popular movie

const displayPopularMovies = async () => {
  const result = await fetchAPIData("movie/popular");
  console.log(result);
};

//fetch API Data
const fetchAPIData = async (endpoint) => {
  const API_KEY = "1bc3461e4822d54b94972dbb968e2e0e";
  const API_URL = "https://api.themoviedb.org/3/";

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );

  const data = await response.json();
  return data;
};

//highlight link
const highlightActiveLink = () => {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    if (link.getAttribute("href") === globalState.currentPage) {
      link.classList.add("active");
    }
  });
};

//init App

const init = () => {
  switch (globalState.currentPage) {
    case "/":
    case "/index.html":
      displayPopularMovies();
      console.log("Home");
      break;
    case "/shows.html":
      console.log("Shows");
      break;
    case "/movie-details.html":
      console.log("Movie Details");
      break;
    case "/tv-details.html":
      console.log("TV Details");
      break;
    case "/search.html":
      console.log("Search");
      break;
  }
  highlightActiveLink();
};

document.addEventListener("DOMContentLoaded", init);
