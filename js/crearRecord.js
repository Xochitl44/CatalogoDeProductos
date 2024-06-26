import { createPet } from "../js/modules/petsApi.js";

let savePetBtn = document.getElementById("save-pet-btn");

savePetBtn.addEventListener("click", async () => {
  let fields = document.querySelectorAll("#create-pet-form input");

  let petObject = {};

  fields.forEach((field) => {
    let type = field.type;
    console.log(type);
    let property = field.name;
    let value = field.value;

    /*if (type === "text") {
      petObject[property] = value;
    } else if (type === "number") {
      petObject[property] = Number(value);
    } else if (type === "checkbox") {
      petObject[property] = field.checked;
    }*/

    switch (type) {
      case "text":
        petObject[property] = value;
        break;
      case "number":
        petObject[property] = Number(value);
        break;
      case "checkbox":
        petObject[property] = field.checked;
    }
  });
  console.log(petObject);
  let savedPet = await createPet(petObject);
  console.log(savedPet);
});