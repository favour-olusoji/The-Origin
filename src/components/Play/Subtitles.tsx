import { IMoviesInterface } from "@/services/movieData";
import React from "react";

const SubtitleText = (props: {
  handleWordClick: (word: string, language: string, convertto: string) => void;
  currentSubtitle: string;
  language: string;
  convertto: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div style={{ position: "absolute", bottom: "50px", ...props.style }}>
      <div style={{ color: "inherit" }}>
        {props.currentSubtitle && (
          <div
            style={{ color: "inherit" }}
            className="subtitles text-2xl text-white"
          >
            {props.currentSubtitle.split(" ").map((word, idx) => (
              <span
                key={idx}
                onClick={() =>
                  props.handleWordClick(word, props.language, props.convertto)
                }
                className="cursor-pointer hover:bg-yellow-500 hover:px-1 hover:py-1 hover:rounded-md hover:font-outline-4" 
              >
                {word}{" "}
              </span>
            ))}
          </div>
        )}
      </div>
      {/* <div
        onClick={props.toggleDictionaryCard}
        className="absolute bottom-24 z-10 cursor-pointer bg-black px-4 py-1 text-3xl opacity-60"
      >
        <span>
          Es un acto de{" "}
          <span className="rounded-lg bg-orange-800  px-2">fe</span>. Eso es
          todo, Miles. Un acto de fe.
        </span>
      </div> */}
    </div>
  );
};

export default SubtitleText;
