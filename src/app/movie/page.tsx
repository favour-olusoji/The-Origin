
import {
  TBtnBlackish,
  TBtnColor,
} from "../../components/Common/ReusableTags";
import Header from "@/components/Header";
import MovieDetails from "@/components/MovieDetails";
import Footer from "@/components/Footer";

const Movie = () => {
  return (
    <>
      <section
        id="watch"
        style={{
          background: `url("/images/movie/spider-m.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          height: "100vh",
        }}
        className="flex items-end relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[60px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]"
      >
        <Header  isLoggedIn={true}/>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            width: "180%",
            zIndex: 1,
          }}
        ></div>
        <div className="container relative z-20">
          <div className="-mx-4 flex flex-wrap">
            <div className="px-4">
              <div className="flex max-w-[800px] flex-col gap-2">
                <div className="w-16 rounded-full bg-gray-900 px-3 py-2 text-sm text-white">
                  Movie
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
                  Spider-Man: No Way Home
                </h3>
                <div className="mb-8 max-w-[450px] text-sm text-gray-500">
                  2h28m-2021-Fantasy-Actions
                </div>
                <div className="flex space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <TBtnColor link="/play" text="Play Now" play={true} />
                  <TBtnBlackish
                    link="/watchlist"
                    text="Watch List"
                    plus={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MovieDetails/>
      <Footer/>
    </>
  );
};

export default Movie;
