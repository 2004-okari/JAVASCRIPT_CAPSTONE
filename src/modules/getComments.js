/* eslint-disable no-unused-vars */

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const url1 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const ID = 'NzTNKtuWKP5MVSViCeRE';

const fetchComments = async (mealId) => {
  try {
    const response = await fetch(`${url1}apps/${ID}/comments?item_id=${mealId}`);
    const data = await response.json();

    // Check if data is an array and contains at least one comment
    if (Array.isArray(data) && data.length > 0) {
      return data;
    }
    return [];
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
};

export default fetchComments;