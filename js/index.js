const getUser = async () => {
  const results = await fetch("http://localhost:3000/users");
  const user = await results.json();
  return user;
};

/*
let botonForm = document.getElementById("button_Form");
botonForm.addEventListener("click", async () => {
  let email = document.getElementById("emailForm");
  let password = document.getElementById("pwForm");
  let incorrecto = document.getElementById("parrafo_user");
  console.log("ejecutando");

  const data = await getUser();

  if (email.value == data[0].email && password.value == data[0].pw) {
    window.location.href = "/html/admin.html";
  } else {
    email.classList.add("border-danger");
    password.classList.add("border-danger");
    incorrecto.classList.add("d-block");
  }
});
*/

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
