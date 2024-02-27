const main = document.getElementById("contenedor-main");
const search = document.getElementById("searchInput");
const genreSelect = document.getElementById("genreId");

// Movie Cards Sprint 1-------------------------------------------------

function crearTarjeta(pelicula) {
  const a = document.createElement("a");
  a.href = `./details.html?id=${pelicula.id}&name=${pelicula.title}`;
  a.className =
    "flex flex-col gap-3 w-10/12 p-5 md:w-5/12 xl:w-1/5 border-solid border-4 rounded-3xl bg-[#1a1a1f] border-black text-[#dcdcdc] shadow-[5px_10px_15px_-2px_rgb(0,0,0)] hover:opacity-70 hover:shadow-none";

  const article = document.createElement("article");
  article.className = "flex flex-col gap-3";

  const img = document.createElement("img");
  img.className = "h-70 w-auto object-cover rounded-t-xl";
  img.setAttribute("src", pelicula.image);
  img.setAttribute("alt", `Imagen de ${pelicula.name}`);

  const h2 = document.createElement("h2");
  h2.className = "font-bold";
  h2.textContent = pelicula.title;

  const h3 = document.createElement("h3");
  h3.className = "font-bold";
  h3.textContent = pelicula.tagline;

  const p = document.createElement("p");
  p.className = "line-clamp-6";
  p.textContent = pelicula.overview;

  a.append(article);
  article.append(img, h2, h3, p);
  return a;
}

function imprimirTarjeta(listaPeliculas, elemento) {
  elemento.innerHTML = "";
  for (const peliculaIterada of listaPeliculas) {
    let card = crearTarjeta(peliculaIterada);
    elemento.appendChild(card);
  }
}

imprimirTarjeta(peliculas, main);

// Filtros Sprint 2----------------------------------------------------

const genres = peliculas.map((pelicula) => pelicula.genres).flat();
const genresSinRepetir = [...new Set(genres)];

// search
const filtrarPorNombre = function (listaDePeliculas, nombre) {
    return listaDePeliculas.filter((pelicula) =>
    pelicula.title.toLowerCase().startsWith(nombre.toLowerCase())
  );
};

search.addEventListener("input", () => {
    console.log(search.value);
    imprimirTarjeta(filtrarPorNombre(peliculas, search.value), main);
});

// genre

const imprimirOpciones = function (array, elemento) {
    let opciones = "";
    const genresSinRepetir = array.flatMap((pelicula) => pelicula.genres).filter((valor, indice, arreglo) => arreglo.indexOf(valor) === indice);
    genresSinRepetir.forEach((genre) => {
      opciones += `<option value="${genre}">${genre}</option>`;
    });
    elemento.innerHTML = `<option value="all">All genres</option>` + opciones;
  
};
imprimirOpciones(peliculas, genreSelect);

const filtrarPorGenero = function (array, genero) {
    return array.filter((pelicula) => pelicula.genres.includes(genero));    
  };

genreSelect.addEventListener("change", () => {
    const peliculasFiltradas = filtrarPorGenero(peliculas, genreSelect.value);
    if (genreSelect.value === "all"){
      imprimirTarjeta(peliculas, main);
    } else {
      imprimirTarjeta(peliculasFiltradas, main);
    }
  });

