const main = document.getElementById('contenedor-main')

function crearTarjeta(pelicula) {
    const article = document.createElement("article")
    article.className = "flex flex-col gap-3 w-10/12 p-5 md:w-5/12 xl:w-1/5 border-solid border-4 rounded-3xl bg-[#1a1a1f] border-black text-[#dcdcdc] shadow-[0px_5px_10px_-2px_rgb(0,0,0)]"
    
    const img = document.createElement("img")
    img.className = "h-52 w-auto object-fit rounded-t-xl"
    img.setAttribute("src", pelicula.image)
    img.setAttribute("alt",`Imagen de ${pelicula.name}`)

    const h2 = document.createElement("h2")
    h2.className = "font-bold"
    h2.textContent = pelicula.title

    const h3 = document.createElement("h3")
    h3.className = "font-bold"
    h3.textContent = pelicula.tagline


    const p = document.createElement("p")
    p.className = "line-clamp-6"
    p.textContent = pelicula.overview

    article.append(img, h2, h3, p)
    return article
}

function imprimirTarjeta(listaPeliculas, elemento) {
    for (const peliculaIterada of listaPeliculas) {
        let card = crearTarjeta(peliculaIterada)
        elemento.appendChild(card)
    }
}

imprimirTarjeta(peliculas, main)