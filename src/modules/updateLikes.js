/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const url1 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const ID = 'NzTNKtuWKP5MVSViCeRE';

const getLikes = async (item_id) => {
  try {
    const response = await fetch(`${url1}apps/${ID}/likes`);
    const data = await response.json();
    const likeData = data.find((item) => item.item_id === item_id);
    return likeData ? likeData.likes : 0;
  } catch (error) {
    console.error('Error fetching likes: ', error);
    return 0;
  }
};

export default getLikes;
