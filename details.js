import { peliculas } from './data.js';

const urlParams = new URLSearchParams(location.search)
const $main = document.getElementById('contenedor-details')
const id = urlParams.get('id')
const peliculaFind = peliculas.find( pelicula => pelicula.id == id)

$main.innerHTML = `
    <div class="flex flex-col items-center py-10 text-white-style">
        <div class="flex flex-col lg:flex-row align-center w-[70%] gap-10">
            <div>
                <img class="md:w-[700px] h-100 border-2 border-black object-fit shadow-[4px_6px_12px_0px_rgba(0,0,0,0.75)]" src="${peliculaFind.image}" alt="Imagen de ${peliculaFind.title}">
            </div>
            <div class="flex flex-col m-auto lg:m-[0] gap-4 lg:w-[55%] bg-[#15151a] border-2 border-black p-3">
                <h1 class="font-bold text-3xl">${peliculaFind.title}</h1>
                <h2 class="font-bold text-xl">${peliculaFind.tagline}</h2>
                <h3 class="italic">${peliculaFind.genres.join(", ")}</h3>
                <p class="w-[80%]">${peliculaFind.overview}</p>
            </div>
        </div>
        <div class="flex flex-col items-center md:items-start md:flex-row gap-10 py-10 text-xl">
            <table class="flex">
                <tr class="border-black border-2 bg-violet-950">
                    <td class="px-10 py-2 border-2 border-black">Original Language</td>
                    <td class="px-10 py-2 border-2 border-black">${peliculaFind.original_language}</td>
                </tr>
                <tr class="border-black border-2 bg-violet-900">
                    <td class="px-10 py-2 border-2 border-black">Release Date</td>
                    <td class="px-10 py-2 border-2 border-black">${peliculaFind.release_date}</td>
                </tr>
                <tr class="border-black border-2 bg-violet-950">
                    <td class="px-10 py-2 border-2 border-black">Runtime</td>
                    <td class="px-10 py-2 border-2 border-black">${peliculaFind.runtime}</td>
                </tr>
                <tr class="border-black border-2 bg-violet-900">
                    <td class="px-10 py-2 border-2 border-black">Status</td>
                    <td class="px-10 py-2 border-2 border-black">${peliculaFind.status}</td>
                </tr>
            </table>
            <table class="flex">
                <tr class="border-black border-2 bg-violet-950">
                    <td class="px-10 py-2 border-2 border-black">Vote Average</td>
                    <td class="px-10 py-2 border-2 border-black">${peliculaFind.vote_average}</td>
                </tr>
                <tr class="border-black border-2 bg-violet-900">
                    <td class="px-10 py-2 border-2 border-black">Budget</td>
                    <td class="px-10 py-2 border-2 border-black">${peliculaFind.budget}</td>
                </tr>
                <tr class="border-black border-2 bg-violet-950">
                    <td class="px-10 py-2 border-2 border-black">Revenue</td>
                    <td class="px-10 py-2 border-2 border-black">${peliculaFind.revenue}</td>
                </tr>
            </table>
        </div>
    </div>`;