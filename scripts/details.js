const urlParams = new URLSearchParams(location.search)
const id = urlParams.get('id')

let peliculas = []; // Se establece el array peliculas vacio para reutilizarlo en el fetch

const url = "https://moviestack.onrender.com/api/movies"; 
const init = {                                                 //Se establecen las variables a utilizar dentro del
    method: "GET",                                             //Se establece el metodo GET para solicitar ciertos datos a utilizar en las promesas dentro de fetch
    headers: {
        "X-API-Key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd",    // Se establece la x-api-key correspondiente para acceder a la API objetivo
    },
};

fetch(url, init)
.then((resolve) => resolve.json())
.then((datos) => {
    peliculas = datos.movies; // Se iguala peliculas a las peliculas dentro del objeto datos
    const $main = document.getElementById('contenedor-details')          // Se establecen las variables dentro del fetch, al ser asincronico se ejecuta luego del script, por lo que
    const peliculaFind = peliculas.find( pelicula => pelicula.id == id)  // las variables se asignan de esta manera.

    // Se debe utilizar el link correspondiente antes del ${}, en este caso https://moviestack.onrender.com/static/${peliculaEncontrada.image} para evitar el error de undefined.

    $main.innerHTML = `
        <div class="flex flex-col items-center py-10 text-white-style">
            <div class="flex flex-col xl:flex-row items-center w-[70%] gap-10">
                <div>
                    <img class="md:w-[700px] h-100 border-2 border-black object-fit shadow-[4px_6px_12px_0px_rgba(0,0,0,0.75)]" src="https://moviestack.onrender.com/static/${peliculaFind.image}" alt="Imagen de ${peliculaFind.title}">
                </div>
                <div class="flex flex-col m-auto lg:m-[0] gap-4 xl:w-[70%] bg-[#15151a] border-2 border-black p-3">
                    <h1 class="font-bold text-3xl">${peliculaFind.title}</h1>
                    <h2 class="font-bold text-xl">${peliculaFind.tagline}</h2>
                    <h3 class="italic">${peliculaFind.genres.join(", ")}</h3>
                    <p class="w-[80%]">${peliculaFind.overview}</p>
                </div>
            </div>
            <div class="flex flex-col flex-wrap items-center lg:flex-row gap-10 py-10 text-xl">
                <table class="flex px-5">
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
  });
