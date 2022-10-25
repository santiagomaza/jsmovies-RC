const getDestacada = () => {
  console.log("ejecutando GET IMAGEN");
  let imagen = window.localStorage.getItem("Destacada");
  let categoria = window.localStorage.getItem("Categoria");
  let descripcion = window.localStorage.getItem("Descripcion")
  let contenedor = document.getElementById("container-img");
  let descripciondest= document.getElementById("descripcion-dest")

  if (categoria == "Infantiles") {
    contenedor.innerHTML = `
    <img src="${imagen}">
    `;
    descripciondest.innerHTML = `
    <p>${descripcion}</p>`
  } else {
  }
};

getDestacada();

const obtenerPelis = async () => {
  const results = await fetch("http://localhost:3000/movies");
  const pelis = await results.json();
  return pelis;
};

const mapeoPeliculas = async () => {
  const peli = await obtenerPelis();
  const div = document.getElementById("container_peliculas");
  console.log("Agregando pelicula");

  const peliculas = peli.filter(a => a.categoria == 'Infantiles')

  const peliculas2 = peliculas.map(a => `
  <div class="card mb-3" style="width: 15rem;">
      <img src="${a.img}" class="card-img-top col-lg-3" alt="...">
      <div class="card-body">
        <h5 class="card-title">${a.titulo}</h5>
        <p class="card-text">Año: ${a.anio}</p>
        <p class="card-text">Duracion: ${a.duracion}</p>
        <p clas"card-text">Genero: ${a.categoria} </p>
        <p class="card-text">${a.descripcion}</p>
      </div>
    </div>
  `)
 
  div.innerHTML = peliculas2.join("");
}

mapeoPeliculas()



/*
const mapeoPeliculas = async () => {
  const peli = await obtenerPelis();
  const div = document.getElementById("container_peliculas");

  console.log("Agregando pelicula");

  const peliculas = peli.map(
    (pelicula) => `
    <div class="card mt-3" style="width: 15rem;">
      <img src="${pelicula.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${pelicula.titulo}</h5>
        <p class="card-text">Año: ${pelicula.anio}</p>
        <p class="card-text">Duracion: ${pelicula.duracion}</p>
        <p class="card-text-desc">${pelicula.descripcion}</p>
      </div>
    </div>
    `
  );

  div.innerHTML = peliculas.join("");
}

mapeoPeliculas()
*/