const WORKER_URL = 'https://your-worker-url.workers.dev'; // Replace with your actual Worker URL

export const getTranslation = async (text: string, targetLanguage: string) => {
  try {
    /*
      Challenge:
        1. Make a fetch request to the Worker url:
          - The method should be 'POST'
          - In the headers, the 'Content-Type' should be 'application/json'
          - Set the body of the request to an empty string for now
        2. Parse the response to a JavaScript object and assign it to a const
        3. Log the response to the console to test
    */
    
    const response = await fetch(WORKER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        requestType: 'translate',
        userMessage: text,
        targetLanguage,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    // The Worker returns the entire message object, so we need to extract the content
    return result.content;

  } catch (error) {
    console.error('Error in getTranslation:', error);
    throw new Error('Translation failed. Please try again later.');
  }
};
