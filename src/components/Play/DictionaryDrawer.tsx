"use client";
import { XCard, XClose } from "@/components/Common/ReusableSvgs";
import {
  SpeakerphoneIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import { createFlashcard } from "@/services/flashcardApi";
import Snackbar from "../Common/Snackbar";

export const DictionaryDrawer = (props) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showFlashCardButton, setShowFlashCardButton] = useState(true);
  const [showFlash, setShowFlash] = useState(false);

  const handleFlashcardCreate = async () => {
    setLoading(true);

    try {
      const data = {
        user_id: "66bb04f4e1b3dc0596527eb0", // user id hardcoded for test purposes
        word: props.clickedWord,
        wordLanguage: props.clickedWordLanguage,
        wordTag: props.wordData.partOfSpeech,
        translation: props.wordData.wordInTargetLanguage,
        translationLanguage: props.targetLanguage,
        translationTag: props.wordData.partOfSpeech,
        definition: props.wordData.definition,
        example: props.wordData.sampleSentences[0].currentLanguage,
        movieName: props.selectedMovie.title,
        thumbnail: props.selectedMovie.thumbnail,
      };
      const response = await createFlashcard(data);
      console.log("responseeee", response);

      if (!response.result.success) {
        throw new Error("Failed to create flashcard");
      }

    } catch (err) {
      setError(err.message || "Failed to create flashcard");
    } finally {
      setShowSnackbar(true);
      setShowFlashCardButton(false);
      setShowFlash(true);
      setLoading(false); 
    }
  };

  if (props.wordMeaningLoading) {
    return (
      <div className="fixed right-0 top-0 flex h-full w-5/12 flex-col justify-between overflow-y-auto bg-gray-900 p-6 text-white">
        loading...
      </div>
    );
  }

  if (!props.wordData) {
    return null;
  }

  const {
    wordInTargetLanguage,
    wordInEnglish,
    definition,
    sampleSentences = [],
    pronunciation,
    partOfSpeech,
  } = props.wordData;

  return (
    <div className="fixed right-0 top-0 flex h-full w-3/12 flex-col justify-between overflow-y-auto bg-gray-900 p-6 text-white">
      <div>
        <div className="flex justify-between">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-red-500">
            <SpeakerphoneIcon className="h-6 w-6 text-red-500" />
          </div>
          <div
            onClick={props.toggleDictionarySidebar}
            className="flex cursor-pointer justify-end"
          >
            <XClose />
          </div>
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-400">({pronunciation})</p>
        </div>

        <div className="mb-6 flex gap-5">
          <div>
            <div className="text-sm text-gray-400">
              {props.clickedWordLanguage}
            </div>
            <h1 className="text-2xl font-bold">{props.clickedWord}</h1>
          </div>
          <div className="flex flex-col justify-center">
            <ArrowLeftIcon className=" w-4 text-gray-400" />
            <ArrowRightIcon className=" w-4 text-gray-400" />
          </div>
          <div>
            <div className="text-sm text-gray-400">{props.targetLanguage}</div>
            <h2 className="text-xl font-semibold">{wordInTargetLanguage}</h2>
          </div>
        </div>

        <div className="mb-2">
          <p className="tag inline-block rounded-full bg-white px-2 text-xs text-red-600">
            {partOfSpeech.toLocaleUpperCase()}
          </p>

          <p className="mt-2 text-sm text-gray-400">
            Translated from {props.currentLanguage} ({props.clickedWord}) to{" "}
            {props.targetLanguage} ({wordInTargetLanguage})
          </p>
          <p className="mt-2 text-sm text-gray-400">{definition}</p>
        </div>

        <div className="mb-4 mt-10">
          <p className="text-sm text-gray-300">Example Usage</p>

          {sampleSentences.map((item, index) => {
            return (
              <div key={index} className="mt-4">
                <p className="text-sm text-gray-100">
                  <span className="text-xs text-green-500">
                    {" "}
                    {`${props.currentLanguage}`}:
                  </span>{" "}
                  {item.currentLanguage}:
                </p>
                <p className="text-sm text-red-500">
                  <span className="text-xs text-green-500">
                    {props.targetLanguage}:
                  </span>
                  {` ${item.targetLanguage}`}
                </p>
              </div>
            );
          })}
        </div>

        {/* go to the commented out code stuff below the module if you still need it here */}
      </div>

      {showFlash && (
        <div className="absolute right-0 bottom-0 w-90 -z-0">
          <img src="/gifs/rflash.gif" alt="" />
        </div>
      )}

      {showFlashCardButton && (
        <div className="flex items-center justify-between">
          <button
            onClick={handleFlashcardCreate}
            className="inline-flex w-full items-center justify-center rounded-full border px-4 py-2 font-bold text-white hover:bg-slate-500"
          >
            <XCard />
            Add word to flashcards
            {loading && <div className="">....</div>}
          </button>
        </div>
      )}

      {showSnackbar && (
        <Snackbar
          message="Flashcard added successfully!"
          onClose={() => setShowSnackbar(false)}
        />
      )}
    </div>
  );
};

{
  /* <div className="mb-4">
          {definition}
          <p className="mt-2 flex text-xs text-green-500">
            <span className="pr-2"> Similar:</span>
            <span className=" flex flex-wrap gap-1">
              {similarWords[0].map((item, index) => {
                return (
                  <span
                    className="rounded-full border border-gray-300 px-2 text-gray-300"
                    key={index}
                  >
                    {item.word}
                  </span>
                );
              })}
            </span>
          </p>
        </div> */
}
{
  /* <div className="mb-4">
          <p className="mb-2 text-sm">
            2. Complete trust or confidence in someone or something.
          </p>
          <p className="text-sm text-gray-300">
            "this restores one's faith in politicians"
          </p>
          <p className="mt-2 flex text-xs text-green-500">
            <span className="pr-2"> Similar:</span>
            <span className=" flex flex-wrap gap-1">
              {similarWords[1].map((item, index) => {
                return (
                  <span
                    className="rounded-full border border-gray-300 px-2 text-gray-300"
                    key={index}
                  >
                    {item.word}
                  </span>
                );
              })}
            </span>
          </p>
          <p className="mt-2 flex text-xs text-red-500">
            <span className="pr-2"> Similar:</span>
            <span className=" flex flex-wrap gap-1">
              {oppositeWords.map((item, index) => {
                return (
                  <span
                    className="rounded-full border border-gray-300 px-2 text-gray-300"
                    key={index}
                  >
                    {item.word}
                  </span>
                );
              })}
            </span>
          </p>
        </div> */
}
