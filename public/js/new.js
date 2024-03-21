const btn = document.querySelector(".new-button");
const home = document.querySelector(".home-button");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "http://localhost:3000/create";
});

home.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "http://localhost:3000/getData";
});