import mongoose from "mongoose";

export interface IFlashcard {
  user_id: string,
  word: string,
  wordLanguage: string,
  wordTag: string,
  translation: string,
  translationLanguage: string,
  translationTag: string,
  definition: string,
  example: string,
  movieName: string,
  thumbnail: string,
  createdAt: Date,
  updatedAt: Date,
}


const flashcardSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
  word: {type: String, required: true},
  wordLanguage: {type: String, required: true},
  wordTag: {type: String, required: true},
  translation: {type: String, required: true},
  translationLanguage: {type: String, required: true},
  translationTag: {type: String, required: true},
  definition: {type: String, required: true},
  example: {type: String, required: true},
  movieName: {type: String, required: true},
  thumbnail: {type: String, required: true},
  createdAt: { type: Date, default: Date.now, unmodifiable: true },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.flashcard ||
  mongoose.model("flashcard", flashcardSchema);
