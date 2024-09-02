// pages/index.js
import React from "react";
import { MovieSection, PopularSection } from "./MovieSection";
import { moviesList } from "@/services/movieData";

const uniqueMoviesCategories: string[] = moviesList.reduce((acc, item) => {
  if (!acc.includes(item.category)) {
    acc.push(item.category);
  }
  return acc;
}, []);

const Movies = () => {
  return (
    <>
      <div style={{ maxWidth: "1400px", margin: "auto" }}>
        <div className="animate-fade-in-left px-6 pt-4 text-xl italic text-yellow-500">
          Pick a movie and get started with language learning journey
          <span className="inline-block animate-bounce">🚀🚀🚀</span>...
        </div>

        <div className=" bg-black p-4">
          {uniqueMoviesCategories.map((item, index) => (
            <MovieSection category={item} />
          ))}
        </div>
        {/* <div className=" bg-black p-4">
          {popularData.map((item, index) => (
            <PopularSection
              key={index}
              title={item.title}
              movies={item.movies}
            />
          ))}
        </div>
        <div className=" bg-black p-4">
          {movieData.map((item, index) => (
            <MovieSection key={index} title={item.title} movies={item.movies} />
          ))}
        </div> */}
      </div>
    </>
  );
};

export default Movies;
