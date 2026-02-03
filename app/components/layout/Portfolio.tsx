// "use client"

// import { motion } from "framer-motion"
// import { useEffect, useRef } from "react"
// import gsap from "gsap"
// import Link from "next/link"

// const projects = [
//   {
//     title: "Suvasti Fabrics",
//     type: "Web Application",
//     tech: ["React", "Node.js"],
//     image: "assets/portfolio/Suvasti Fabrics.png",
//   },
//   {
//     title: "Bharat Kapital",
//     type: "Financial Dashboard",
//     tech: ["Dashboard", "Analytics"],
//     image: "assets/portfolio/Bharat Kapital.png",
//   },
//   {
//     title: "Cloudsync Mobile",
//     type: "Mobile App",
//     tech: ["React Native", "API"],
//     image: "assets/portfolio/Landing Labs.png",
//   },
// ]

// export default function PortfolioSection() {
//   const sectionRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (!sectionRef.current) return

//     gsap.fromTo(
//       ".portfolio-card",
//       { y: 60, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         stagger: 0.18,
//         duration: 1.4,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//         },
//       }
//     )
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       className="relative  py-10 bg-Base overflow-hidden"
//     >
//       {/* ===== Header ===== */}
//       <div className="relative z-10 text-center max-w-4xl mx-auto mb-16 sm:mb-24 px-4">
//         <h3 className="text-purple-400 text-3xl sm:text-4xl md:text-[48px] font-marcellus mb-2">
//           PORTFOLIO
//         </h3>

//         <h2 className="text-white uppercase font-inter text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
//           Our work that{" "}
//           <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//             makes the difference
//           </span>
//         </h2>

//         <p className="mt-4 text-secondaryText font-poppins text-[14px] sm:text-[16px] md:text-[18px] max-w-[20rem] md:max-w-[40rem] mx-auto leading-relaxed font-bold">
//           Discover our most recent projects — modern, performant sites designed
//           to convert your visitors into loyal customers.
//         </p>
//       </div>

//       {/* ===== Cards Grid ===== */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-14">
//         {projects.map((p, i) => (
//           <div
//             key={i}
//             className="portfolio-card group relative rounded-xl overflow-hidden w-full"
//           >
//             {/* Card */}
//             <div className="relative z-10">

//               {/* Image */}
//               <div className="h-[200px] sm:h-[220px] md:h-[240px] overflow-hidden">
//                 <img
//                   src={p.image}
//                   alt={p.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                 />
//               </div>

//               {/* Bottom Glass Panel */}
//               <div className="relative px-5 sm:px-6 md:px-8 py-6 bg-[#21262933]
//  backdrop-blur-xl border-t border-white/10">
                
//                 <p className="text-[10px] sm:text-[11px] tracking-[0.25em] font-playfairDisplay text-gray-400 uppercase">
//                   {p.type}
//                 </p>

//                 <h3 className="mt-2 text-lg sm:text-xl font-poppins  text-white">
//                   {p.title}
//                 </h3>

//                 <div className="flex gap-2 sm:gap-3 font-inter mt-4 flex-wrap">
//                   {p.tech.map((t, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-1 rounded  bg-white/10 text-[10px] sm:text-[11px] text-gray-300 backdrop-blur-md"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ===== Button ===== */}
//       <div className="relative z-10 mt-4 md:mt-14 text-center">
//         <Link href="/portfolio">
//           <button className="inline-flex items-center font-inter gap-2 px-6 py-2.5 rounded-full text-sm text-blue-400 border border-blue-500/30 bg-blue-500/10 backdrop-blur hover:bg-blue-500/20 transition">
//             See More
//           </button>
//         </Link>
//       </div>
//     </section>
//   )
// }


"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import api from "@/app/_lib/axios"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

type Project = {
  _id: string
  slug: string
  title: string
  heroImage: string
  industry?: string
  technologies?: string[]
}

