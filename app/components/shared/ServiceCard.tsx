"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

type Props = {
  service: {
    title: string
    description: string
    points: string[]
  }
}

export default function ServiceCard({ service }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  /* ---------------- LAZY LOAD + ENTRY ---------------- */
  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 80, rotateX: 15 },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 1.2,
              ease: "power4.out",
            }
          )
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(card)
  }, [])

  /* ---------------- MOUSE MOVE 3D TILT ---------------- */
  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(card, {
      rotateY: x / 18,
      rotateX: -y / 18,
      duration: 0.4,
      ease: "power3.out",
    })

    gsap.to(glowRef.current, {
      x: x / 3,
      y: y / 3,
      opacity: 1,
      duration: 0.3,
    })
  }

  const resetTilt = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
    })
    gsap.to(glowRef.current, { opacity: 0 })
  }

  /* ---------------- MAGNETIC CTA ---------------- */
  const magneticMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(btn, {
      x: x * 0.4,
      y: y * 0.4,
      duration: 0.3,
      ease: "power3.out",
    })
  }

  const magneticReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "power3.out",
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
 className="
    group relative
    w-full max-w-[400px]
    min-h-[420px] sm:min-h-[450px]
    rounded-2xl p-[1px]
  "
      style={{ perspective: "1000px" }}
    >
      {/* Gradient Border Animation */}
      {/* <div className="absolute inset-0 rounded-2xl  bg-gradient-to-b from-[#5593F7] to-[#C47DE8] animate-[gradient_6s_ease_infinite]" /> */}

      {/* Card */}
      <div className="relative h-full w-full rounded-2xl bg-gradient-to-b from-[#0B1220] to-[#070B14] p-8 border border-white/5">
        
        {/* Glow */}
        <div
          ref={glowRef}
          className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle,rgba(139,92,246,0.35)_0%,rgba(0,0,0,0)_70%)] opacity-0"
        />

        <div className="relative z-10">
          <div className="mb-4 h-11 w-11 rounded-lg bg-[#1E293B] flex items-center justify-center text-[#60A5FA]">
            ↻
          </div>

          <h3 className="text-lg font-medium font-playfairDisplay text-white mb-3">
            {service.title}
          </h3>

          <p className="text-sm text-secondaryText font-poppins mb-6">
            {service.description}
          </p>

          <ul className="space-y-2 text-sm text-secondaryText font-poppins mb-6">
            {service.points.map((p, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" />
                {p}
              </li>
            ))}
          </ul>

          {/* Magnetic CTA
          <button
            onMouseMove={magneticMove}
            onMouseLeave={magneticReset}
            className="mt-auto inline-block rounded  bg-gradient-to-r from-[#C243FE] to-[#9B34CB] px-8 py-2 text-xs font-medium text-white"
          >
            Learn More →
          </button> */}
        </div>
      </div>
    </div>
  )
}
