import axios from "axios";


const generatePrompt = (word, currentLanguage, targetLanguage) => {
 return `You are an expert translator. Please translate the following word details for the word "${word}" which is in ${currentLanguage} to ${targetLanguage} in a strictly valid JSON format:


{
 "wordInTargetLanguage": "Translation of ${word} in ${targetLanguage}, e.g if current language is french,spanish,korean, translate to english and vice versa",
 "wordInCurrentLanguage": "Word in ${currentLanguage}",
 "definition": "Brief definition of ${word} in English",
 "sampleSentences": [
   {
     "currentLanguage": "Sample sentence in ${currentLanguage} using the word, make sure sentence is in ${currentLanguage}",
     "targetLanguage": "Translated sentence in ${targetLanguage}, make sure sentence is in ${targetLanguage}"
   },
   {
     "currentLanguage": "Another sample sentence in ${currentLanguage} using the word, make sure sentence is in ${currentLanguage}",
     "targetLanguage": "Another translated sentence in ${targetLanguage}, make sure sentence is in ${targetLanguage}"
   }
 ],
 "pronunciation": "Pronunciation of the word in ${targetLanguage}",
 "partOfSpeech": "Part of speech (e.g.noun, verb, adjective)"
}

Note: Ensure that The word and the resulting translated word  should be in two diffrent languages i.e if word is in french, translate to English, if in english, translate to french
Make sure the JSON is well-formed, without any additional text before or after the JSON object. don't change the order, strictly give based on what is asked`;
};


const getWordMeaning = async (word, currentLanguage, targetLanguage) => {
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
   // max_tokens: 150,
 };


 try {
   const response = await axios.post(
     "https://api.openai.com/v1/chat/completions",
     data,
     { headers },
   );
   const content = response.data.choices[0].message.content.trim();


   // Ensure the content is valid JSON
   if (content.startsWith("{") && content.endsWith("}")) {
     const parsedData = JSON.parse(content);
     return parsedData;
   } else {
     throw new Error("Invalid JSON format");
   }
 } catch (error) {
   console.error(
     "Error fetching word meaning:",
     error.response ? error.response.data : error.message,
   );
   return null;
 }
};


export default getWordMeaning;