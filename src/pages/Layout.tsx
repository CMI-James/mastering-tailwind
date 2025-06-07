"use client"

import Head from "next/head"
import { useRouter } from "next/router"
import type React from "react"
import Header from "@/pages/sections/header"

interface LayoutProps {
  children: React.ReactNode
  mode: boolean
  setMode: (mode: boolean) => void
}

const Layout: React.FC<LayoutProps> = ({ children, mode, setMode }) => {
  const router = useRouter()

  // Define the array of excluded paths
  const excludedPaths: string[] = ["/login", "/signup"]

  // Check if the current path is in the excluded paths
  const isExcludedPage: boolean = excludedPaths.includes(router.pathname)

  return (
    <>
      <Head>
        <title>BM Stores</title>
        <meta name="description" content="The Largest Store in that Area" />
        <link rel="icon" href={`${mode ? "/favicon-orange.ico" : "/favicon-green.ico"}`} type="image/x-icon" />
      </Head>

      <div
        className={`${
          mode ? "bg-black text-white" : "bg-white text-black"
        } flex justify-between flex-col min-h-screen sm:h-screen w-screen relative ${
          mode ? "selection:bg-green-500 selection:text-white" : "selection:bg-yellow-400 selection:text-zinc-800"
        } ${isExcludedPage ? "login-page-styles" : ""}`}
      >
        {!isExcludedPage && <Header setMode={setMode} mode={mode} />}
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
