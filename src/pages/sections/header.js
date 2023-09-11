import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"

import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import Button from "@/components/button";

const Header = ({setMode, mode }) => {
  const [under, setUnder] = useState(0);
  const router = useRouter(); 

  useEffect(() => {
    const currentRoute = router.asPath;
    const currentIndex = NavLinks.findIndex(
      (name) => `/${name.toLowerCase()}` === currentRoute
    );
    if (currentIndex !== -1) {
     
      setUnder(currentIndex);
    }
  }, [router.asPath]);

  const handleUnder = (index) => {
    setUnder(index);
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
                ? " border-yellow-500 "
                : under === index && !mode
                ? "border-green-500 "
                : "text-zinc-500 text-opacity-70"
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
        <Button mode={mode} setMode={setMode}/>
       
      </div>
    </nav>
  );
};

export default Header;
