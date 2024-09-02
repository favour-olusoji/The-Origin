"use client";

import { TBtnColor, TBtnWhite } from "../../components/Common/ReusableTags";
import Header from "@/components/Header";
import Movies from "@/components/Library";
import Footer from "@/components/Footer";
import {
  generateMoviePageLink,
  goToMovieWatchPage,
  moviesList,
} from "@/services/movieData";
import { useState } from "react";

const firstMovie = moviesList?.[0];

const Watch = () => {
  const [firstMovieLink] = useState(generateMoviePageLink(firstMovie?.id));
  return (
    <>
      {firstMovie && (
        <section
          id="watch"
          style={{
            // background: `url("/images/watch/spider.png")`,
            background: `url("${firstMovie.thumbnail}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            height: "80vh",
          }}
          className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]"
        >
          <Header isLoggedIn={true} />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
              width: "180%",
              zIndex: 1,
            }}
          ></div>
          <div className="container relative z-20 flex justify-center">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="flex max-w-[800px] flex-col items-center text-center">
                  {/* <img
                    src="/images/watch/Spiderman.png"
                    alt=""
                    className="py-6"
                  /> */}
                  <div
                    style={{ fontSize: "50px" }}
                    className="mb-8 max-w-[450px] text-center text-gray-300 font-bold"
                  >
                    {firstMovie.title}
                  </div>
                  <div className="mb-4 mt-2 flex items-center justify-center text-white">
                    <span className="mr-2 rounded-full border px-3 py-1">
                      CBFC: U/A
                    </span>
                    <span className="mr-2">Action</span>
                    <span className="font-2xl px-2 font-bold">. </span>
                    <span className="mr-2">Adventure</span>
                    <span>2h 28m</span>
                  </div>
                  <div className="mb-8 max-w-[450px] text-center text-gray-300">
                    When a spell goes wrong, dangerous foes from other worlds
                    start to appear, forcing Peter to discover what it truly
                    means to be Spider-Man.
                  </div>
                  <div className="flex justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <TBtnColor
                      link={firstMovieLink}
                      text="Watch Now"
                      play={true}
                    />
                    {/* <TBtnWhite link="/watchlist" text="Watch List" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <Movies />
      <Footer />
    </>
  );
};

export default Watch;
