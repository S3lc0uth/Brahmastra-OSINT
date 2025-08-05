"use client"
import { createContext, useContext } from "react"

interface TransitionContextType {
  playTransition: (href: string) => void
}

export const TransitionContext = createContext<TransitionContextType | undefined>(undefined)

export function useTransitionContext() {
  const context = useContext(TransitionContext)
  if (!context) {
    throw new Error("useTransitionContext must be used within a TransitionProvider")
  }
  return context
}
