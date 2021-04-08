const animalName = document.querySelector('#an-name');
const animalEsp = document.querySelector('#an-esp');
const animalBreed = document.querySelector('#an-breed');
const animalSex = document.querySelector('#an-sex');
const personName = document.querySelector('#p-name');
const personPhone = document.querySelector('#p-phone');
const personCity = document.querySelector('#p-city');
const personAdress = document.querySelector('#p-adress');

//Button

const createButton = document.querySelector('.create-pc');

//Starting instance firebaseDatabase
console.log(createButton);

const database = firebase.database();

//Getting data

const databaseRef = database.ref();

createButton.addEventListener('click', (e) => {
    console.log('hola');
});

createButton.addEventListener('click', (e) => {
    e.preventDefault();
    databaseRef.child('animalejos').push().set({
        animal_name: animalName.value,
        animal_esp: animalEsp.value,
        animal_breed: animalBreed.value,
        animal_sex: animalSex.value,
        prop_name: personName.value,
        prop_phone: personPhone.value,
        prop_city: personCity.value,
        person_adress: personAdress.value,
        clinical_info: {},
    });
});

console.log('CIGARRA');
