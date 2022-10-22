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

  const peliculas = tabla.map(
    (pelicula) => `
  <table class="table table-bordered border-dark">
  <tbody>
    <tr class="">
      <th scope="row">${pelicula.id}</th>
      <td>${pelicula.titulo}</td>
      <td>${pelicula.categoria}</td>
      <td>${pelicula.descripcion}</td>
      <td><button type="submit" class="btn btn-danger" onclick="eliminarPeli(${pelicula.id})">
       <i class="bi bi-trash2-fill fs-5 rounded text-white"></i>
      </button>
      <button type="button" class="btn btn-primary" onclick="" data-bs-toggle="modal" data-bs-target="#exampleModal2"><i class="bi bi-pencil-fill rounded text-white fs-5"></i></button>
      </td>
    </tr>
  </tbody>
</table>
 <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Editar Pelicula</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form class="row g-3 needs-validation" novalidate>
                        <div class="col-md-12">
                          <label for="validationCustom03" class="form-label">Nombre/Título de la película</label>
                          <input type="text" class="form-control" id="nvTitulo" required>
                          <div class="invalid-feedback">
                            Ingrese el nombre de la película
                          </div>
                        </div>
                        <div class="col-md-12">
                          <label for="validationCustom04" class="form-label">Categoría</label>
                          <select class="form-select" id="nvCategoria" required>
                            <option selected disabled value="">Elegir categoría</option>
                            <option>Accion</option>
                            <option>Romantica</option>
                            <option>Drama</option>
                          </select>
                          <div class="invalid-feedback">
                            Ingrese la categoría de la película
                          </div>
                        </div>
                        <div class="col-md-12">
                          <label for="exampleFormControlTextarea1" class="form-label">Descripción</label>
                          <textarea class="form-control" id="nvDescripcion" rows="3" required></textarea>
                          <div class="invalid-feedback">
                            Por favor inserte una descripción de la película 
                          </div>
                        </div>
                        <div class="col-12">
                        </div>
                        <div class="modal-footer">
                          <button type="reset" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                          <button type="submit" class="btn btn-primary" onclick="editarPeli(${pelicula.id})">Editar Pelicula</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
               </div>
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
  const titulo = document.getElementById("nvTitulo").value;
  const categoria = document.getElementById("nvCategoria").value;
  const descripcion = document.getElementById("nvDescripcion").value;

  console.log("EJECUTANDO EDICION");

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
};

(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
