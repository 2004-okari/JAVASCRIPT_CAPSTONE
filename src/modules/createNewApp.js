async function createNewApp() {
  const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });

    if (response.ok) {
      const appID = await response.text();
      console.log('New app created with ID:', appID);
    } else {
      console.error('Failed to create a new app.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to create a new app and get the unique identifier
createNewApp();

//App Id : NzTNKtuWKP5MVSViCeRE