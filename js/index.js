let botonForm = document.getElementById('button_Form')
botonForm.addEventListener('click', function () {
  let email = document.getElementById('emailForm')
  let password = document.getElementById('pwForm')
  let incorrecto = document.getElementById('parrafo_user')
  console.log('ejecutando')
  console.log(email,password, incorrecto)

  if (email.value == 'admin@admin' && password.value == '123') {
    window.location.href = '/html/admin.html'
    // return console.log('Ingreso Exitoso')
  } else {
    email.classList.add("border-danger");
    password.classList.add("border-danger");
    incorrecto.classList.add("d-block")
    // parrafoValidacion.classList.add('d-block')
  }
})