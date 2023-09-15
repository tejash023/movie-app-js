const globalState = {
  currentPage: window.location.pathname,
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
