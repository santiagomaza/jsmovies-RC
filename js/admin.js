const agregarPeli = () => {
  const titulo = document.getElementById('titulo').value
  const categoria = document.getElementById('categoria').value
  const descripcion = document.getElementById('descripcion').value

  if (titulo == '' || categoria == '' || descripcion == '') {
    return console.log('Faltan datos')
  }

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
    <tr>
      <th scope="row">${pelicula.id}</th>
      <td>${pelicula.titulo}</td>
      <td>${pelicula.categoria}</td>
      <td>${pelicula.descripcion}</td>
    </tr>
    `))
  
    div.innerHTML = peliculas.join('')
  }

tablaPelis()

