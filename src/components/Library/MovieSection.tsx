import React from "react";
import { MovieCard, PopularCard } from "./MovieCard";
import Link from "next/link";
import { moviesList } from "@/services/movieData";

interface IMovieSection {
  title: string;
  movies: any;
}

export const PopularSection = ({ title, movies }: IMovieSection) => {
  return (
    <div className="movie-section mb-8">
      <div className="mb-4 flex items-center justify-between text-white">
        <h2 className="pl-3 text-lg font-semibold text-white">{title}</h2>
        <Link
          className="text-sm text-red-500"
          href={`/movies/${title.toLowerCase().replace(/\s+/g, "-")}`}
        >
          See all <span className="text-3xl">→</span>
        </Link>
      </div>
      <div className="no-scrollbar flex gap-3 overflow-x-auto whitespace-nowrap px-3">
        {movies.map((movie: any, index: React.Key) => (
          <PopularCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export const MovieSection = (opts: { category: string }) => {
  return (
    <div className="movie-section mb-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="pl-3 text-lg font-semibold text-white">
          {opts.category}
        </h2>
        <Link
          className="text-sm text-red-500"
          href={`/movies/${opts.category?.toLowerCase().replace(/\s+/g, "-")}`}
        >
          See all <span className="text-3xl">→</span>
        </Link>
      </div>
      <div className="no-scrollbar flex gap-3 overflow-x-auto whitespace-nowrap px-3">
        {moviesList
          .filter((i) => i.category === opts.category)
          .map((movie: any, index: React.Key) => (
            <MovieCard key={index} movie={movie} />
          ))}
      </div>
    </div>
  );
};

// export const MovieSection = ({ title, movies }: IMovieSection) => {
//   return (
//     <div className="movie-section mb-8">
//       <div className="mb-4 flex items-center justify-between">
//         <h2 className="text-lg font-semibold text-white pl-3">{title}</h2>
//         <Link
//           className="text-sm text-red-500"
//           href={`/movies/${title.toLowerCase().replace(/\s+/g, "-")}`}
//         >
//           See all <span className="text-3xl">→</span>
//         </Link>
//       </div>
//       <div className="flex gap-3 overflow-x-auto whitespace-nowrap px-3 no-scrollbar">
//         {movies.map((movie: any, index: React.Key) => (
//           <MovieCard key={index} movie={movie} />
//         ))}
//       </div>
//     </div>
//   );
// };
