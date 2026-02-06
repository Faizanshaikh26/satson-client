// "use client"

// import { motion } from "framer-motion"
// import { useEffect, useRef } from "react"
// import gsap from "gsap"

// const logos = [
//   "assets/client/BharatKapital.png",
//   "assets/client/jsdk real estate (1).png",
//   "assets/client/kiara logo_20250223_003411_0000 (1).png",
//   "assets/client/kohinoor-1-1024x287.png",
//   "assets/client/Landing Labs Logo- 1.png",
//   "assets/client/logo suvasti.png",
// ]

// export default function OurClient() {
//   const containerRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (!containerRef.current) return

//     gsap.fromTo(
//       ".logo",
//       { y: 40, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         stagger: 0.12,
//         duration: 1.2,
//         yoyo:true,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 70%",
//         },
//       }
//     )
//   }, [])

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-screen w-full overflow-hidden bg-bgDark flex items-center justify-center"
//     >
//       {/* ================= GLOW (UNCHANGED) ================= */}
//       <div className="pointer-events-none absolute -top-0 -left-48 w-[505px] h-[500px] rounded-full 
// bg-[radial-gradient(circle_at_center,rgba(122,59,255,0.45)_0%,rgba(122,59,255,0.25)_30%,rgba(122,59,255,0.12)_55%,rgba(122,59,255,0.05)_70%,rgba(122,59,255,0.0)_85%)]
// blur-[120px]" />

//       <div className="pointer-events-none absolute top-[30%] -right-48 w-[600px] h-[600px] rounded-full 
// bg-[radial-gradient(circle_at_center,rgba(122,59,255,0.40)_0%,rgba(122,59,255,0.22)_35%,rgba(122,59,255,0.10)_60%,rgba(122,59,255,0.0)_85%)]
// blur-[110px]" />

//       <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#7A3BFF] opacity-10 rounded-full blur-[200px]" />

//       {/* ================= CONTENT ================= */}
//       <div className="relative z-10 max-w-6xl mx-auto px-10 text-center">


//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-[30px] tracking-[0.35em] text-purple-400 uppercase mb-6"
//         >
//            Our Clients
//         </motion.h1>
       
        
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-[13px] tracking-[0.35em] text-purple-400 uppercase mb-20"
//         >
//           Trusted by industry leaders
//         </motion.h2>

//         {/* Logo Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-x-24 gap-y-20 place-items-center">
//           {logos.map((src, i) => (
//             <motion.div
//               key={i}
//               className="logo group relative flex items-center justify-center"
//               whileHover={{ scale: 1.06 }}
//               transition={{ type: "spring", stiffness: 180 }}
//             >
//               {/* Glass glow hover */}
//               <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

//               <img
//                 src={src}
//                 className="relative h-12 md:h-14 object-contain opacity-80 group-hover:opacity-100 transition-all duration-500"
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* Center brand */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.4 }}
//           className="mt-24 flex justify-center"
//         >
//           <img
//             src="assets/client/logo suvasti.png"
//             className="h-20 object-contain opacity-90"
//           />
//         </motion.div>
//       </div>
//     </section>
//   )
// }




// "use client"

// import { motion } from "framer-motion"
// import { useEffect, useRef } from "react"
// import gsap from "gsap"
// import GlowOrb from "../shared/GlowOrb"

// const logos = [
//   "assets/client/BharatKapital.png",
//   "assets/client/jsdk real estate (1).png",
//   "assets/client/kiara logo_20250223_003411_0000 (1).png",
//   "assets/client/kohinoor-1-1024x287.png",
//   "assets/client/Landing Labs Logo- 1.png",
//   "assets/client/logo suvasti.png",
// ]

// export default function OurClient() {
//   const containerRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (!containerRef.current) return

//     gsap.fromTo(
//       ".logo",
//       { y: 40, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         stagger: 0.12,
//         duration: 1.2,
//         yoyo:true,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 70%",
//         },
//       }
//     )
//   }, [])

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-[95vh] pb-40 w-full overflow-hidden   flex items-center justify-center"
//     >
     

      

//       {/* ================= CONTENT ================= */}
//       <div className="relative z-10 w-[80%] mx-auto px-10 text-center">

//  {/* ================= GLOW (UNCHANGED) ================= */}
//     <GlowOrb
//     position="left"
//     top="200px"
//     size={{ width: "400px", height: "400px" }}
//   />

//   {/* Right glow */}
//   <GlowOrb
//     position="right"
//     top="0%"
//     size={{ width: "505px", height: "500px" }}
//   />



//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-[30px] tracking-[0.35em] text-purple-400 uppercase mb-30"
//         >
//            Our Clients
//         </motion.h1>
       
        
//         {/* Heading */}
//         {/* <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-[13px] tracking-[0.35em] text-purple-400 uppercase mb-20"
//         >
//           Trusted by industry leaders
//         </motion.h2> */}

//         {/* Logo Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3  gap-y-20 place-items-center">
//           {logos.map((src, i) => (
//             <motion.div
//               key={i}
//               className="logo group relative flex items-center justify-center"
//               whileHover={{ scale: 1.06 }}
//               transition={{ type: "spring", stiffness: 180 }}
//             >
//               {/* Glass glow hover */}
//               <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

//               <img
//                 src={src}
//                 className="relative h-12 md:h-20 object-contain opacity-80 group-hover:opacity-100 transition-all duration-500"
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* Center brand */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.4 }}
//           className="mt-24 flex justify-center"
//         >
//           <img
//             src="assets/client/logo suvasti.png"
//             className="h-20 object-contain opacity-90"
//           />
//         </motion.div>
//       </div>
//     </section>
//   )
// }



