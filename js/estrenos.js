const getDestacada = () => {
  console.log("ejecutando GET IMAGEN");
  let imagen = window.localStorage.getItem("Destacada");
  let categoria = window.localStorage.getItem("Categoria");
  let descripcion = window.localStorage.getItem("Descripcion")
  let contenedor = document.getElementById("container-img");
  let descripciondest= document.getElementById("descripcion-dest")

  if (categoria == "Estrenos") {
    contenedor.innerHTML = `
    <img src="${imagen}">
    `;
    descripciondest.innerHTML = `
    <p>${descripcion}</p>`
  } else {
    contenedor.innerHTML = `
       <img src="https://i.pinimg.com/originals/9c/48/88/9c48887c59a76906300d59e4cfbf8558.jpg">
    `
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