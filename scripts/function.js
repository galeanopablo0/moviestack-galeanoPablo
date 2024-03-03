export { crearTarjeta, imprimirTarjeta, imprimirOpciones, filtrarPorNombre, filtrarPorGenero, imprimirTexto }

// Sprint 1
function crearTarjeta(pelicula) {

  let moviesFavs = localStorage.getItem("moviesFavs") || []
  let src = "./assets/images/favs-off.png"
  let dataset = 'off'
  if (moviesFavs.includes(pelicula.id)){
    src = "./assets/images/favs-on.png";
    dataset = 'on';
  }

  const article = document.createElement("article");
  article.className = "flex flex-col relative gap-2 w-10/12 p-5 md:w-5/12 xl:w-1/5 border-solid border-4 rounded-3xl bg-[#1a1a1f] border-black text-[#dcdcdc] shadow-[5px_10px_15px_-2px_rgb(0,0,0)] hover:opacity-90 hover:shadow-none"
  
  const imgFavs = document.createElement("img");
  imgFavs.dataset.favs = dataset
  imgFavs.dataset.movieId = `${pelicula.id}`
  imgFavs.setAttribute("src", src)
  imgFavs.className = "absolute top-2 right-2 w-[12%] cursor-pointer"

  const img = document.createElement("img");
  img.className = "h-70 pb-1 w-auto object-cover rounded-t-xl";
  img.setAttribute("src", `https://moviestack.onrender.com/static/${pelicula.image}`);
  img.setAttribute("alt", `Imagen de ${pelicula.name}`);

  const h2 = document.createElement("h2");
  h2.className = "font-bold text-xl";
  h2.textContent = pelicula.title;

  const h3 = document.createElement("h3");
  h3.className = "text-lg";
  h3.textContent = pelicula.tagline;

  const p = document.createElement("p");
  p.className = "line-clamp-5 mb-10 text-base pt-2";
  p.textContent = pelicula.overview;

  const a = document.createElement("a");
  a.className = "text-sky-400 absolute right-5 bottom-3 font-bold underline hover:opacity-70"
  a.textContent = "Details"
  a.href = `./details.html?id=${pelicula.id}&name=${pelicula.title}`

  article.append(imgFavs, img, h2, h3, p, a)
  return article;
}

function imprimirTarjeta(listaPeliculas, elemento) {
  elemento.innerHTML = "";
  for (const peliculaIterada of listaPeliculas) {
    let card = crearTarjeta(peliculaIterada);
    elemento.appendChild(card);
  }
}

//Sprint 2 Details
const filtrarPorNombre = function (listaDePeliculas, nombre) {
  return listaDePeliculas.filter((pelicula) =>
    pelicula.title.toLowerCase().startsWith(nombre.toLowerCase())
  );
};

const filtrarPorGenero = function (array, genero) {
  return array.filter((pelicula) => pelicula.genres.includes(genero));
};

const imprimirOpciones = function (array, elemento) {
  let opciones = "";
  const genresSinRepetir = array.flatMap((pelicula) => pelicula.genres).filter((valor, indice, arreglo) => arreglo.indexOf(valor) === indice);
  genresSinRepetir.forEach((genre) => {
    opciones += `<option value="${genre}">${genre}</option>`;
  });
  elemento.innerHTML = `<option value="all">All genres</option>` + opciones;
};

function imprimirTexto() {
  const divTexto = document.getElementById("divTexto");
  divTexto.className = "text-2xl text-center py-10 text-white-style"

  const p = document.createElement("p");
  p.textContent = "You haven't added any movies to favorites yet";
  divTexto.appendChild(p);

  const divBoton = document.getElementById("divBoton")
  divBoton.className = "text-center"

  const aBoton = document.createElement("a")
  aBoton.href = `./movies.html`

  const boton = document.createElement("button");
  boton.id = "botonId"
  boton.className = "text-3xl text-center bg-[#1a1a1f] p-4 px-10 text-white-style hover:scale-105 hover:opacity-70"
  boton.textContent = "Add movies"
  aBoton.appendChild(boton)
  divBoton.appendChild(aBoton)
}