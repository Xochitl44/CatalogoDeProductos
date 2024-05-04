import { fetchAllPets } from "./modules/recordsApi.js";

const createPetCard = (petObject) => {
  let { Album, Artist, Genre, Picture, Year, key } = petObject;
  let cardHtml = `
    <div class="col">
        <a href="../views/detalle.html?petKey=${key}">
        <div class="card pet-card p-0 overflow-hidden h-100">
        <div class="row g-0 h-100">
            <div class="col-md-4">
            <img
                src="${Picture}"
                class="pet-card__picture"
                alt="..."
            />
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${Album}</h5>
                <ul class="list-group">
                <li class="list-group-item">Especie: ${Artist}</li>
                <li class="list-group-item">Raza: ${Genre}</li>
                <li class="list-group-item">Género: ${Year}</li>
                </ul>
            </div>
            </div>
        </div>
        </div>
        </a>
    </div>
  `;
  return cardHtml;
};

const printPets = (petsArray, wrapperId) => {
  let wrapper = document.getElementById(wrapperId);
  /* la siguiente línea debe ser reemplazada por el ciclo while que borra todos los childs de un elemento */
  wrapper.innerHTML = "";

  petsArray.forEach((pet) => {
    let currentContent = wrapper.innerHTML;
    wrapper.innerHTML = currentContent + createPetCard(pet);
  });
};

const printAllPets = async () => {
  let petsArray = await fetchAllPets();
  printPets(petsArray, "pets-wrapper");
};

printAllPets();