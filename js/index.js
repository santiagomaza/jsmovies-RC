const getUser = async () => {
  const results = await fetch("http://localhost:3000/users");
  const user = await results.json();
  return user;
};


// let botonForm = document.getElementById("button_Form");
// botonForm.addEventListener("click", async () => {
//   let email = document.getElementById("emailForm");
//   let password = document.getElementById("pwForm");
//   let incorrecto = document.getElementById("parrafo_user");
//   console.log("ejecutando");
//   const data = await getUser();
//   if (email.value == data[0].email && password.value == data[0].pw) {
//     window.location.href = "/html/admin.html";
//   } else {
//     email.classList.add("border-danger");
//     password.classList.add("border-danger");
//     incorrecto.classList.add("d-block");
//   }
// });


const getDestacada = () => {
  console.log("ejecutando GET IMAGEN");
  let imagen = window.localStorage.getItem("Destacada");
  let categoria = window.localStorage.getItem("Categoria");
  let contenedor = document.getElementById("container-img");

  if (categoria == "Accion") {
    contenedor.innerHTML = `
    <img src="${imagen}">
    `;
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
  // console.log(pelis)
  return pelis;
};

// obtenerPelis()
const mapeoPeliculas = async () => {
  const peli = await obtenerPelis();
  const div = document.getElementById("container_peliculas");

  console.log("Agregando pelicula");

  const peliculas = peli.map(
    (pelicula) => `
    <div class="card" style="width: 15rem;">
      <img src="${pelicula.img}" class="card-img-top col-lg-3" alt="...">
      <div class="card-body">
        <h5 class="card-title">${pelicula.titulo}</h5>
        <p class="card-text">Año: ${pelicula.anio}</p>
        <p class="card-text">Duracion: ${pelicula.duracion}</p>
        <p class="card-text">${pelicula.descripcion}</p>
      </div>
    </div>
    `
  );

  div.innerHTML = peliculas.join("");
}

mapeoPeliculas()