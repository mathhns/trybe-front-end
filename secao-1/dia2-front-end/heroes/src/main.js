const img = document.querySelector('#image');
const heroName = document.querySelector('#name');
const button = document.querySelector('#btn');

const BASE_URL = 'https://akabab.github.io/superhero-api/api';
const MAX_HEROES = 1000;
const randomId = () => Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', (event) => {
  event.preventDefault();
  const id = randomId();

  fetch(`${BASE_URL}/id/${id}.json`)
    .then((res) => res.json())
    .then((data) => {
      img.src = data.images.sm;
      heroName.innerHTML = data.name;
    })
    .catch((err) => {
      window.alert(`O id do herói é inválido. Erro: ${err.message}`);
    });
});
