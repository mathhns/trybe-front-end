const getDogButton = document.querySelector('#random-dog');
const getCatButton = document.querySelector('#random-cat');
const surpriseMeButton = document.querySelector('#surprise-me');

const petImage = document.querySelector('#random-pet-image');

const DOG_API = 'https://dog.ceo/api/breeds/image/random';
const CAT_API = 'https://api.thecatapi.com/v1/images/search';

getDogButton.addEventListener('click', () => {
  fetch(DOG_API)
    .then((res) => res.json())
    .then((data) => {
      petImage.src = data.message;
    });
});

getCatButton.addEventListener('click', () => {
  fetch(CAT_API)
    .then((res) => res.json())
    .then(([data]) => {
      petImage.src = data.url;
    });
});

surpriseMeButton.addEventListener('click', () => {
  Promise.any([
    fetch(DOG_API),
    fetch(CAT_API),
  ])
    .then((res) => res.json())
    .then((data) => {
      petImage.src = data.message || data[0].url;
    });
});
