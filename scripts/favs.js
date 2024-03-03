import { imprimirTarjeta, imprimirTexto } from "./function.js";

const url = "https://moviestack.onrender.com/api/movies";
const init = {
  method: "GET",
  headers: {
    "X-API-Key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd",
  },
};

let peliculas = [];
fetch(url, init)
  .then((resolve) => resolve.json())
  .then((datos) => {
    peliculas = datos.movies;
    const $main = document.getElementById("contenedor-favs-main");
    
    let arrayFavs = localStorage.getItem("moviesFavs"); // Llamo al array del localStorage
    if (arrayFavs) {
      arrayFavs = JSON.parse(arrayFavs);
    } else {
      arrayFavs = [];
    }
    const peliculasFavoritas = peliculas.filter((pelicula) => arrayFavs.includes(pelicula.id)); // Filtro el array de peliculas de la API por los valores que me haya traido arrayFavs
    
    if (peliculasFavoritas.length > 0) {
      imprimirTarjeta(peliculasFavoritas, $main);
    } else { 
      imprimirTexto()
    }
    
    $main.addEventListener("click", (event) => {
      const heartTarget = event.target;
      if (heartTarget.dataset.favs == "on") { // El mismo addEventListener que en movies.js, pero en este caso solo utilizo "on" para desactivar
        arrayFavs = arrayFavs.filter((fav) => fav != heartTarget.dataset.movieId);
        const eliminarCardFavs = peliculasFavoritas.filter((pelicula) => arrayFavs.includes(pelicula.id)); // Filtra el array de peliculasFavoritas retorna solo los que estan incluidos en arrayFavs, array perteneciente al localStorage
        imprimirTarjeta(eliminarCardFavs, $main); // Imprime eliminarCardFavs, el cual es un array filtrado que quita la card la cual recibe el evento click, es decir, esto se encarga de imprimir denuevo las tarjetas sin la tarjeta que quitas de favoritos, sin necesidad de reiniciar la página
        if (eliminarCardFavs.length > 0) {
          imprimirTarjeta(eliminarCardFavs, $main);
        } else { 
          imprimirTexto()
        }
        localStorage.setItem("moviesFavs", JSON.stringify(arrayFavs));
      }
    });
});