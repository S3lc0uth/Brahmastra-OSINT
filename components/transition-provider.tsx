"use client"

import { TransitionContext } from "@/context/transition-context"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { usePathname, useRouter } from "next/navigation"
import type { ReactNode } from "react"
import { useRef } from "react"

export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement>(null)

  const playTransition = (href: string) => {
    const currentPath = pathname
    const targetPath = href.split("#")[0]

    if (href === currentPath || (targetPath === currentPath && href.includes("#"))) {
      return
    }

    const timeline = gsap.timeline({
      onComplete: () => {
        router.push(href)
      },
    })
    timeline.to(containerRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: "power3.in",
    })
  }

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          onComplete: () => {
            const hash = window.location.hash
            if (hash) {
              const targetElement = document.querySelector(hash)
              if (targetElement) {
                gsap.to(window, {
                  duration: 1,
                  scrollTo: { y: targetElement, autoKill: false },
                  ease: "power2.inOut",
                  delay: 0.1,
                })
              }
            } else {
              window.scrollTo(0, 0)
            }
          },
        },
      )
    },
    { dependencies: [pathname] },
  )

  return (
    <TransitionContext.Provider value={{ playTransition }}>
      <div ref={containerRef}>{children}</div>
    </TransitionContext.Provider>
  )
}
