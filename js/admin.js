const agregarPeli = () => {
  const titulo = document.getElementById('titulo').value
  const categoria = document.getElementById('categoria').value
  const descripcion = document.getElementById('descripcion').value

  fetch('http://localhost:3000/movies' , {
  method: "POST",
  body: JSON.stringify({
    titulo,
    categoria,
    descripcion
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
}

const obtenerPelis = async () => {
  const results = await fetch('http://localhost:3000/movies')
  const pelis = await results.json()
  return pelis
  }

const tablaPelis = async () => {
  const tabla = await obtenerPelis()
  const div = document.getElementById('tablaPelis')

  const peliculas = tabla.map(pelicula => (`
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
    `))

    div.innerHTML = peliculas
  }

tablaPelis()

