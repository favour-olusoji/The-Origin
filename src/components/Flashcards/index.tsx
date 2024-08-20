"use client";
import React, { useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  SpeakerphoneIcon,
} from "@heroicons/react/outline";
import { XClose } from "../Common/ReusableSvgs";
import { IFlashcard } from "@/models/flashcard";

const FlashcardGrid = (props: { flashcards: any }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (id:any) => {
    setSelectedCard(id);
  };

  return (
    <div className="flex">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {props.flashcards.map((card:IFlashcard, index) => (
          <div
            key={index}
            className={`relative w-full max-w-xs flex-col rounded-lg border-t-8 ${
              selectedCard === index
                ? "border-t-red-500"
                : "border-t-orange-700"
            } bg-gray-800 p-4 transition-all duration-300 ease-in-out`}
          >
            {selectedCard === index ? (
              <div className=" text-white">
                <div className="flex w-full items-center justify-between">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-red-500">
                    <SpeakerphoneIcon className="h-6 w-6 text-red-500" />
                  </div>
                  <div
                    onClick={() => setSelectedCard(null)}
                    className="flex cursor-pointer justify-end"
                  >
                    <XClose />
                  </div>
                </div>

                <div className=" flex  flex-col items-start">
                  <p className="text-xs text-gray-300">{card.wordLanguage}</p>
                  <h3 className="text-sm font-semibold">{card.word}</h3>

                  <div className="flex flex-col justify-center">
                    <ArrowLeftIcon className=" w-3 text-gray-400" />
                    <ArrowRightIcon className=" w-3 text-gray-400" />
                  </div>

                  <p className="text-xs text-gray-300">{card.translationLanguage}</p>
                  <h3 className="text-sm font-semibold text-left">
                    {card.translation}
                  </h3>
                  <div className="mt-2">
                    <p className="tag inline-block rounded-full bg-white px-2 text-xs text-red-600">
                      {card.wordTag.toLocaleUpperCase()}
                    </p>
                  </div>

                  <div className="flex  flex-col items-start">
                    <p className="mt-2 text-start text-xs">
                      {card.definition}
                    </p>
                    <p className="mt-2 text-start text-xs text-gray-300 ">
                      {`"${card.example}"`}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <img
                    src={card.thumbnail}
                    alt={card.movieName}
                    className="h-full w-[300px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-300 ease-in-out hover:bg-opacity-60">
                    <button
                      onClick={() => handleCardClick(index)}
                      className="rounded-full border border-white px-4 py-2 text-sm text-white transition-all duration-300 ease-in-out"
                    >
                      See Definition
                    </button>
                  </div>
                </div>
                <div className="mt-2 flex  flex-col items-start">
                  <p className="inline-block rounded-full bg-white px-2 text-xs text-red-600">
                    {card.wordTag.toLocaleUpperCase()}
                  </p>
                  <div className="mt-1 text-sm text-white">{card.word.toLocaleUpperCase()}</div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashcardGrid;
