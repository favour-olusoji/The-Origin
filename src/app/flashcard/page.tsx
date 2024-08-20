"use client";
import { useEffect, useState } from "react";
import { TBtnColor } from "../../components/Common/ReusableTags";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FlashcardGrid from "@/components/Flashcards";
import { getFlashcardsByUserId } from "@/services/flashcardApi";
import Link from "next/link";
import { IFlashcard } from "@/models/flashcard";

const FlashCard = () => {
  const [flashcards, setFlashcards] = useState<IFlashcard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const user_id = "66bb04f4e1b3dc0596527eb0";

  useEffect(() => {
    const loadFlashcards = async () => {
      try {
        const data = await getFlashcardsByUserId(user_id);
        if (data) {
          setFlashcards(data.result);
          console.log("dataxxxx", data.result);
        }
      } catch (err) {
        setError(err.message || "Failed to load flashcards");
        console.error("Failed to fetch flashcards:", err);
      } finally {
        setLoading(false);
      }
    };

    loadFlashcards();
  }, []);

  useEffect(() => {
    console.log("datayyyyyy", flashcards);
  }, [flashcards]);

  return (
    <>
      <Header isLoggedIn={true} />
      <section className="flex flex-col items-center justify-center pb-16 pt-[100px] dark:bg-gray-dark md:pb-[60px] md:pt-[150px] xl:pt-[130px] 2xl:pt-[150px]">
        <div className="w-full max-w-[1200px] px-4">
          <div className="flex flex-col gap-6 text-center">
            <div className="flex cursor-pointer flex-col items-start gap-2 text-sm text-gray-200">
              <Link href="/watch">
                <span className="text-2xl">←</span>
                <span>Back to homepage</span>
              </Link>
              <div className="text-2xl font-bold text-white">Flashcards</div>
              <div className="text-sm text-gray-200">
                See flashcards of all your saved words from your favourite
                scenes
              </div>
            </div>

            {loading ? (
              <div className="text-white">Loading flashcards...</div>
            ) : error ? (
              <div className="text-red-500">{error}</div>
            ) : flashcards.length > 0 ? (
              <FlashcardGrid flashcards={flashcards} />
            ) : (
              <div className="flex flex-col items-center">
                <img
                  src="/images/flash.gif"
                  width="150px"
                  alt="No Flashcards"
                />
                <div className="mt-6 max-w-md text-center text-sm text-gray-200">
                  No flash card added. Add a new word to your flash card when
                  watching a movie and see them appear here
                </div>
                <div className="mt-5">
                  <TBtnColor link="/" text="Go to homepage" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FlashCard;