type LoadingState = "idle" | "loading" | "success" | "error"

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [projects, setProjects] = useState<Project[]>([])
  const [loadingState, setLoadingState] = useState<LoadingState>("idle")
  const [error, setError] = useState<string>("")

  useEffect(() => {
    if (!sectionRef.current || projects.length === 0) return

    gsap.fromTo(
      ".portfolio-card",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.18,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    )
  }, [projects])

  // Fetch from backend
  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        setLoadingState("loading")
        setError("")
        const res = await api.get("/portfolio")
        const data = res.data?.data || []
        setProjects(data)
        setLoadingState("success")
      } catch (err: any) {
        console.error("Failed to load portfolio", err)
        setError("Unable to load portfolio projects. Please try again later.")
        setLoadingState("error")
      }
    }

    fetchPortfolios()
  }, [])

  const renderContent = () => {
    if (loadingState === "loading") {
      return (
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent"></div>
          <p className="mt-4 text-gray-400">Loading projects...</p>
        </div>
      )
    }

    if (loadingState === "error") {
      return (
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="text-gray-400 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Unable to Load Projects</h3>
          <p className="text-gray-400">{error}</p>
        </div>
      )
    }

    if (loadingState === "success" && projects.length === 0) {
      return (
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="text-gray-400 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">No Projects Yet</h3>
          <p className="text-gray-400">
            We're currently working on some amazing projects. Check back soon to see our work!
          </p>
        </div>
      )
    }

    return (
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3  gap-10 lg:gap-14">
        {projects.map((p) => (
          <div
            key={p._id}
            className="portfolio-card group relative rounded-xl overflow-hidden w-full "
          >
<Link href={`/portfolio/${p.slug}`}>


          
            <div className="relative z-10">
              {/* Image */}
              <div className="h-[200px] sm:h-[220px] md:h-[240px] overflow-hidden">
                <img
                  src={p.heroImage}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Bottom Glass Panel */}
              <div className="relative px-5 sm:px-6 md:px-8 py-6 bg-[#21262933] backdrop-blur-xl border-t border-white/10">
                <p className="text-[10px] sm:text-[11px] tracking-[0.25em] font-playfairDisplay text-gray-400 uppercase">
                  {p.industry || "Project"}
                </p>

                <h3 className="mt-2 text-lg sm:text-xl font-poppins text-white">
                  {p.title}
                </h3>

                <div className="flex gap-2 sm:gap-3 font-inter mt-4 flex-wrap">
                  {p.technologies?.map((t: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded bg-white/10 text-[10px] sm:text-[11px] text-gray-300 backdrop-blur-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            </Link>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-10 bg-Base overflow-hidden"
    >
      {/* ===== Header ===== */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-16 sm:mb-24 px-4">
        <h3 className="text-purple-400 text-3xl sm:text-4xl md:text-[48px] font-marcellus mb-2">
          PORTFOLIO
        </h3>

        <h2 className="text-white uppercase font-inter text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
          Our work that{" "}
          <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
            makes the difference
          </span>
        </h2>

        <p className="mt-4 text-secondaryText font-poppins text-[14px] sm:text-[16px] md:text-[18px] max-w-[20rem] md:max-w-[40rem] mx-auto leading-relaxed font-bold">
          Discover our most recent projects — modern, performant sites designed
          to convert your visitors into loyal customers.
        </p>
      </div>

      {/* ===== Cards Grid ===== */}
      {renderContent()}

      {/* ===== Button (only show when we have projects) ===== */}
      {loadingState === "success" && projects.length > 0 && (
        <div className="relative z-10 mt-4 md:mt-14 text-center">
          <Link href="/portfolio">
            <button className="inline-flex items-center font-inter gap-2 px-6 py-2.5 rounded-full text-sm text-blue-400 border border-blue-500/30 bg-blue-500/10 backdrop-blur hover:bg-blue-500/20 transition">
              See More
            </button>
          </Link>
        </div>
      )}
    </section>
  )
}