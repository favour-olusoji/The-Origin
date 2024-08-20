import dbConnect from "../../utils/dbConnect";
import flashcard from "@/models/flashcard";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const {
          user_id,
          word,
          wordLanguage,
          wordTag,
          translation,
          translationLanguage,
          translationTag,
          definition,
          example,
          movieName,
          thumbnail,
        } = req.body;

        const result = await flashcard.create({
          user_id,
          word,
          wordLanguage,
          wordTag,
          translation,
          translationLanguage,
          translationTag,
          definition,
          example,
          movieName,
          thumbnail,
        });

        res.status(201).json({
          success: true,
          message: "Flashcard created successfully",
          result,
        });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case "GET":
      try {
        const { user_id } = req.query;

        const result = await flashcard.find({ user_id });

        res.status(200).json({
          success: true,
          message: "Flashcard(s) retrieved successfully",
          result,
        });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case "DELETE":
      try {
        const { flashcard_id } = req.body;

        await flashcard.findByIdAndDelete(flashcard_id);

        res.status(200).json({
          success: true,
          message: "Flashcard deleted successfully",
        });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: "Method not allowed" });
      break;
  }
}
