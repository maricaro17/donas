let btnGuardar = document.getElementById('btnGuardar');
let btnEditar = document.getElementById('btnEditar');
let btnEliminar = document.getElementById('btnEliminar');

let formulario = document.getElementById('formulario');
const url= 'https://donasweetfactory.herokuapp.com/donas'


formulario.addEventListener('submit', async (e)=>{
    e.preventDefault();
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let image = document.getElementById('image').value;
    let category = document.getElementById('category').value;

     let resp = await fetch(url, { 
        method: 'POST',
        body: JSON.stringify({
            nombre: name,
            precio: price,
            imagenUrl: image,
            category: category

        }),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        } 
    })
    let data = await resp.json()
    console.log(data)
    
   
})



btnEditar.addEventListener('click', async ()=>{
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
    
})




btnEliminar.addEventListener('click', async() =>{
    let idEliminar = document.getElementById('id').value

    let resp = await fetch(url+idEliminar, {
        method: 'DELETE'
    })
    let data = await resp.json()
    console.log(data)

})