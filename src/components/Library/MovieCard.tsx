"use client";

import { goToMovieWatchPage } from "@/services/movieData";
import React from "react";

export const PopularCard = ({ movie }) => {
  return (
    <div className="movie-card w-[200px] flex-shrink-0 rounded-md">
      <div className="w-full">
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-auto w-[200%] cursor-pointer overflow-hidden "
        />
      </div>
      <h3 className="mt-2 cursor-pointer text-sm text-white">{movie.title}</h3>
    </div>
  );
};

export const MovieCard = ({ movie }) => {
  return (
    <div
      onClick={() => {
        goToMovieWatchPage(movie?.id);
      }}
      className="movie-card w-[370px] flex-shrink-0 rounded-sm"
    >
      <img
        src={movie.thumbnail}
        alt={movie.title}
        className="h-auto w-[150%] cursor-pointer rounded-md"
      />
      <h3 className="mt-2 cursor-pointer text-sm text-white">{movie.title}</h3>
    </div>
  );
};
