import { crearTarjeta, imprimirTarjeta, filtrarPorGenero, filtrarPorNombre, imprimirOpciones } from "./function.js";
import { peliculas } from "./data.js";

const main = document.getElementById("contenedor-main");
const search = document.getElementById("searchInput");
const genreSelect = document.getElementById("genreId");

imprimirTarjeta(peliculas, main);
imprimirOpciones(peliculas, genreSelect);

search.addEventListener("input", () => {
  console.log(search.value);
  imprimirTarjeta(filtrarPorNombre(peliculas, search.value), main);
});

genreSelect.addEventListener("change", () => {
  const peliculasFiltradas = filtrarPorGenero(peliculas, genreSelect.value);
  if (genreSelect.value === "all") {
    imprimirTarjeta(peliculas, main);
  } else {
    imprimirTarjeta(peliculasFiltradas, main);
  }
});
