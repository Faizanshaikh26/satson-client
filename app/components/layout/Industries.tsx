 
 "use client"
 
 
import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"


const industries = [
  {
    title: "Real Estate &\nInfrastructure",
    image: "/assets/industries/historical-church.jpg",
  },
  {
    title: "HealthCare\n& Clinics",
    image: "/assets/industries/healthcare.jpg",
  },
  {
    title: "Corporate\n& Enterprises",
    image: "/assets/industries/equipment-garage-shop.jpg",
  },
  {
    title: "Education\n& EdTech",
    image: "/assets/industries/education-tech.jpg",
  },
  {
    title: "Startups\n& Innovation",
    image: "/assets/industries/white-keyboard-earphone-coffee-cup-eyeglasses-pen-spiral-notepad-against-black-desk.jpg",
  },
  {
    title: "Real Estate &\nInfrastructure",
    image: "/assets/industries/historical-church.jpg",
  },
  {
    title: "HealthCare\n& Clinics",
    image: "/assets/industries/healthcare.jpg",
  },
 
 
]

export default function Industries() {
const sectionRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pinDistance = window.innerWidth * 2; // Adjust for scroll length

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${pinDistance}`,
          scrub: 1, // Smooth catch-up
          pin: true,
          anticipatePin: 1,
        },
      })

      tl.to(triggerRef.current, {
        x: () => -(triggerRef.current?.scrollWidth! - window.innerWidth + 100),
        ease: "none",
      })

      // Card "Speed Leaning" and Image Parallax
      const cards = gsap.utils.toArray<HTMLElement>(".industry-card")
      cards.forEach((card) => {
        const img = card.querySelector("img")
        
        gsap.to(img, {
          x: -40, // Image moves inside the card
          ease: "none",
          scrollTrigger: {
            trigger: card,
            containerAnimation: tl, // Critical for horizontal sync
            start: "left right",
            end: "right left",
            scrub: true,
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])


  return (
    <section className=" md:py-10  text-white overflow-hidden" ref={sectionRef}>
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-[32px] md:text-5xl font-marcellus">
          <span className="bg-gradient-to-r  from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
            Industries
          </span>{" "}
          We Serve
        </h2>
        <p className="text-secondaryText md:mt-4 text-[14px] md:text-[18px]">
          Powering progress across industries
        </p>
      </div>

   
<div className="relative overflow-visible">

  <div className="flex gap-10 snap-x snap-mandatory px-6" ref={triggerRef}>
    {industries.map((item, i) => (
      <div
        key={i}
        className="relative w-[300px] h-[450px] shrink-0 snap-start overflow-hidden bg-black/40 border border-white/10"
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover grayscale hover:grayscale-0 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-[24px] bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent font-marcellus whitespace-pre-line">
            {item.title}
          </h3>
        </div>
      </div>
    ))}
  </div>
</div>

    
    </section>
  )
}











// "use client"

// import { motion, useScroll, useTransform } from "framer-motion"
// import { useRef } from "react"
// import Image from "next/image"

// const industries = [
//   {
//     title: "Real Estate &\nInfrastructure",
//     image: "/assets/industries/historical-church.jpg",
//   },
//   {
//     title: "HealthCare\n& Clinics",
//     image: "/assets/industries/healthcare.jpg",
//   },
//   {
//     title: "Corporate\n& Enterprises",
//     image: "/assets/industries/equipment-garage-shop.jpg",
//   },
//   {
//     title: "Education\n& EdTech",
//     image: "/assets/industries/education-tech.jpg",
//   },
//   {
//     title: "Startups\n& Innovation",
//     image: "/assets/industries/white-keyboard-earphone-coffee-cup-eyeglasses-pen-spiral-notepad-against-black-desk.jpg",
//   },
// ]

// export default function Industries() {
//   const sectionRef = useRef(null)

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   })

//   // Moves from RIGHT → LEFT
//   const x = useTransform(scrollYProgress, [0, 1], ["10%", "-60%"])

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-40 bg-[#020617] text-white overflow-hidden"
//     >
//       {/* Header */}
//       <div className="text-center mb-24 relative z-10">
//         <h2 className="text-5xl font-serif">
//           <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
//             Industries
//           </span>{" "}
//           We Serve
//         </h2>
//         <p className="text-gray-400 mt-4 text-sm">
//           Powering progress across industries
//         </p>
//       </div>

//       {/* Carousel */}
//       <div className="relative h-[520px] overflow-hidden">
//         <motion.div
//           style={{ x }}
//           className="absolute left-0 top-0 flex gap-10"
//         >
//           {industries.map((item, i) => (
//             <div
//               key={i}
//               className="relative w-[400px] h-[520px] rounded-2xl overflow-hidden bg-black/40 border border-white/10 group"
//             >
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 fill
//                 className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

//               <div className="absolute bottom-10 left-8 right-8">
//                 <h3 className="text-xl font-medium leading-snug text-indigo-300 whitespace-pre-line">
//                   {item.title}
//                 </h3>
//               </div>

//               <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl group-hover:ring-indigo-500/40 transition" />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }


