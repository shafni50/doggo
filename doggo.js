const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const selectDoggo = document.querySelector('.breeds');
const dogImg = document.querySelector('.dogImg');
const spinnerJs = document.querySelector('.spinner')

// Fetch the list of breeds and populate the dropdown
fetch(BREEDS_URL)
    .then(response => response.json())
    .then(data => {
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);

        for (let i = 0; i < breedsArray.length; i++) {
            const optionDoggo = document.createElement('option');
            optionDoggo.value = breedsArray[i];
            optionDoggo.innerText = breedsArray[i];
            
            selectDoggo.appendChild(optionDoggo);
        }
    });

selectDoggo.addEventListener('change', event => {
    const selectedBreed = event.target.value;
    const url = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;
    spinnerJs.classList.add('show')
    fetch(url)
        .then(response => response.json())
        .then(data => {
            dogImg.src = data.message;
            spinnerJs.classList.remove('show')
        })
});