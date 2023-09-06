import Head from "next/head";
import { useState } from "react";

import React from "react";
import Header from "@/pages/sections/header";

const Layout = ({ children }) => {
  const [mode, setMode] = useState(true);
  const handleClick = () => {
    setMode(!mode);
  };
  return (
    <>
      <Head>
        <title>Forking Headis</title>
        <meta name="description" content="This is the fucking headis" />
      </Head>

      <div
        class={`${
          mode ? "bg-black text-white" : "bg-white text-black"
        } flex justify-between main px-8 flex-col h-screen w-screen sm:px-24 lg:px-20 py-9 relative ${
          mode
            ? " selection:bg-green-500 selection:text-white"
            : "selection:bg-yellow-400 selection:text-zinc-800"
        } `}
      >
        <Header handleClick={handleClick} />
        <main className="flex-grow">{children}</main>
      </div>
    </>
  );
};

export default Layout;
