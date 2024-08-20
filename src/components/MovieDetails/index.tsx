import React from "react";
import { cast, similarMovies } from "./movieDetailsData";

const MovieDetails = () => {
  return (
    <>
      <div style={{ maxWidth: "1400px", margin: "auto" }}>
        {/* The storyline */}
        <div className="flex flex-col gap-2 py-6">
          <div className="font-bold text-gray-100">Story Line</div>
          <div className="text-sm text-gray-500">
            Spider-Man: No Way Home" is a 2021 superhero film in the Marvel
            Cinematic Universe (MCU). It follows Peter Parker (Tom Holland) as
            he seeks help from Doctor Strange (Benedict Cumberbatch) to make the
            world forget his identity as Spider-Man, which was revealed by
            Mysterio in the previous film. The spell goes wrong, causing
            villains from other universes, such as Doctor Octopus, Green Goblin,
            and Electro, to enter Peter's world. Peter must confront these
            villains and find a way to fix the multiverse, leading to unexpected
            alliances and emotional challenges. The film features appearances by
            previous Spider-Man actors Tobey Maguire and Andrew Garfield,
            creating a nostalgic and thrilling experience for fans.
          </div>
        </div>

        {/* Those actor profiles stuff */}
        <div className="flex flex-col gap-2 py-6">
          <div className="font-bold text-gray-100">Top Cast</div>
          <div className="no-scrollbar flex gap-36 overflow-x-auto whitespace-nowrap px-3">
            {cast.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-full"
                  />
                  <div>
                    <div className="text-sm text-gray-100">{item.name}</div>
                    <div className="text-xs text-gray-300">{item.role}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Those actor profiles stuff */}
        <div className="flex flex-col gap-2 py-6">
          <div className="font-bold text-gray-100">Similar English Movies</div>
          <div className="no-scrollbar flex gap-3 overflow-x-auto whitespace-nowrap px-3">
            {similarMovies.map((movie: any, index: React.Key) => (
              <div key={index} className="movie-card w-[370px] flex-shrink-0">
                <div className="w-full rounded-3xl">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="h-auto w-[200%] cursor-pointer overflow-hidden "
                  />
                </div>
                <h3 className="mt-2 cursor-pointer text-sm text-white">
                  {movie.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
