"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

const teamImages = [
  "/assets/team/5880df850d2b063dc7dee9d01fb9c940e5413dc6.jpg", // Large
  "/assets/team/a4f5bb84e8a75e57ccfacac5de8a7b4087297d05.png",
  "/assets/team/a18a0fa4e0ca1d8c5adeefdceceb1ca5a313150d.png",
  "/assets/team/e310d834086d50380db539c885534c4e5c103728.png",
  "/assets/team/edfc46c884e935c30071a6162f066b5a0d967c11.png",
  "/assets/team/fb3f66268d7bb6ef116a1981923eff123ec75384.png",
]

const collageSpans = [
  "col-span-4 row-span-2", // Big top image
  "col-span-2 row-span-2",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-4 row-span-1", // Wide bottom strip
]


export default function TeamImageCollage() {
  const gridRef = useRef<HTMLDivElement>(null)
  

  useEffect(() => {
    if (!gridRef.current) return

    gsap.fromTo(
      gridRef.current.children,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 1.3,
        ease: "power4.out",
      }
    )
  }, [])

  return (
    <div
      ref={gridRef}
      className="
        mx-auto lg:mx-0
        max-w-lg
        grid grid-cols-4
        auto-rows-[90px]
        gap-3
      "
    >
      {teamImages.map((src, index) => (
        <div
          key={index}
          className={`
            group relative overflow-hidden rounded-xl
            border border-white/5 bg-white/5
            ${collageSpans[index]}
          `}
        >
          <img
            src={src}
            alt={`Team ${index + 1}`}
            className="
              h-full w-full object-cover
              grayscale
              transition-all duration-700
              group-hover:grayscale-0
              group-hover:scale-105
            "
          />

          <div
            className="
              pointer-events-none absolute inset-0
              bg-gradient-to-tr from-purple-500/20 via-transparent to-transparent
              opacity-0 group-hover:opacity-100
              transition-opacity duration-700
            "
          />
        </div>
      ))}
    </div>
  )
}
