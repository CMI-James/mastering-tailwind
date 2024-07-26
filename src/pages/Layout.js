import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import React from "react";
import Header from "@/pages/sections/header";

const Layout = ({ children, mode, setMode }) => {
  const router = useRouter();
  const isLoginPage = router.pathname === "/login";

  return (
    <>
      <Head>
        <title>BM Stores</title>
        <meta name="description" content="The Largest Store in that Area" />
        <link
          rel="icon"
          href={`${mode ? "/favicon-orange.ico" : "/favicon-green.ico"}`}
          type="image/x-icon"
        />
      </Head>

      <div
        className={`${
          mode ? "bg-black text-white" : "bg-white text-black"
        } flex justify-between  flex-col min-h-screen sm:h-screen w-screen   relative ${
          mode
            ? "selection:bg-green-500 selection:text-white"
            : "selection:bg-yellow-400 selection:text-zinc-800"
        } ${isLoginPage ? "login-page-styles" : ""}`}
      >
        {!isLoginPage && <Header setMode={setMode} mode={mode} />}
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
