import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const createFlashcard = async (flashcardData: any) => {
  try {
    const response = await api.post("/flashcard", flashcardData);
    return response.data;
  } catch (error) {
    console.error(
      "Failed to create flashcard:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const getFlashcardsByUserId = async (user_id: any) => {
  try {
    const response = await api.get(`/flashcard?user_id=${user_id}`);
    return response.data;
  } catch (error) {
    console.error(
      "Failed to retrieve flashcards:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const deleteFlashcard = async (flashcardId: any) => {
  try {
    const response = await api.delete("/flashcard", {
      data: { flashcard_id: flashcardId },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Failed to delete flashcard:",
      error.response?.data || error.message,
    );
    throw error;
  }
};
