import type React from "react"
export interface ModeProps {
  mode: boolean
  setMode: (mode: boolean) => void
}

export interface LayoutProps extends ModeProps {
  children: React.ReactNode
}

export interface ComponentProps extends ModeProps {
  // Add other common props here
}
