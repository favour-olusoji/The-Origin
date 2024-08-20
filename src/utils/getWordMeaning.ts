import axios from "axios";

const generatePrompt = (word, targetLanguage) => {
  return `You are an expert translator. Please provide the following details for the word "${word}" in ${targetLanguage} and its English equivalent in a a structured format:
  Information to include are 
  - Word in ${targetLanguage}
  - Translation in English
  - Brief definition in English
  - Sample sentences in English using the word
  - Translated sentences in ${targetLanguage}
  - Pronunciation of the word in ${targetLanguage}
  - Part of speech (e.g., noun, verb, adjective)
`;
};

const getWordMeaning = async (word, targetLanguage) => {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };

  const data = {
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: generatePrompt(word, targetLanguage),
      },
    ],
    max_tokens: 150,
  };

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      data,
      { headers },
    );
    const content = response.data.choices[0].message.content.trim();
    return content;
  } catch (error) {
    console.error(
      "Error fetching word meaning:",
      error.response ? error.response.data : error.message,
    );
    return null;
  }
};

export default getWordMeaning;
