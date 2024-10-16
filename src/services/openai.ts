import OpenAI from 'openai';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

if (!apiKey) {
  console.error("OpenAI API key is missing. Please check your .env file.");
  throw new Error("OpenAI API key is missing");
}

const openai = new OpenAI({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true
});

export const getTranslation = async (text: string, targetLanguage: string) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: `You are a translator. Translate the following text to ${targetLanguage}.` },
        { role: "user", content: text }
      ],
    });
    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error in getTranslation:', error);
    throw new Error('Translation failed. Please try again later.');
  }
};

// Add more functions as needed

// If you need to share some logic between functions, you can create private helper functions
const handleApiError = (error: any) => {
  // Common error handling logic
};
