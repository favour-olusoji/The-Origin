import axios from "axios";

const generatePrompt = (word, currentLanguage, targetLanguage) => {
  return `Translate the following word from ${currentLanguage} to ${targetLanguage}.
  Word in ${currentLanguage}: ${word}
  Result format: The word "${word}" in ${currentLanguage} means "[translated word]" in ${targetLanguage}.
  
  Note: Ensure that The word and the resulting translated word  should be in two diffrent languages i.e if word is in french, translate to English, if in english, translate to french`;
};

const getWordMeaningMini = async (word, currentLanguage, targetLanguage) => {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };

  const data = {
    model: "gpt-4-turbo",
    messages: [
      {
        role: "user",
        content: generatePrompt(word, currentLanguage, targetLanguage),
      },
    ],
    max_tokens: 150,
  };

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      data,
      { headers }
    );
    const content = response.data.choices[0].message.content.trim();
    return content;
  } catch (error) {
    console.error(
      "Error fetching word meaning:",
      error.response ? error.response.data : error.message
    );
    return null;
  }
};

export default getWordMeaningMini;
