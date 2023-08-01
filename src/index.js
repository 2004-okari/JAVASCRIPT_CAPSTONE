import './style.css';
import displayMenu from './modules/displayMenu.js';

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const url1 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const ID = 'NzTNKtuWKP5MVSViCeRE';

document.addEventListener('DOMContentLoaded', async () => {
  await displayMenu(); // Display the meals with likes set to 0 first
});
