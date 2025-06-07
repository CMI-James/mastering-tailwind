"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

interface ThemeContextType {
  mode: boolean
  setMode: (mode: boolean) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<boolean>(true)

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <div
        className={`${
          mode ? "bg-black text-white" : "bg-white text-black"
        } flex justify-between flex-col min-h-screen w-screen relative ${
          mode ? "selection:bg-green-500 selection:text-white" : "selection:bg-yellow-400 selection:text-zinc-800"
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
