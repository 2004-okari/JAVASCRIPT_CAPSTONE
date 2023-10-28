const url1 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const ID = 'NzTNKtuWKP5MVSViCeRE';

const postLikes = async (itemId) => {
  try {
    await fetch(`${url1}apps/${ID}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: itemId }),
    });
  } catch (error) {
    console.error('Error submitting score:', error);
  }
};

export default postLikes;