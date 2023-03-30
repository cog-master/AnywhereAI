// Define a variable to store the timer ID
let timerId;

// Define a function to send the API request with the input text
function sendApiRequestAndUpdateElement(inputElement, inputText) {
  // Define the API endpoint
  // Define the API endpoint
  const endpoint = 'https://api.openai.com/v1/completions';

  // Define the API request options
  const options = {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer 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',
      'Content-Type': 'application/json'
  },
    body: JSON.stringify({
      "model": "text-davinci-003",
      "prompt": inputText,
      "max_tokens": 3300,
      "temperature": 0.9,
      "top_p": 1,
      "n": 1,
      "stream": false,
      "logprobs": null,
  })
}

  // Send the API request
  fetch(endpoint, options)
    .then(response => {
      if (response.ok) {
        // API request was successful
        response.json().then(data => {
          // Modify the input box text with the API response data
          console.log(data['choices'][0].text)
          inputElement.value = data['choices'][0].text;
        });
      } else {
        // API request failed
        console.error('API request failed.');
        inputElement.value = 'API reqest failed'
      }
    })
    .catch(error => {
      // Handle API request error
      console.error(error);
    });
}

// Define a function to handle the user input
function handleInput() {
  // Clear the previous timer
  clearTimeout(timerId);

  // Start a new timer
  timerId = setTimeout(() => {
    // Get the currently active input element
    const activeElement = document.activeElement;

    // Check if the active element is an input element
    if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
      // Get the text from the input element
      const inputText = activeElement.value;

      // Send the API request with the input text
      console.log(inputText.slice(3))
      if (inputText.startsWith('-->')) {
      sendApiRequestAndUpdateElement(activeElement ,inputText);
      }
    }
  }, 3000); // Change the timeout value as desired
}

// Add an event listener to the document to handle user input
document.addEventListener('input', handleInput);
