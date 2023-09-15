const globalState = {
  currentPage: window.location.pathname,
};

//display popular movie
const displayPopularMovies = async () => {
  const { results } = await fetchAPIData("movie/popular");
  console.log(results);

  results.forEach((movie) => {
    console.log(movie);
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <a href="movie-details.html?id=${movie.id}">
            ${
              movie.poster_path
                ? `
                <img
                  src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                  class="card-img-top"
                  alt="Movie Title"
                />
              `
                : `
                <img
                  src="images/no-image.jpg"
                  class="card-img-top"
                  alt="Movie Title"
                />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
           </div>
    `;

    document.querySelector("#popular-movies").appendChild(div);
  });
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
