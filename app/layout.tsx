import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "../components/theme-provider"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BM Stores",
  description: "The Largest Store in that Area",
  icons: {
    icon: [
      {
        url: "/favicon-green.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-orange.ico",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
