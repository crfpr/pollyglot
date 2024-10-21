const WORKER_URL = 'https://openaiapiworker.christopher-pearsell-ross.workers.dev/';

export async function getTranslation(userMessage: string, targetLanguage: string) {
  try {
    const response = await fetch(WORKER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userMessage, targetLanguage, requestType: 'translate' }),
      credentials: 'same-origin',  // Include credentials
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error('Error in getTranslation:', error);
    throw new Error('Translation failed. Please try again later.');
  }
}
