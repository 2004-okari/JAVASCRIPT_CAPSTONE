// /* eslint-disable no-unused-vars */

// const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
// const url1 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
// const ID = 'NzTNKtuWKP5MVSViCeRE';

// const showPopup = async () => {
//   const displayComment = document.querySelector('.section-2');
//   displayComment.innerHTML = '';

//   try {
//     const response = await fetch(`${apiUrl}`);
//     const data = await response.json();
//     data.meals.forEach((meal) => {
//       const comment = document.createElement('div');
//       comment.classList.add('comment-sec');
//       comment.innerHTML = `
//       <div class="cover-div">
//         <div class="div-001">
//         <img src=${meal.strMealThumb} alt="meal-image" class="comment-image"/>
//         <h2 class="meal-name">${meal.strMeal}</h2>
//         <div class="comment-div-1">
//           <p class="area-1"><span class="span-text">Preparation Video: </span><a href="${meal.strYoutube}" class="preparation-video">Click here</a></p>
//           <p class="area-1"><span class="span-text">Category: </span>${meal.strCategory}</p>
//           <p class="area-1"><span class="span-text">Origin: </span>${meal.strArea}</p>
//         </div>
//       </div>
//       <div class="div-002">
//         <h3 class="comment-title">Comments<div class="div-comment">0</div></h3>
//         <div class="comments-div">
//         </div>
//         <h3 class="comment-add">Add a Comment</h3>
//         <div class="comment-inputs">
//             <input type="text" placeholder="John Doe" class="input-1">
//             <input type="text" placeholder="Your insights" class="input-2">
//             <button type="button" class="btn-primary">Comment</button>
//           </div>
//           <p>${meal.idMeal}</p>
//       </div>
//       </div>
//       `
//       displayComment.appendChild(comment);
//     })

//   } catch (error) {
//     console.error('Error fetching comment section', error);
//   }
// }

// export default showPopup;

/* eslint-disable no-unused-vars */

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
    } else {
      console.error('No meal found for the given mealId');
    }
  } catch (error) {
    console.error('Error fetching meal details for popup', error);
  }
};

export default showPopup;