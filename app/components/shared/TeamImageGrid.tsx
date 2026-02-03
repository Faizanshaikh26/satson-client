"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import Image from "next/image"

const teamImages = [
  "https://res.cloudinary.com/dj7xotphr/image/upload/v1770102405/5880df850d2b063dc7dee9d01fb9c940e5413dc6_ak3pdc.jpg", // Large
  "https://res.cloudinary.com/dj7xotphr/image/upload/v1770103000/a4f5bb84e8a75e57ccfacac5de8a7b4087297d05_1_dwbv44.png",
  "https://res.cloudinary.com/dj7xotphr/image/upload/v1770103000/a18a0fa4e0ca1d8c5adeefdceceb1ca5a313150d_1_njod1o.png",
  "https://res.cloudinary.com/dj7xotphr/image/upload/v1770103002/e310d834086d50380db539c885534c4e5c103728_1_cxfs5d.png",
  "https://res.cloudinary.com/dj7xotphr/image/upload/v1770102405/5880df850d2b063dc7dee9d01fb9c940e5413dc6_ak3pdc.jpg",
  "https://res.cloudinary.com/dj7xotphr/image/upload/v1770103010/fb3f66268d7bb6ef116a1981923eff123ec75384_1_bbgaoo.png",
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
          <Image
            src={src}
            alt={`Team ${index + 1}`}
            fill
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