// "use client"

// import { motion } from "framer-motion"
// import { useEffect, useRef } from "react"
// import gsap from "gsap"


// /* ================= LOGOS ================= */

// const row1 = [
//   "assets/client/kiara logo_20250223_003411_0000 (1).png",
//   "assets/client/Landing Labs Logo- 1.png",
//   "assets/client/jsdk real estate (1).png",
//   "assets/client/BharatKapital.png",
// ]

// const row2 = [
//   "assets/client/kohinoor-1-1024x287.png",
//   "assets/client/Techmark.Logo.png",
  
// ]

// const row3 = [
//   "assets/client/logo suvasti.png",
// ]

// /* ================= COMPONENT ================= */

// export default function OurClient() {
//   const containerRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (!containerRef.current) return

//     gsap.fromTo(
//       ".logo",
//       { y: 40, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         stagger: 0.12,
//         duration: 1.1,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 75%",
//         },
//       }
//     )
//   }, [])

//   const Logo = ({ src }: { src: string }) => (
//     <motion.div
//       className="logo group relative flex items-center justify-center"
//       whileHover={{ scale: 1.06 }}
//       transition={{ type: "spring", stiffness: 160 }}
//     >
//       {/* Hover Glow */}
//       <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

//       <img
//         src={src}
//         alt="Client logo"
//         className="
//           relative
//           h-14 md:h-20
//           object-contain
//           opacity-80
//           group-hover:opacity-100
//           transition-all
//           duration-500
//         "
//       />
//     </motion.div>
//   )

//   return (
//     <section
//       ref={containerRef}
//       className="relative py-12 md:py-24 w-full overflow-hidden flex items-center justify-center"
//     >
//       {/* Background Glow */}
//       <div className="pointer-events-none absolute -top-[-40%] -left-40 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.35)_0%,rgba(122,59,255,0.0)_70%)] blur-[120px] md:block hidden" />
//       <div className="pointer-events-none absolute top-0 -right-40 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.25)_0%,rgba(122,59,255,0.0)_70%)] blur-[120px] md:block hidden" />

//       {/* Content */}
//       <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-center">

//         {/* Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           viewport={{ once: true }}
//           className="font-playfairDisplay text-3xl sm:text-4xl md:text-5xl font-semibold mb-16"
//         >
//           Our{" "}
//           <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent italic">
//             Clients
//           </span>
//         </motion.h1>

//         {/* ===== ROW 1 — 4 Logos (Always) ===== */}
//         <div className="grid grid-cols-4 gap-y-10 gap-x-6 place-items-center mb-8 md:mb-14">
//           {row1.map((src, i) => (
//             <Logo key={i} src={src} />
//           ))}
//         </div>

//         {/* ===== ROW 2 — 2 Logos (Always) ===== */}
//         <div className="grid grid-cols-2 gap-x-16 place-items-center mb-10 md:mb-20 max-w-3xl mx-auto">
//           {row2.map((src, i) => (
//             <Logo key={i} src={src} />
//           ))}
//         </div>

//         {/* ===== ROW 3 — 1 Logo (Always) ===== */}
//         <div className="flex justify-center">
//           <Logo src={row3[0]} />
//         </div>

//       </div>
//     </section>
//   )
// }



"use client"

import { motion } from "framer-motion"

/* ================= LOGOS ================= */

const logos = [
  "assets/client/kiara logo_20250223_003411_0000 (1).png",
  "assets/client/Landing Labs Logo- 1.png",
  "assets/client/jsdk real estate (1).png",
  "assets/client/BharatKapital.png",
  "assets/client/kohinoor-1-1024x287.png",
  "assets/client/Techmark.Logo.png",
  "assets/client/logo suvasti.png",
]

/* ================= COMPONENT ================= */

export default function OurClient() {
  return (
    <section className="relative py-16 md:py-28 w-full overflow-hidden">
      {/* Title */}
      <h1 className="text-center font-playfairDisplay text-3xl sm:text-4xl md:text-5xl font-semibold mb-16">
        Our{" "}
        <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent italic">
          Clients
        </span>
      </h1>

      {/* ===== MARQUEE 1 (LEFT → RIGHT) ===== */}
      <Marquee direction="right" speed={35} />

      {/* Spacing */}
      <div className="h-10 md:h-16" />

      {/* ===== MARQUEE 2 (RIGHT → LEFT) ===== */}
      <Marquee direction="left" speed={35} />
    </section>
  )
}

/* ================= MARQUEE ================= */

const Marquee = ({
  direction = "left",
  speed = 30,
}: {
  direction?: "left" | "right"
  speed?: number
}) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex w-max gap-20 items-center"
        animate={{
          x:
            direction === "left"
              ? ["0%", "-50%"]
              : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* First set */}
        {logos.map((src, i) => (
          <Logo key={`logo-a-${direction}-${i}`} src={src} />
        ))}

        {/* Duplicate set */}
        {logos.map((src, i) => (
          <Logo key={`logo-b-${direction}-${i}`} src={src} />
        ))}
      </motion.div>
      
    </div>
  )
}

/* ================= LOGO ITEM ================= */

const Logo = ({ src }: { src: string }) => (
  <div className="relative flex items-center justify-center min-w-[140px] md:min-w-[180px]">
    {/* Glow */}
    <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 hover:opacity-100 blur-xl transition-all duration-500" />

    <img
      src={src}
      alt="Client logo"
      className="h-14 md:h-20 object-contain opacity-80 hover:opacity-100 transition-all duration-500"
    />
  </div>
)
