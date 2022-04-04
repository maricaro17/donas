export const getCard = (item) => {
    return `
    <div class="card col-md-3 my-2 mx-2" style="width: 16rem;">
      <img src="${item.imageUrl}"
        class="card-img-top" alt="${item.name}" height="200">
      <div class="card-body">
        <h5 class="card-title text-center">${item.name}</h5>
        <p class="card-text text-center">${item.description}</p>
        <h3 class="text-center">Precio: ${item.price}</h3>
      </div>
      <div class="text-center p-3">
        <button id="${item.id}" class="btn btn-danger delete"><i class="fa-solid fa-trash"></i></button>
        <button id="${item.id}" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#modal"><i
            class="fa-solid fa-pen text-white"></i></button>
      </div>
    </div>
  `;
  };