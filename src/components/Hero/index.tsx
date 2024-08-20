import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import { TBtnColor, TBtnWhite } from "../Common/ReusableTags";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        style={{
          background: `url("/images/hero-bg.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0))",
            width: "180%",
            zIndex: 1,
          }}
        ></div>
        <div className="container relative z-20">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="max-w-[800px] ">
                <SectionTitle
                  title="Learn a New Language Through the Magic of Movies"
                  paragraph="Love movies? Learn a new language while you watch. Enjoy films, pick up conversation skills, and explore new cultures."
                  mb="44px"
                />

                <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <TBtnColor text="Get started" link="/signup" />
                  {/* <TBtnWhite text="Contact us" link="/contact" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
