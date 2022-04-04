import { fileUpload } from "./fileUpload.js";
let formulario = document.getElementById("formulario");
const url = "https://donasweetfactory.herokuapp.com/donas";
const imageUrl = document.getElementById("imageUrl");
const body = {};
const changeFile = (e) => {
  e.preventDefault();
  const file = e.target.files[0];
  fileUpload(file)
    .then((response) => {
      Object.assign(body, { imageUrl: response });
    })
    .catch((error) => {
      throw error;
    });
};
imageUrl.addEventListener("change", (e) => changeFile(e));
formulario.addEventListener(
  "submit",
  async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    if (formulario.checkValidity()) {
      e.preventDefault();
      let resp = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          name,
          price,
          category,
          description,
          ...body,
        }),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro exitoso',
        showConfirmButton: false,
        timer: 1500
      })
      formulario.reset();
    } else {
      e.preventDefault();
      formulario.classList.add("was-validated");
    }
  },
  false
);

/* btnEditar.addEventListener('click', async ()=>{
    let nameM = document.getElementById('name').value;
    let precioM = document.getElementById('price').value;
    let imageM = document.getElementById('image').value;
    let categoryM = document.getElementById('category').value;
    let idM= document.getElementById('id').value

    console.log(url+idM)
    let resp = await fetch(url+idM, {
        method: 'PUT',
        body: JSON.stringify({
            nombre: nameM,
            precio:priceM,
            imagenUrl: imageM,
            id: idM
        }),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
    let data = await resp.json()
    console.log(data)
    
}) */

/* btnEliminar.addEventListener('click', async() =>{
    let idEliminar = document.getElementById('id').value

    let resp = await fetch(url+idEliminar, {
        method: 'DELETE'
    })
    let data = await resp.json()
    console.log(data)

}) */
