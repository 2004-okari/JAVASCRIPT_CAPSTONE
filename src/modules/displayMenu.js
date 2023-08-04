import postLikes from './postLike.js';
import getLikes from './updateLikes.js';
import showPopup from './commentPopup.js';

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

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
            <button class="fa-thin icon-1"><i class="fa-solid fa-heart" style="color: #ff2e2e;"></i></button>
            <p class='like-score'>0 likes</p>
          </div>
        </div>
        <div class='buttons'>
          <button class='comment-btn' data-mealid="${meal.idMeal}">Comment</button>
        </div>
      `;

      displayTable.appendChild(mealData);

      const updateLikes = async () => {
        await postLikes(meal.idMeal);
        const updatedLikes = await getLikes(meal.idMeal);
        mealData.querySelector('.like-score').textContent = `${updatedLikes} likes`;
      };

      mealData.querySelector('.icon-1').addEventListener('click', updateLikes);

      mealData.querySelector('.comment-btn').addEventListener('click', () => {
        document.querySelector('.section-2').style.display = 'block';
        document.querySelector('.section-1').style.height = '0px';
        document.querySelector('.section-1').style.overflow = 'hidden';
        showPopup(meal.idMeal);
      });

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
