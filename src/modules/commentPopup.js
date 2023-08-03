/* eslint-disable no-unused-vars */
import postComments from './postComment.js';
import fetchComments from './getComments.js';


const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const url1 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const ID = 'NzTNKtuWKP5MVSViCeRE';

// Add this function at the end of the displayMenu.js file (outside of the displayMenu function):

const showPopup = async (mealId) => {
  const popupUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  try {
    const response = await fetch(popupUrl);
    const data = await response.json();

    // Check if data.meals is not null and contains at least one meal
    if (data.meals && data.meals.length > 0) {
      const meal = data.meals[0];

      // Create the popup content
      const popupContent = document.createElement('div');
      popupContent.classList.add('comment-sec');
      popupContent.innerHTML = `
      <div class="cover-div">
      <div class="div-001">
        <h3 class="closer">x</h3>
         <img src=${meal.strMealThumb} alt="meal-image" class="comment-image"/>
         <h2 class="meal-name">${meal.strMeal}</h2>
         <div class="comment-div-1">
           <p class="area-1"><span class="span-text">Preparation Video: </span><a href="${meal.strYoutube}" class="preparation-video">Click here</a></p>
           <p class="area-1"><span class="span-text">Category: </span>${meal.strCategory}</p>
           <p class="area-1"><span class="span-text">Origin: </span>${meal.strArea}</p>
         </div>
       </div>
       <div class="div-002">
         <h3 class="comment-title">Comments<div class="div-comment">0</div></h3>
         <div class="comments-div">
         </div>
         <h3 class="comment-add">Add a Comment</h3>
         <div class="comment-inputs">
             <input type="text" placeholder="John Doe" class="input-1">
             <input type="text" placeholder="Your insights" class="input-2">
             <button type="button" class="btn-primary">Comment</button>
           </div>
           <p>${meal.idMeal}</p>
       </div>
       </div>
      `;

      // Append the popup content to the body
      const body = document.querySelector('.section-2');
      body.innerHTML = '';
      body.appendChild(popupContent);

      const comments = await fetchComments(mealId);

      const commentsDiv = popupContent.querySelector('.comments-div');
      if (comments.length > 0) {
        comments.forEach((comment) => {
          const commentItem = document.createElement('div');
          commentItem.classList.add('comment-item');
          commentItem.innerHTML = `
            <p class="username">${comment.username}</p>
            <p class="comment-text">${comment.comment}</p>
            <p class="date">${comment.creation_date}</p>
          `;
          commentsDiv.appendChild(commentItem);
        });
      } else {
        const noCommentsMessage = document.createElement('p');
        noCommentsMessage.textContent = 'No comments yet.';
        commentsDiv.appendChild(noCommentsMessage);
      }

      // Add event listener to the "Comment" button
      const commentButton = popupContent.querySelector('.btn-primary');
      commentButton.addEventListener('click', async () => {
        const usernameInput = popupContent.querySelector('.input-1');
        const commentInput = popupContent.querySelector('.input-2');
        const username = usernameInput.value;
        const comment = commentInput.value;

        if (username && comment) {
          await postComments(mealId, username, comment);

          // Clear the input fields after posting the comment
          usernameInput.value = '';
          commentInput.value = '';
        }
      });

      // Add event listener to the close button (x) to remove the popup
      const closeButton = popupContent.querySelector('.closer');
      closeButton.addEventListener('click', () => {
        body.innerHTML = ''; // Remove the popup content from the body
        document.querySelector('.section-1').style.height = 'auto';
        document.querySelector('.section-1').style.overflow = 'auto';
      });
    } else {
      console.error('No meal found for the given mealId');
    }
  } catch (error) {
    console.error('Error fetching meal details for popup', error);
  }
};

export default showPopup;
