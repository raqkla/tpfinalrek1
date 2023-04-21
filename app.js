// Llamada a la API mediante fetch

const API_BASE = "https://rickandmortyapi.com/api";
const API_CHARACTERS = "https://rickandmortyapi.com/api/character";

const llamadaApi = fetch(API_CHARACTERS);

llamadaApi
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    const $characters = document.getElementById("container-grid");
    console.log(data.results[0]);
    for (let i = 0; i < data.results.length; i++) {
      $characters.innerHTML += `
        <div class="grid-item">
                <img class"character-image" src=${data.results[i].image} alt="imagen del personaje"/>
                <h2>${data.results[i].name}</h2>
                <p>Gender: ${data.results[i].gender}</p>
                <p>Species: ${data.results[i].species}</p>
                <p>Status: ${data.results[i].status}</p>
        </div>
        `;
    }
  })
  .catch((error) => {
    console.log(error);
  });
