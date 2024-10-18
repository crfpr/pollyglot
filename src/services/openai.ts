const WORKER_URL = 'https://openaiapiworker.christopher-pearsell-ross.workers.dev/';

export const getTranslation = async (text: string, targetLanguage: string) => {
  try {
    const response = await fetch(WORKER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userMessage: text,
        targetLanguage,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Unknown error occurred');
    }

    const result = await response.json();
    console.log(result);
    return result.content;

  } catch (error) {
    console.error('Error in getTranslation:', error);
    throw new Error('Translation failed. Please try again later.');
  }
};
