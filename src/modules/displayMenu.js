/* eslint-disable no-unused-vars */

import postLikes from './postLike.js'; // Import the postLikes function

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const url1 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const ID = 'NzTNKtuWKP5MVSViCeRE';

const displayMenu = async () => {
  const displayTable = document.querySelector('.section-1');
  displayTable.innerHTML = '';

  try {
    const response = await fetch(`${apiUrl}`);
    const data = await response.json();
    data.meals.forEach((meal) => {
      const mealData = document.createElement('div');
      mealData.classList.add('sub-menu');
      mealData.innerHTML = `
        <img src=${meal.strMealThumb} alt='dish image' class='meal-image'>
        <div class='meal-div-1'>
          <p class='meal-name'>${meal.strMeal}</p>
          <div class='sub-div-1'>
            <button class="fa-thin fa-heart icon-1">like</button>        
            <p class='like-score'>0 likes</p>
          </div>
        </div>
        <div class='buttons'>
          <button class='comment-btn'>Comment</button>
        </div>
        <p>${meal.idMeal}</p> <!-- Use meal.idMeal here -->
      `;

      displayTable.appendChild(mealData);

      // Call the postLikes function with the meal.idMeal as the argument
      mealData.querySelector('.fa-heart').addEventListener('click', () => {
        postLikes(meal.idMeal);
      });
    });
  } catch (error) {
    console.error('Error fetching dish: ', error);
  }
};

export default displayMenu;
