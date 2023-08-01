/* eslint-disable no-unused-vars */

import postLikes from './postLike.js';
import getLikes from './updateLikes.js';

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
            <button class="fa-thin icon-1"><img src="https://th.bing.com/th/id/OIG.iHT1776WlbOMzMtcD8ck?w=173&h=173&c=6&r=0&o=5&dpr=1.6&pid=ImgGn" alt="img" class='img-2'></button>
            <p class='like-score'>0 likes</p>
          </div>
        </div>
        <div class='buttons'>
          <button class='comment-btn'>Comment</button>
        </div>
      `;

      displayTable.appendChild(mealData);

      const updateLikes = async () => {
        await postLikes(meal.idMeal);
        const updatedLikes = await getLikes(meal.idMeal);
        mealData.querySelector('.like-score').textContent = `${updatedLikes} likes`;
      };

      mealData.querySelector('.icon-1').addEventListener('click', updateLikes);

      // Fetch and display initial likes count
      getLikes(meal.idMeal).then((initialLikes) => {
        mealData.querySelector('.like-score').textContent = `${initialLikes} likes`;
      });
    });
  } catch (error) {
    console.error('Error fetching dish: ', error);
  }
};

export default displayMenu;
