"use client";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState();

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Handle the Enter key press and navigate to the desired URL
      e.preventDefault();

      window.location.href = window.location.origin + "/search/" + searchValue;
    }
  };
  useEffect(() => {
    setSearchValue(decodeFromURL(window.location.href.split("/").at(-1)));
  }, []);

  return (
    <nav className="sm:fixed z-30 top-0 w-full bg-anime-blue flex flex-row sm:flex-row items-center justify-between p-3">
      <div className="flex  items-center  lg:mb-0 lg:mr-3">
        <div className="mr-3">
          <a href="/" className="text-white hover:text-gray-500">
            <img
              src="/assets/GIFs/animechakra.gif"
              alt="animechakra gif"
              className="w-64 h-auto"
              href="/"
            />
          </a>
        </div>
        <div className="mr-3">
          <a href="/search/popular" className=" md:hidden">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/search--v1.png"
              alt="search--v1"
            />
          </a>
        </div>
        <div className="mr-3">
          <a
            href="/search/popular"
            className="text-white hover:text-gray-500 hidden md:block lg:block"
          >
            Popular
          </a>
        </div>
        <div className="mr-3">
          <a href="/" className="text-white hover:text-gray-500">
            Profile
          </a>
        </div>
      </div>
      <div className="hidden md:block">
        <form>
          <div className="flex rounded-md overflow-hidden h-10 w-96">
            <input
              id="searchBox"
              type="text"
              className="w-full rounded-md rounded-r-none p-3"
              placeholder="Enter your search query"
              value={searchValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
            <a
              type="button"
              id="searchButton"
              className="bg-indigo-600 text-white  p-2 text-lg font-semibold rounded-r-md"
              href={`../search/${searchValue}`}
            >
              Go
            </a>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

function decodeFromURL(encodedURL) {
  if (encodedURL !== "popular") {
    try {
      // console.log(decodeURIComponent(encodedURL));
      return decodeURIComponent(encodedURL);
    } catch (error) {
      console.error("Error decoding the URL:", error);
      return undefined;
    }
  } else return undefined;
}
