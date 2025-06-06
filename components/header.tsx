"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "./theme-provider"
import Button from "@/components/button"

const NavLinks: string[] = ["Home", "About", "Features", "Contact"]

export default function Header() {
  const [under, setUnder] = useState<number>(0)
  const pathname = usePathname()
  const { mode, setMode } = useTheme()

  useEffect(() => {
    const currentIndex = NavLinks.findIndex(
      (name) => `/${name.toLowerCase()}` === pathname || (pathname === "/" && name === "Home"),
    )
    if (currentIndex !== -1) {
      setUnder(currentIndex)
    }
  }, [pathname])

  const handleUnder = (index: number): void => {
    setUnder(index)
  }

  // Don't show header on login/signup pages
  if (pathname === "/login" || pathname === "/signup") {
    return null
  }

  return (
    <nav className="relative flex items-center justify-between py-4 px-4">
      <Link href="/">
        <Image
          width={50}
          height={50}
          alt="BM Stores Logo"
          src={mode ? "/Images/bm-stores-logo-yellow.svg" : "/Images/bm-stores-logo-green.svg"}
          className="w-24 md:w-28 cursor-pointer"
        />
      </Link>
      <ul className="hidden list-none gap-10 lg:flex relative text-lg">
        {NavLinks.map((name: string, index: number) => (
          <li
            onClick={() => handleUnder(index)}
            key={index}
            className={`${
              under === index && mode
                ? "border-yellow-500"
                : under === index && !mode
                  ? "border-green-400"
                  : "text-zinc-500 text-opacity-70"
            } border-b-4 border-transparent hover:border-b-4`}
          >
            <Link href={name === "Home" ? "/" : `/${name.toLowerCase()}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <div className="relative flex flex-row items-center gap-10">
        <Link href="/shop">
          <img
            src={mode ? "/Images/bag-yellow.svg" : "/Images/bag-green.svg"}
            className="w-10 md:w-10 cursor-pointer flex"
            alt="Shopping bag"
          />
        </Link>
        <Button mode={mode} setMode={setMode} />
      </div>
    </nav>
  )
}
