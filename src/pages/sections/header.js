import React from "react";

import Link from "next/link";

const Header = ({ handleClick }) => {
  return (
    <nav className="relative flex items-center justify-between">
      <img src="images/logo.png" className="w-32 md:w-40 cursor-pointer" />
      <ul className="hidden list-none gap-10 lg:flex relative  z-0 items-center">
        <li className="peer/home">
          <Link href="/">Home</Link>
        </li>
        <li className="peer/about">
          <Link href="/about">About</Link>
        </li>
        <li className="peer/features">
          <Link href="/features">Features</Link>
        </li>
        <li className="peer/contact">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className="relative flex flex-row items-center gap-10">
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
        <Link href="/shop">
          <img
            src="images/shopping-bag-svgrepo-com (2).svg"
            className="w-10 md:w-12 h-10 cursor-pointer hidden sm:flex"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
