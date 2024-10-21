const WORKER_URL = 'https://openaiapiworker.christopher-pearsell-ross.workers.dev/';

// Function for translation
export async function getTranslation(userMessage: string, targetLanguage: string) {
  try {
    const response = await fetch(WORKER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        userMessage, 
        targetLanguage, 
        requestType: 'translate' 
      }),
      credentials: 'same-origin',
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

// Interface for chat messages
interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

// Function for chat
export async function getChatResponse(messages: Message[]) {
  try {
    const response = await fetch(WORKER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        messages, 
        requestType: 'chat' 
      }),
      credentials: 'include',
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error('Error in getChatResponse:', error);
    throw new Error('Chat response failed. Please try again later.');
  }
}
