"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger, ScrollSmoother } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export function useScrollSmoother() {
  useEffect(() => {
    // Prevent double init
    if (ScrollSmoother.get()) return

    const smoother = ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
    })

    return () => {
      smoother.kill()
    }
  }, [])
}
