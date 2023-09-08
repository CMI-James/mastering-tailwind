import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"

import Link from "next/link";
import NavLinks from "@/components/NavLinks";

const Header = ({ setMode, mode }) => {
  const [under, setUnder] = useState(0);
  const router = useRouter(); // Access the router

  useEffect(() => {
    // Get the current route path (e.g., '/about')
    const currentRoute = router.asPath;

    // Find the index of the current route in the NavLinks array
    const currentIndex = NavLinks.findIndex(
      (name) => `/${name.toLowerCase()}` === currentRoute
    );

    if (currentIndex !== -1) {
      // If the current route is found in NavLinks, set it as underlined
      setUnder(currentIndex);
    }
  }, [router.asPath]);

  const handleUnder = (index) => {
    setUnder(index);
  };
  const handleClick = () => {
    setMode(!mode);
  };
  return (
    <nav className="relative flex items-center justify-between">
      <img
        src={
          mode
            ? "images/bm-stores-logo-yellow.png"
            : "images/bm-stores-logo-green.png"
        }
        className="w-32 md:w-40 cursor-pointer"
      />
      <ul className="hidden list-none gap-10 lg:flex relative  text-lg ">
        {NavLinks.map((name, index) => (
          <li
            onClick={() => handleUnder(index)}
            key={index}
            className={`${
              under === index && mode
                ? " border-yellow-500"
                : under === index && !mode
                ? "border-green-500"
                : ""
            } border-b-4 border-transparent hover:border-b-4 `}
          >
            <Link href={`/${name.toLowerCase()}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <div className="relative flex flex-row items-center gap-10">
        <Link href="/shop">
          <img
            src={mode ? "images/bag-yellow.svg" : "images/bag-green.svg"}
            className="w-10 md:w-12 h-10 cursor-pointer flex"
          />
        </Link>
        <input
          onClick={() => handleClick()}
          type="checkbox"
          className="peer sr-only opacity-0"
          id="theme-toggle"
        />
        <label
          htmlFor="theme-toggle"
          className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500"
        ></label>
      </div>
    </nav>
  );
};

export default Header;
