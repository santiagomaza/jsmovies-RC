const agregarPeli = () => {
  const titulo = document.getElementById("titulo").value;
  const categoria = document.getElementById("categoria").value;
  const descripcion = document.getElementById("descripcion").value;

  if (titulo == "" || categoria == "" || descripcion == "") {
    return false;
  }

  fetch("http://localhost:3000/movies", {
    method: "POST",
    body: JSON.stringify({
      titulo,
      categoria,
      descripcion,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

const obtenerPelis = async () => {
  const results = await fetch("http://localhost:3000/movies");
  const pelis = await results.json();
  return pelis;
};

const tablaPelis = async () => {
  const tabla = await obtenerPelis();
  const div = document.getElementById("tablaPelis");

  console.log("Agregando pelicula");

  const peliculas = tabla.map(
    (pelicula) => `
    <tr class="">
      <th scope="row">${pelicula.id}</th>
      <td>${pelicula.titulo}</td>
      <td>${pelicula.categoria}</td>
      <td>${pelicula.descripcion}</td>
      <td><button type="button" class="btn btn-danger" onclick="eliminarPeli(${pelicula.id})">
       <i class="bi bi-trash2-fill fs-5 rounded text-white"></i>
      </button>
      <button type="button" class="btn btn-primary" onclick="editarPeli(${pelicula.id})" data-bs-toggle="modal" data-bs-target="#exampleModal2"><i class="bi bi-pencil-fill rounded text-white fs-5"></i></button>
      </td>
    </tr>
    `
  );

  div.innerHTML = peliculas.join("");
};

tablaPelis();

const eliminarPeli = async (id) => {
  await fetch(`http://localhost:3000/movies/${id}`, {
    method: "DELETE",
  });
};

const editarPeli = async (id) => {

  let boton = document.getElementById("boton-cambiar");
  boton.addEventListener("click", async () => {
    const titulo = document.getElementById("nvTitulo").value;
    const categoria = document.getElementById("nvCategoria").value;
    const descripcion = document.getElementById("nvDescripcion").value;

    if (titulo == "" || categoria == "" || descripcion == "") {
      return false;
    }

    await fetch(`http://localhost:3000/movies/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        titulo,
        categoria,
        descripcion,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  });
};
