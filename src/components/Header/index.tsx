"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TBtnColor } from "../Common/ReusableTags";
import { XCard, XDrop, XHome, XMovie, XSearch } from "../Common/ReusableSvgs";
import { usePathname } from 'next/navigation'

interface IHeader {
  isLoggedIn?: boolean;
}

const Header = ({ isLoggedIn }: IHeader) => {
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname()
  console.log("pathhhhxxxxx", pathname);
  
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>

            {isLoggedIn && (
              <div className="flex items-center space-x-6 pr-40">
                <Link href="/" className="flex items-center space-x-2">
                  <XHome />
                  <span className={`${pathname === "/" ? "text-white" : "text-gray-400"} ${pathname === "/" ? "font-semibold" : "font-normal"}`}>Home</span>
                </Link>
                <Link href="/watch" className="flex items-center space-x-2">
                  <XMovie />
                  <span className={`${pathname === "/watch" ? "text-white" : "text-gray-400"} ${pathname === "/watch" ? "font-semibold" : "font-normal"}`}>Movies</span>
                </Link>
                <Link href="/flashcard" className="flex items-center space-x-2">
                  <XCard />
                  <span className={`${pathname === "/flashcard" ? "text-white" : "text-gray-400"} ${pathname === "/flashcard" ? "font-semibold" : "font-normal"}`}>Flashcards</span>
                </Link>
              </div>
            )}

            {isLoggedIn ? (
              <div className="flex justify-between">
                <div className="flex items-center space-x-6">
                  <button className="text-white">
                    <XSearch />
                  </button>

                  <img
                    src="/images/profile.png"
                    alt="Profile"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                </div>
                <button className="ml-2 text-white">
                  <XDrop />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <TBtnColor text="Sign in" link="/signin" />
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
