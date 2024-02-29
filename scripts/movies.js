import {
  crearTarjeta,
  imprimirTarjeta,
  filtrarPorGenero,
  filtrarPorNombre,
  imprimirOpciones,
} from "./function.js";

const main = document.getElementById("contenedor-main");
const search = document.getElementById("searchInput");
const genreSelect = document.getElementById("genreId");

let peliculas = [];
const url = "https://moviestack.onrender.com/api/movies";
const init = {
  method: "GET",
  headers: {
    "X-API-Key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd",
  },
};

fetch(url, init)
  .then((resolve) => resolve.json())
  .then((datos) => {
    peliculas = datos.movies;
    console.log(peliculas);
    imprimirTarjeta(peliculas, main);
    imprimirOpciones(peliculas, genreSelect);
  });

//En los 2 addEventListener se deben establecer ambos filtros, para que acepten cambios en ambos filtros siguiendo arrays ya filtrados por los 2 valores en select e input.

search.addEventListener("input", () => {
  const peliculasFiltradasNombre = filtrarPorNombre(peliculas, search.value); // Se filtra el array completo, y se guarda en la variable un array filtrado por NOMBRE
  const peliculasFiltradasGenero = filtrarPorGenero(peliculasFiltradasNombre,genreSelect.value); //Se filtra el array filtrado por nombre, y se guarda en la variable un nuevo array filtrado por GENERO
  if (genreSelect.value === "all") {
    imprimirTarjeta(peliculasFiltradasNombre, main);
  } else {
    imprimirTarjeta(peliculasFiltradasGenero, main);
  }
});

genreSelect.addEventListener("change", () => {
  const peliculasFiltradasNombre = filtrarPorNombre(peliculas, search.value); 
  const peliculasFiltradasGenero = filtrarPorGenero(peliculasFiltradasNombre, genreSelect.value);
  if (genreSelect.value === "all") {
    imprimirTarjeta(peliculasFiltradasNombre, main);
  } else {
    imprimirTarjeta(peliculasFiltradasGenero, main);
  }
});

let arrayFavs = []
main.addEventListener("click", (event) => {
  const heartTarget = event.target;
  if (heartTarget.dataset.favs == 'off'){
    heartTarget.setAttribute("src", "./assets/images/favs-on.png")
    heartTarget.dataset.favs = 'on'
    arrayFavs.push(heartTarget.dataset.movieId)
    console.log(arrayFavs)
  } else if (heartTarget.dataset.favs == 'on'){
    heartTarget.dataset.favs = 'off'
    heartTarget.setAttribute("src", "./assets/images/favs-off.png")
    arrayFavs = arrayFavs.filter(fav => fav != heartTarget.dataset.movieId)
    console.log(arrayFavs)
  } 
})