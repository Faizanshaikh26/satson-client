"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

interface HorizontalCarouselProps {
  children: React.ReactNode
}

export default function HorizontalCarousel({
  children,
}: HorizontalCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  let currentX = 0
  let targetX = 0

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    const update = () => {
      currentX += (targetX - currentX) * 0.08
      gsap.set(track, { x: currentX })
    }

    gsap.ticker.add(update)

   const END_PADDING = 40

const handleMouseMove = (e: MouseEvent) => {
  const bounds = container.getBoundingClientRect()
  const x = e.clientX - bounds.left
  const percent = x / bounds.width

  const maxTranslate =
    track.scrollWidth - bounds.width + END_PADDING

  targetX = -maxTranslate * percent
}


    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      const bounds = container.getBoundingClientRect()
      const x = touch.clientX - bounds.left
      const percent = x / bounds.width

      const maxTranslate =
        track.scrollWidth - bounds.width

      targetX = -maxTranslate * percent
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("touchmove", handleTouchMove)

    return () => {
      gsap.ticker.remove(update)
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("touchmove", handleTouchMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full"
    >
      <div
        ref={trackRef}
        className="flex gap-6 px-10 will-change-transform"
      >
        {children}
      </div>
    </div>
  )
}
