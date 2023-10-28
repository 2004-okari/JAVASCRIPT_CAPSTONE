const url1 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const ID = 'NzTNKtuWKP5MVSViCeRE';

const postComments = async (itemId, username, comment) => {
  try {
    await fetch(`${url1}apps/${ID}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: itemId,
        username,
        comment,
      }),
    });
  } catch (error) {
    console.error('Error submitting comment:', error);
  }
};

export default postComments;
