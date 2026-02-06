// import Image from "next/image"

// export default function Hero() {
//   return (


//     <>

   
//     <section className="relative w-full h-screen overflow-hidden">

//       {/* Background Image */}
//       <div
//   className="absolute inset-0 bg-center bg-no-repeat"
//   style={{
//     backgroundImage: "url('/assets/hero/Hero Backgound.jpg')",
//     backgroundSize: "cover",
//   }}
// />


//   {/* Top fade (NOT full dark) */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#080C16]/40 via-black/80 to-transparent" />

//       {/* Bottom cinematic fade */}
//       <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-black to-transparent" />

     
//      {/* Content */}
//       <div className="relative  grid grid-cols-1 md:grid-cols-2 z-10 pt-40 max-w-[1350px] mx-auto px-12 h-full flex items-center">

//         <div className="max-w-3xl space-y-8 ">

//           {/* Pill */}
//           <span className="inline-flex items-center font-inter gap-2 px-5 py-2 rounded-full text-sm text-blue-400 border border-blue-500/30 bg-blue-500/10 backdrop-blur">
//             Build it smarter
//           </span>


// <div className="font-marcellus">
//           {/* Headline */}

//            <h1 className="text-[56px] leading-[1.1] font-light text-white tracking-tight">
//             We craft{" "}
//             <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//               digital solutions
//             </span>
//             <br />
//             that turn visitors into{" "}
//             <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//               customers
//             </span>
//           </h1>

// </div>
         

//           {/* Subtext */}
//           <p className="text-[20px] text-white max-w-xl font-inter">
//             We design performant, beautiful, and strategic software that
//             generates qualified leads and boosts your revenue.
//           </p>

//           {/* CTA */}
//           <button className="group inline-flex items-center gap-3 px-24 py-3 rounded-xl border border-purple-500/40 text-white bg-gradient-to-br from-purple-500/10 to-blue-500/5 backdrop-blur font-inter hover:from-purple-500/20 hover:to-blue-500/10 transition shadow-[0_0_30px_rgba(120,80,255,0.4)]">
//             View Our Work
//             <span className="group-hover:translate-x-1 transition">→</span>
//           </button>

//         </div>

//          <div className="relative flex justify-center items-center left-30">
//             <div className="absolute inset-0 blur-[120px] bg-purple-500/30 rounded-full" />
//             <Image
//               src="/assets/hero/Hero Support.png"
//               alt="Digital Globe"
//               width={366}
//               height={353}
//               className="relative z-10 object-contain"
//               priority
//             />
//           </div>


//         <div>
          
//         </div>

//       </div>



//       <div>
    
//       </div>

//     </section>


//     </>
//   )
// }








// import Image from "next/image"
// import Link from "next/link"

// export default function Hero() {
//   return (
//     <section className="relative w-full min-h-screen overflow-hidden">

//       {/* Background image */}
//       <div
//         className="absolute inset-0 opacity-20 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/assets/hero/Hero Backgound.jpg')",
//         }}
//       />

//       {/* Overlays */}
//       {/* <div className="absolute inset-0 bg-gradient-to-b from-[#080C16]/40 via-black/90 via-black/90  to-transparent" />
//       <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-black to-transparent" /> */}

//       {/* Content wrapper */}
//       <div className="relative z-10 min-h-screen max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:grid lg:grid-cols-2 lg:items-center">

//         {/* LEFT CONTENT */}
//         <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-34 sm:pt-32 lg:pt-0 space-y-2 sm:space-y-7 lg:space-y-8">

//           {/* Pill */}
//           <span className="inline-flex items-center font-inter gap-2 px-4 py-2 rounded-full text-xs sm:text-sm text-blue-400 border border-blue-500/30 bg-blue-500/10 backdrop-blur">
//             Build it smarter
//           </span>

//           {/* Heading */}
//           <h1 className="font-marcellus font-light tracking-tight text-white leading-tight
//             text-[30px]
//             sm:text-[32px]
//             md:text-[40px]
//             lg:text-[56px]"
//           >
//             We craft{" "}
//             <span className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//               digital solutions
//             </span>{" "}
//             that turn visitors into{" "}
//             <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//               customers
//             </span>
//           </h1>

//           {/* Subtext */}
//           <p className="font-inter text-white/90 max-w-md lg:max-w-xl
           
//            text-[14px]
//             md:text-lg
//             lg:text-[20px]"
//           >
//             We design performant, beautiful, and strategic software that
//             generates qualified leads and boosts your revenue.
//           </p>

//           {/* CTA */}




// <Link href='/portfolio'>






//           <button className="group inline-flex items-center gap-3 text-[14px] md:text-[16px]
//             px-4 sm:px-12 lg:px-20
//             py-2 md:py-3 rounded-xl
//             border border-purple-500
//             text-white
//             bg-gradient-to-br from-purple-500/10 to-blue-500/5
//                font-inter
            
//           ">
//             View Our Work
            
//           </button>

//           </Link>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative flex justify-center items-center mt-14 sm:mt-16 lg:mt-0">
//           <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px] blur-[120px] bg-purple-500/30 rounded-full" />

//           <Image
//             src="https://res.cloudinary.com/dj7xotphr/image/upload/v1770103192/Hero_Support_1_jbwdig.webp"
//             alt="Digital Globe"
//             width={366}
//             height={353}
//             priority
//             className="relative z-10 object-contain
//               w-[150px]
//               sm:w-[240px]
//               md:w-[300px]
//               lg:w-[366px]"
//           />
//         </div>

//       </div>
//     </section>
//   )
// }


// "use client"

// import { useEffect, useRef } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// export default function Hero() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const sceneRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.to(sceneRef.current, {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=150%",
//           scrub: true,
//           pin: true,
//         },
//         scale: 1.4,
//         x: -300,
//         ease: "none",
//       })
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full min-h-screen overflow-hidden"
//       style={{ perspective: "1400px" }}  
//     >
//       {/* Background image */}
//       <div
//         className="absolute inset-0 opacity-20 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/assets/hero/Hero Backgound.jpg')",
//         }}
//       />

//       {/* SCENE (this is what moves like a camera) */}
//       <div
//         ref={sceneRef}
//         className="relative z-10 min-h-screen max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:grid lg:grid-cols-2 lg:items-center"
//       >
//         {/* LEFT CONTENT */}
//         <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-32 lg:pt-0 space-y-7">
//           <span className="inline-flex items-center font-inter gap-2 px-4 py-2 rounded-full text-xs sm:text-sm text-blue-400 border border-blue-500/30 bg-blue-500/10 backdrop-blur">
//             Build it smarter
//           </span>

//           <h1 className="font-marcellus font-light tracking-tight text-white leading-tight
//             text-[30px] sm:text-[32px] md:text-[40px] lg:text-[56px]"
//           >
//             We craft{" "}
//             <span className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//               digital solutions
//             </span>{" "}
//             that turn visitors into{" "}
//             <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//               customers
//             </span>
//           </h1>

//           <p className="font-inter text-white/90 max-w-md lg:max-w-xl
//             text-[14px] md:text-lg lg:text-[20px]"
//           >
//             We design performant, beautiful, and strategic software that
//             generates qualified leads and boosts your revenue.
//           </p>

//           <Link href="/portfolio">
//             <button className="group inline-flex items-center gap-3 text-[14px] md:text-[16px]
//               px-4 sm:px-12 lg:px-20 py-2 md:py-3 rounded-xl
//               border border-purple-500 text-white
//               bg-gradient-to-br from-purple-500/10 to-blue-500/5 font-inter">
//               View Our Work
//             </button>
//           </Link>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative flex justify-center lg:ml-28 items-center mt-14 sm:mt-16 lg:mt-0">
//           <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px] blur-[120px] bg-purple-500/30 rounded-full" />

//           <Image
//             src="https://res.cloudinary.com/dj7xotphr/image/upload/v1770103192/Hero_Support_1_jbwdig.webp"
//             alt="Digital Globe"
//             width={366}
//             height={353}
//             priority
//             className="relative z-10 object-contain
//               w-[150px]
//               sm:w-[240px]
//               md:w-[300px]
//               lg:w-[366px]"
//           />
//         </div>
//       </div>

 
//     </section>
//   )
// }



// "use client"

// import { useEffect, useRef } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// export default function Hero() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const sceneRef = useRef<HTMLDivElement>(null)
//   const overlayRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=250%",     // enough scroll for 2 phases
//           scrub: true,
//           pin: true,
//         },
//       })

//       // PART 1 — Camera move (whole hero)
//       tl.to(sceneRef.current, {
//         scale: 1.4,
//         x: -300,
//         ease: "none",
//         duration: 1,
//       })

//       // PART 2 — Satson image reveal
//       tl.fromTo(
//         overlayRef.current,
//         {
//           scale: 2,
//           opacity: 0,
//         },
//         {
//           scale: 1,
//           opacity: 1,
//           ease: "power2.out",
//           duration: 1,
//         }
//       )
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full min-h-screen overflow-hidden"
//       style={{ perspective: "2400px" }}
//     >
//       {/* Background image */}
//       <div
//         className="absolute inset-0 opacity-20 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/assets/hero/Hero Backgound.jpg')",
//         }}
//       />

//       {/* OVERLAY IMAGE (Part 2) */}
//       <div
//         ref={overlayRef}
//         className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
//       >
//         <img
//           src="/assets/satson-animation.png"
//           alt="Satson Animation"
//           className="w-full"
//         />
//       </div>

//       {/* SCENE (Part 1) */}
//       <div
//         ref={sceneRef}
//         className="relative z-10 min-h-screen max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:grid lg:grid-cols-2 lg:items-center"
//       >
//         {/* LEFT CONTENT */}
//         <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-32 lg:pt-0 space-y-7">
//           <span className="inline-flex items-center font-inter gap-2 px-4 py-2 rounded-full text-xs sm:text-sm text-blue-400 border border-blue-500/30 bg-blue-500/10 backdrop-blur">
//             Build it smarter
//           </span>

//           <h1 className="font-marcellus font-light tracking-tight text-white leading-tight
//             text-[30px] sm:text-[32px] md:text-[40px] lg:text-[56px]"
//           >
//             We craft{" "}
//             <span className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//               digital solutions
//             </span>{" "}
//             that turn visitors into{" "}
//             <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//               customers
//             </span>
//           </h1>

//           <p className="font-inter text-white/90 max-w-md lg:max-w-xl
//             text-[14px] md:text-lg lg:text-[20px]"
//           >
//             We design performant, beautiful, and strategic software that
//             generates qualified leads and boosts your revenue.
//           </p>

//           <Link href="/portfolio">
//             <button className="group inline-flex items-center gap-3 text-[14px] md:text-[16px]
//               px-4 sm:px-12 lg:px-20 py-2 md:py-3 rounded-xl
//               border border-purple-500 text-white
//               bg-gradient-to-br from-purple-500/10 to-blue-500/5 font-inter">
//               View Our Work
//             </button>
//           </Link>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative flex justify-center lg:ml-28 items-center mt-14 sm:mt-16 lg:mt-0">
//           <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px] blur-[120px] bg-purple-500/30 rounded-full" />

//           <Image
//             src="https://res.cloudinary.com/dj7xotphr/image/upload/v1770103192/Hero_Support_1_jbwdig.webp"
//             alt="Digital Globe"
//             width={366}
//             height={353}
//             priority
//             className="relative z-10 object-contain
//               w-[150px]
//               sm:w-[240px]
//               md:w-[300px]
//               lg:w-[366px]"
//           />
//         </div>
//       </div>
//     </section>
//   )
// }



// "use client"

// import { useEffect, useRef } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// export default function Hero() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const heroMoveRef = useRef<HTMLDivElement>(null)
//   const overlayRef = useRef<HTMLDivElement>(null)
//   const globeRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=300%",
       
//           scrub: true,
//           pin: true,
//         },
//       })

//       /* ===============================
//          PART 1 — CAMERA PUSH (WHOLE HERO)
//       =============================== */
//       tl.to(heroMoveRef.current, {
//         scale: 1.6,
//         x: "-25vw",
//         transformOrigin: "center center",
//         ease: "none",
//         duration: 1,
//       })

     
    
//       tl.to(
//         globeRef.current,
//         {
//           scale: 1.15,
//           ease: "power2.out",
//           duration: 1,
//         },
//         0.4
//       )
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full min-h-screen overflow-hidden bg-black"
//       style={{ perspective: "2400px" }}
//     >
//       {/* BACKGROUND */}
//       <div
//         className="absolute inset-0 opacity-20 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/assets/hero/Hero Backgound.jpg')",
//         }}
//       />

     

//       {/* MOVING HERO WRAPPER */}
//       <div ref={heroMoveRef}>
//         <div className="relative z-10 min-h-screen max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:grid lg:grid-cols-2 lg:items-center">
//           {/* LEFT CONTENT */}
//           <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-32 lg:pt-0 space-y-7">
//             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm text-blue-400 border border-blue-500/30 bg-blue-500/10 backdrop-blur">
//               Build it smarter
//             </span>

//             <h1 className="font-marcellus font-light tracking-tight text-white leading-tight
//               text-[30px] sm:text-[32px] md:text-[40px] lg:text-[56px]"
//             >
//               We craft{" "}
//               <span className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//                 digital solutions
//               </span>{" "}
//               that turn visitors into{" "}
//               <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//                 customers
//               </span>
//             </h1>

//             <p className="text-white/80 max-w-xl text-[14px] md:text-lg lg:text-[20px]">
//               We design performant, beautiful, and strategic software that
//               generates qualified leads and boosts your revenue.
//             </p>

//             <Link href="/portfolio">
//               <button className="inline-flex items-center gap-3 text-[14px] md:text-[16px]
//                 px-6 sm:px-12 lg:px-20 py-2 md:py-3 rounded-xl
//                 border border-purple-500 text-white
//                 bg-gradient-to-br from-purple-500/10 to-blue-500/5">
//                 View Our Work
//               </button>
//             </Link>
//           </div>

//           {/* RIGHT GLOBE */}
//           <div
//             ref={globeRef}
//             className="relative flex justify-center lg:ml-28 items-center mt-14 lg:mt-0"
//           >
//             <div className="absolute w-[300px] h-[300px] blur-[140px] bg-purple-500/40 rounded-full" />

//             <Image
//               src="https://res.cloudinary.com/dj7xotphr/image/upload/v1770103192/Hero_Support_1_jbwdig.webp"
//               alt="Digital Globe"
//               width={366}
//               height={353}
//               priority
//               className="relative z-10 w-[180px] sm:w-[260px] md:w-[320px] lg:w-[366px]"
//             />
//           </div>
//         </div>
//       </div>

  



//     </section>
//   )
// }



// "use client"

// import { useEffect, useRef } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// export default function Hero() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const heroMoveRef = useRef<HTMLDivElement>(null)
//   const globeRef = useRef<HTMLDivElement>(null)
//   const overlayRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=300%",
//           scrub: true,
//           pin: true,
//         },
//       })

//       /* ===============================
//          PART 1 — CAMERA PUSH
//       =============================== */
//       tl.to(heroMoveRef.current, {
//         scale: 1.6,
//         x: "-25vw",
//         transformOrigin: "center center",
//         ease: "none",
//         duration: 1,
//       })

//       /* ===============================
//          PART 2 — GLOBE SCALE
//       =============================== */
//       tl.to(
//         globeRef.current,
//         {
//           scale: 1.15,
//           ease: "power2.out",
//           duration: 1,
//         },
//         0.4
//       )

//       /* ===============================
//          PART 3 — SATSON TEXT REVEAL
//       =============================== */
//       tl.fromTo(
//         overlayRef.current,
//         {
//           scale: 1.6,
//           opacity: 0,
//         },
//         {
//           scale: 1,
//           opacity: 1,
//           ease: "power3.out",
//           duration: 1,
//         },
//         0.8
//       )
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full min-h-screen overflow-hidden bg-black"
//       style={{ perspective: "2400px" }}
//     >
//       {/* BACKGROUND */}
//       <div
//         className="absolute inset-0 opacity-20 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/assets/hero/Hero Backgound.jpg')",
//         }}
//       />

//       {/* MOVING HERO WRAPPER */}
//       <div ref={heroMoveRef}>
//         <div className="relative z-10 min-h-screen max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:grid lg:grid-cols-2 lg:items-center">
//           {/* LEFT CONTENT */}
//           <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-32 lg:pt-0 space-y-7">
//             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm text-blue-400 border border-blue-500/30 bg-blue-500/10 backdrop-blur">
//               Build it smarter
//             </span>

//             <h1 className="font-marcellus font-light tracking-tight text-white leading-tight
//               text-[30px] sm:text-[32px] md:text-[40px] lg:text-[56px]"
//             >
//               We craft{" "}
//               <span className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//                 digital solutions
//               </span>{" "}
//               that turn visitors into{" "}
//               <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//                 customers
//               </span>
//             </h1>

//             <p className="text-white/80 max-w-xl text-[14px] md:text-lg lg:text-[20px]">
//               We design performant, beautiful, and strategic software that
//               generates qualified leads and boosts your revenue.
//             </p>

//             <Link href="/portfolio">
//               <button className="inline-flex items-center gap-3 text-[14px] md:text-[16px]
//                 px-6 sm:px-12 lg:px-20 py-2 md:py-3 rounded-xl
//                 border border-purple-500 text-white
//                 bg-gradient-to-br from-purple-500/10 to-blue-500/5">
//                 View Our Work
//               </button>
//             </Link>
//           </div>

//           {/* RIGHT GLOBE */}
//           <div
//             ref={globeRef}
//             className="relative flex justify-center lg:ml-28 items-center mt-14 lg:mt-0"
//           >
//             <div className="absolute w-[300px] h-[300px] blur-[140px] bg-purple-500/40 rounded-full" />

//             <Image
//               src="https://res.cloudinary.com/dj7xotphr/image/upload/v1770103192/Hero_Support_1_jbwdig.webp"
//               alt="Digital Globe"
//               width={366}
//               height={353}
//               priority
//               className="relative z-10 w-[180px] sm:w-[260px] md:w-[320px] lg:w-[366px]"
//             />
//           </div>
//         </div>
//       </div>

//       {/* SATSON OVERLAY TEXT */}
//       <div
//         ref={overlayRef}
//         className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
//       >
//         <h1
//           className="
//             font-marcellus
//             text-black
//             text-[22vw]
//             leading-none
//             tracking-tight
//             select-none
//             mix-blend-mode-screen
//           "
//         >
//           SATSON
//         </h1>
//       </div>
//     </section>
//   )
// }

// "use client"

// import { useEffect, useRef } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// export default function Hero() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const heroMoveRef = useRef<HTMLDivElement>(null)
//   const globeRef = useRef<HTMLDivElement>(null)
//   const overlayRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=300%",
//           scrub: true,
//           pin: true,
//         },
//       })

//       /* ===============================
//          CAMERA PUSH (WHOLE HERO)
//       =============================== */
//       tl.to(heroMoveRef.current, {
//         scale: 1.6,
//         x: "-25vw",
//         transformOrigin: "center center",
//         ease: "none",
//         duration: 1,
//       })

//       /* ===============================
//          GLOBE + SATSON (PARALLEL)
//       =============================== */
//       tl.to(
//         globeRef.current,
//         {
//           scale: 1.15,
//           ease: "power2.out",
//           duration: 1,
//         },
//         0 // 👈 starts WITH scroll
//       )

//       tl.fromTo(
//         overlayRef.current,
//         {
//           scale: 1.6,
//           opacity: 0,
//         },
//         {
//           scale: 1,
//           opacity: 1,
//           ease: "power3.out",
//           duration: 1,
//         },
//         0 // 👈 SAME START TIME AS GLOBE
//       )
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full min-h-screen overflow-hidden bg-black"
//       style={{ perspective: "2400px" }}
//     >
//       {/* BACKGROUND IMAGE */}
//       <div
//         className="absolute inset-0 opacity-20 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/assets/hero/Hero Backgound.jpg')",
//         }}
//       /> 

//       {/* MOVING HERO WRAPPER */}
//       <div ref={heroMoveRef}>
//         <div className="relative z-10 min-h-screen max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:grid lg:grid-cols-2 lg:items-center">
//           {/* LEFT CONTENT */}
//           <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-32 lg:pt-0 space-y-7">
//             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm text-blue-400 border border-blue-500/30 bg-blue-500/10 backdrop-blur">
//               Build it smarter
//             </span>

//             <h1 className="font-marcellus font-light tracking-tight text-white leading-tight
//               text-[30px] sm:text-[32px] md:text-[40px] lg:text-[56px]"
//             >
//               We craft{" "}
//               <span className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//                 digital solutions
//               </span>{" "}
//               that turn visitors into{" "}
//               <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//                 customers
//               </span>
//             </h1>

//             <p className="text-white/80 max-w-xl text-[14px] md:text-lg lg:text-[20px]">
//               We design performant, beautiful, and strategic software that
//               generates qualified leads and boosts your revenue.
//             </p>

//             <Link href="/portfolio">
//               <button className="inline-flex items-center gap-3 text-[14px] md:text-[16px]
//                 px-6 sm:px-12 lg:px-20 py-2 md:py-3 rounded-xl
//                 border border-purple-500 text-white
//                 bg-gradient-to-br from-purple-500/10 to-blue-500/5">
//                 View Our Work
//               </button>
//             </Link>
//           </div>

//           {/* RIGHT GLOBE */}
//           <div
//             ref={globeRef}
//             className="relative flex justify-center lg:ml-28 items-center mt-14 lg:mt-0"
//           >
//             <div className="absolute w-[300px] h-[300px] blur-[140px] bg-purple-500/40 rounded-full" />

//             <Image
//               src="https://res.cloudinary.com/dj7xotphr/image/upload/v1770103192/Hero_Support_1_jbwdig.webp"
//               alt="Digital Globe"
//               width={366}
//               height={353}
//               priority
//               className="relative z-10 w-[180px] sm:w-[260px] md:w-[320px] lg:w-[366px]"
//             />
//           </div>
//         </div>
//       </div>

//       {/* SATSON FULL OVERLAY SECTION */}
//       <div
//         ref={overlayRef}
//         className="pointer-events-none absolute inset-0 z-20 h-full w-full flex items-center justify-center"
//       >
//         <h1
//           className="
//             font-marcellus
//             text-white
//             text-[22vw]
//             leading-none
//             tracking-tight
//             select-none
//             mix-blend-mode-screen
//           "
//         >
//           SATSON
//         </h1>
//       </div>

      
//     </section>
//   )
// }



// "use client"

// import { useEffect, useRef } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// export default function Hero() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const heroMoveRef = useRef<HTMLDivElement>(null)
//   const globeRef = useRef<HTMLDivElement>(null)
//   const overlayRef = useRef<HTMLDivElement>(null)
//   const contentRef = useRef<HTMLDivElement>(null)
//   const satsonTextRef = useRef<HTMLHeadingElement>(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=300%",
//           scrub: true,
//           pin: true,
//         },
//       })

//       /* ===============================
//          CAMERA PUSH (WHOLE HERO)
//       =============================== */
//       tl.to(heroMoveRef.current, {
//         scale: 1.6,
//         x: "-25vw",
//         transformOrigin: "center center",
//         ease: "none",
//         duration: 1,
//       })

//       /* ===============================
//          GLOBE SCALE (STAYS VISIBLE)
//       =============================== */
//       tl.to(
//         globeRef.current,
//         {
//           scale: 1.15,
//           ease: "power2.out",
//           duration: 1,
//         },
//         0
//       )

//       /* ===============================
//          CONTENT FADES OUT
//       =============================== */
//       tl.to(
//         contentRef.current,
//         {
//           opacity: 0,
//           y: -60,
//           ease: "power2.out",
//           duration: 1,
//         },
//         0.2
//       )

//       /* ===============================
//          SATSON OVERLAY APPEAR
//       =============================== */
//       tl.fromTo(
//         overlayRef.current,
//         {
//           scale: 1.6,
//           opacity: 0,
//         },
//         {
//           scale: 1,
//           opacity: 1,
//           ease: "power3.out",
//           duration: 1,
//         },
//         0
//       )

//       /* ===============================
//          SATSON TEXT SHRINK
//       =============================== */
//       tl.to(
//         satsonTextRef.current,
//         {
//           scale: 0.65,
//           ease: "power3.out",
//           duration: 1,
//         },
//         0.3
//       )
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full min-h-screen overflow-hidden bg-black"
//       style={{ perspective: "2400px" }}
//     >
//       {/* BACKGROUND IMAGE */}
//       <div
//         className="absolute inset-0 opacity-20 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/assets/hero/Hero Backgound.jpg')",
//         }}
//       />

//       {/* MOVING HERO WRAPPER */}
//       <div ref={heroMoveRef}>
//         <div className="relative z-10 min-h-screen max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:grid lg:grid-cols-2 lg:items-center">
          
//           {/* LEFT CONTENT */}
//           <div
//             ref={contentRef}
//             className="flex flex-col items-center lg:items-start text-center lg:text-left pt-32 lg:pt-0 space-y-7"
//           >
//             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm text-blue-400 border border-blue-500/30 bg-blue-500/10 backdrop-blur">
//               Build it smarter
//             </span>

//             <h1 className="font-marcellus font-light tracking-tight text-white leading-tight
//               text-[30px] sm:text-[32px] md:text-[40px] lg:text-[56px]"
//             >
//               We craft{" "}
//               <span className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//                 digital solutions
//               </span>{" "}
//               that turn visitors into{" "}
//               <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//                 customers
//               </span>
//             </h1>

//             <p className="text-white/80 max-w-xl text-[14px] md:text-lg lg:text-[20px]">
//               We design performant, beautiful, and strategic software that
//               generates qualified leads and boosts your revenue.
//             </p>

//             <Link href="/portfolio">
//               <button className="inline-flex items-center gap-3 text-[14px] md:text-[16px]
//                 px-6 sm:px-12 lg:px-20 py-2 md:py-3 rounded-xl
//                 border border-purple-500 text-white
//                 bg-gradient-to-br from-purple-500/10 to-blue-500/5">
//                 View Our Work
//               </button>
//             </Link>
//           </div>

//           {/* RIGHT GLOBE */}
//           <div
//             ref={globeRef}
//             className="relative flex justify-center lg:ml-28 items-center mt-14 lg:mt-0"
//           >
//             <div className="absolute w-[300px] h-[300px] blur-[140px] bg-purple-500/40 rounded-full" />

//             <Image
//               src="https://res.cloudinary.com/dj7xotphr/image/upload/v1770103192/Hero_Support_1_jbwdig.webp"
//               alt="Digital Globe"
//               width={366}
//               height={353}
//               priority
//               className="relative z-10 w-[180px] sm:w-[260px] md:w-[320px] lg:w-[366px]"
//             />
//           </div>
//         </div>
//       </div>

//       {/* SATSON FULL OVERLAY */}
//       <div
//         ref={overlayRef}
//         className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
//       >
//         <h1
//           ref={satsonTextRef}
//           className="
//             font-marcellus
//             text-white
//             text-[22vw]
//             leading-none
//             tracking-tight
//             select-none
//             mix-blend-mode-screen
//           "
//         >
//           SATSON
//         </h1>
//       </div>
//     </section>
//   )
// }





// "use client"

// import { useEffect, useRef } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// export default function Hero() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const heroMoveRef = useRef<HTMLDivElement>(null)
//   const globeRef = useRef<HTMLDivElement>(null)
//   const overlayRef = useRef<HTMLDivElement>(null)
//   const contentRef = useRef<HTMLDivElement>(null)
//   const satsonTextRef = useRef<HTMLHeadingElement>(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=300%",
//           scrub: true,
//           pin: true,
//         },
//       })

//       /* ===============================
//          CAMERA PUSH (WHOLE HERO)
//       =============================== */
//       tl.to(heroMoveRef.current, {
//         scale: 1.6,
//         x: "-35vw",
//         transformOrigin: "center center",
//         ease: "none",
//         duration: 1,
//       })

//       /* ===============================
//          GLOBE SCALE (STAYS VISIBLE)
//       =============================== */
//       tl.to(
//         globeRef.current,
//         {
//           scale: 1.15,
//           ease: "power2.out",
//           duration: 1,
//         },
//         0
//       )

//       /* ===============================
//          CONTENT FADES OUT
//       =============================== */
//       tl.to(
//         contentRef.current,
//         {
//           opacity: 0,
       
//           y: -60,
//           ease: "power2.out",
//           duration: 1,
//         },
//         0.2
//       )

//       /* ===============================
//          SATSON OVERLAY APPEAR
//       =============================== */
//       tl.fromTo(
//         overlayRef.current,
//         {
//           scale: 2.8,
//           opacity: 0,
//         },
//         {
//           scale: 0.60,
//           opacity: 1,
//           ease: "power3.out",
//           duration: 1,
//         },
//         0
//       )

//       /* ===============================
//          SATSON TEXT SHRINK
//       =============================== */
//       tl.to(
//         satsonTextRef.current,
//         {
//           scale: 0.65,
//           ease: "power3.out",
//           duration: 1,
//         },
//         0.3
//       )
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full min-h-screen overflow-hidden bg-black"
//       style={{ perspective: "2400px" }}
//     >
//       {/* BACKGROUND IMAGE */}
//       <div
//         className="absolute inset-0 opacity-20 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/assets/hero/Hero Backgound.jpg')",
//         }}
//       />

//       {/* MOVING HERO WRAPPER */}
//       <div ref={heroMoveRef}>
//         <div className="relative z-10 min-h-screen max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:grid lg:grid-cols-2 lg:items-center">
          
//           {/* LEFT CONTENT */}
//           <div
//             ref={contentRef}
//             className="flex flex-col items-center lg:items-start text-center lg:text-left pt-32 lg:pt-0 space-y-7"
//           >
//             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm text-blue-400 border border-blue-500/30 bg-blue-500/10 backdrop-blur">
//               Build it smarter
//             </span>

//             <h1 className="font-marcellus font-light tracking-tight text-white leading-tight
//               text-[30px] sm:text-[32px] md:text-[40px] lg:text-[56px]"
//             >
//               We craft{" "}
//               <span className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//                 digital solutions
//               </span>{" "}
//               that turn visitors into{" "}
//               <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//                 customers
//               </span>
//             </h1>

//             <p className="text-white/80 max-w-xl text-[14px] md:text-lg lg:text-[20px]">
//               We design performant, beautiful, and strategic software that
//               generates qualified leads and boosts your revenue.
//             </p>

//             <Link href="/portfolio">
//               <button className="inline-flex items-center gap-3 text-[14px] md:text-[16px]
//                 px-6 sm:px-12 lg:px-20 py-2 md:py-3 rounded-xl
//                 border border-purple-500 text-white
//                 bg-gradient-to-br from-purple-500/10 to-blue-500/5">
//                 View Our Work
//               </button>
//             </Link>
//           </div>

//           {/* RIGHT GLOBE */}
//           <div
//             ref={globeRef}
//             className="relative flex justify-center lg:ml-28 items-center mt-14 lg:mt-0"
//           >
//             <div className="absolute w-[300px] h-[300px] blur-[140px] bg-purple-500/40 rounded-full" />

//             <Image
//               src="https://res.cloudinary.com/dj7xotphr/image/upload/v1770103192/Hero_Support_1_jbwdig.webp"
//               alt="Digital Globe"
//               width={366}
//               height={353}
//               priority
//               className="relative z-10 w-[180px] sm:w-[260px] md:w-[320px] lg:w-[366px]"
//             />
//           </div>
//         </div>
//       </div>

//       {/* SATSON FULL OVERLAY */}
//       <div
//         ref={overlayRef}
//         className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
//       >
// <div className="relative flex items-center justify-center">
        
//         <h1
//           ref={satsonTextRef}
//           className="
//             font-marcellus
//             text-[22vw]
//             leading-none
//             tracking-tight
//             select-none
//             mix-blend-mode-screen
//           "
//         >
//           SATSON
//         </h1>

//         </div>


        
//       </div>
//     </section>
//   )
// }





// Animation 1

// "use client"

// import { useEffect, useRef } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// export default function Hero() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const heroMoveRef = useRef<HTMLDivElement>(null)
//   const globeRef = useRef<HTMLDivElement>(null)
//   const globeGlowRef = useRef<HTMLDivElement>(null)
//   const overlayRef = useRef<HTMLDivElement>(null)
//   const contentRef = useRef<HTMLDivElement>(null)
//   const satsonTextRef = useRef<HTMLHeadingElement>(null)
//   const bgRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=400%", // Increased for smoother travel
//           scrub: 1.5,    // Added weight to the scroll
//           pin: true,
//           anticipatePin: 1,
//         },
//       })

//       // 1. BACKGROUND PARALLAX (Slightly zooms out while content zooms in)
//       tl.to(bgRef.current, {
//         scale: 1.2,
//         opacity: 0.4,
//         ease: "none",
//       }, 0)

//       // 2. MAIN HERO PUSH
//       tl.to(heroMoveRef.current, {
//         scale: 2,
//         x: "-40vw",
//         z: 500, // 3D push
//         transformOrigin: "center center",
//         ease: "power2.inOut",
//       }, 0)

//       // 3. GLOBE PREMIUM MOTION
//       // We move the globe slightly opposite to the main container for depth
//       tl.to(globeRef.current, {
//         x: "15vw",
//         y: "-10vh",
//         scale: 1.3,
//         rotationZ: 15,
//         ease: "power2.inOut",
//       }, 0)

//       // 4. ANIMATED GLOW (The "Premium" touch)
//       tl.to(globeGlowRef.current, {
//         scale: 2,
//         opacity: 0.8,
//         filter: "blur(180px)",
//         background: "radial-gradient(circle, rgba(196,125,232,0.6) 0%, rgba(85,147,247,0.3) 100%)",
//       }, 0)

//       // 5. CONTENT FADE & STAGGER
//       tl.to(contentRef.current, {
//         opacity: 0,
//         x: -100,
//         filter: "blur(10px)",
//         ease: "power2.in",
//       }, 0)

//       // 6. SATSON TEXT REVEAL (The "Grand Entry")
//       tl.fromTo(satsonTextRef.current, 
//         { 
//           y: 200, 
//           opacity: 0, 
//           letterSpacing: "2vw",
//           filter: "blur(20px)" 
//         },
//         { 
//           y: 0, 
//           opacity: 1, 
//           letterSpacing: "-0.5vw",
//           filter: "blur(0px)",
//           ease: "expo.out",
//           duration: 2 
//         }, 
//         0.4
//       )

//       // 7. FINAL OVERLAY SCALE DOWN
//       tl.to(overlayRef.current, {
//         scale: 0.8,
//         ease: "none",
//       }, 0.8)

//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full min-h-screen overflow-hidden bg-black"
//       style={{ perspective: "1500px" }} // Required for the 3D 'z' effect
//     >
//       {/* BACKGROUND IMAGE - Separate ref for parallax */}
//       <div
//         ref={bgRef}
//         className="absolute inset-0 opacity-20 bg-cover bg-center transition-opacity"
//         style={{
//           backgroundImage: "url('/assets/hero/Hero Backgound.jpg')",
//           willChange: "transform",
//         }}
//       />

//       {/* MOVING HERO WRAPPER */}
//       <div ref={heroMoveRef} className="relative z-10 w-full">
//         <div className="relative min-h-screen max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:grid lg:grid-cols-2 lg:items-center">
          
//           {/* LEFT CONTENT */}
//           <div
//             ref={contentRef}
//             className="flex flex-col items-center lg:items-start text-center lg:text-left pt-32 lg:pt-0 space-y-7"
//           >
//             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm text-blue-400 border border-blue-500/30 bg-blue-500/10 backdrop-blur">
//               Build it smarter
//             </span>

//             <h1 className="font-marcellus font-light tracking-tight text-white leading-tight text-[30px] sm:text-[32px] md:text-[40px] lg:text-[56px]">
//               We craft{" "}
//               <span className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//                 digital solutions
//               </span>{" "}
//               that turn visitors into{" "}
//               <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//                 customers
//               </span>
//             </h1>

//             <p className="text-white/80 max-w-xl text-[14px] md:text-lg lg:text-[20px]">
//               We design performant, beautiful, and strategic software that
//               generates qualified leads and boosts your revenue.
//             </p>

//             <Link href="/portfolio">
//               <button className="inline-flex items-center gap-3 text-[14px] md:text-[16px] px-6 sm:px-12 lg:px-20 py-2 md:py-3 rounded-xl border border-purple-500 text-white bg-gradient-to-br from-purple-500/10 to-blue-500/5 hover:bg-purple-500/20 transition-all">
//                 View Our Work
//               </button>
//             </Link>
//           </div>

//           {/* RIGHT GLOBE */}
//           <div
//             ref={globeRef}
//             className="relative flex justify-center lg:ml-28 items-center mt-14 lg:mt-0"
//           >
//             {/* Dynamic Glow Ref */}
//             <div ref={globeGlowRef} className="absolute w-[300px] h-[300px] blur-[140px] bg-purple-500/40 rounded-full" />

//             <Image
//               src="https://res.cloudinary.com/dj7xotphr/image/upload/v1770103192/Hero_Support_1_jbwdig.webp"
//               alt="Digital Globe"
//               width={366}
//               height={353}
//               priority
//               className="relative z-10 w-[180px] sm:w-[260px] md:w-[320px] lg:w-[366px] drop-shadow-[0_0_50px_rgba(168,85,247,0.4)]"
//             />
//           </div>
//         </div>
//       </div>

//       {/* SATSON FULL OVERLAY */}
//       <div
//         ref={overlayRef}
//         className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
//       >
//         <div className="relative overflow-hidden">
//           <h1
//             ref={satsonTextRef}
//             className="font-marcellus text-[22vw] leading-none tracking-tight select-none mix-blend-screen text-white/90"
//             style={{ willChange: "transform, opacity, filter" }}
//           >
//             SATSON
//           </h1>
//         </div>
//       </div>
//     </section>
//   )
// }








// "use client"

// import { useEffect, useRef } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { SplitText } from "gsap/SplitText"

// gsap.registerPlugin(ScrollTrigger, SplitText)

// export default function Hero() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const heroMoveRef = useRef<HTMLDivElement>(null)
//   const globeRef = useRef<HTMLDivElement>(null)
//   const overlayRef = useRef<HTMLDivElement>(null)
//   const contentRef = useRef<HTMLDivElement>(null)
//   const satsonTextRef = useRef<HTMLHeadingElement>(null)
//   const backgroundRef = useRef<HTMLDivElement>(null)
//   const gradientOrbsRef = useRef<HTMLDivElement[]>([])
//   const floatingElementsRef = useRef<HTMLDivElement[]>([])
//   const timelineRef = useRef<gsap.core.Timeline | null>(null)
//   const splitTextRef = useRef<SplitText | null>(null)
  
//   // Store refs for gradient text spans
//   const gradientText1Ref = useRef<HTMLSpanElement>(null)
//   const gradientText2Ref = useRef<HTMLSpanElement>(null)

//   // Store refs for floating elements
//   const addToFloatingElements = (el: HTMLDivElement | null) => {
//     if (el) floatingElementsRef.current.push(el)
//   }

//   // Store refs for gradient orbs
//   const addToGradientOrbs = (el: HTMLDivElement | null) => {
//     if (el) gradientOrbsRef.current.push(el)
//   }

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Set initial states for all animated elements
//       gsap.set(contentRef.current, {
//         opacity: 1,
//         y: 0,
//         rotationX: 0,
//         filter: "blur(0px)"
//       })
      
//       gsap.set(heroMoveRef.current, {
//         scale: 1,
//         x: 0,
//         y: 0,
//         rotationY: 0,
//         filter: "blur(0px)"
//       })
      
//       gsap.set(globeRef.current, {
//         scale: 1,
//         rotation: 0,
//         x: 0,
//         y: 0,
//         filter: "blur(0px) brightness(1)"
//       })
      
//       gsap.set(overlayRef.current, {
//         scale: 3,
//         opacity: 0,
//         filter: "blur(20px)",
//         rotationX: 90
//       })
      
//       gsap.set(satsonTextRef.current, {
//         scale: 0.8,
//         opacity: 0,
//         filter: "brightness(10) contrast(2)"
//       })

//       // Animate gradient text separately on initial load
//       if (gradientText1Ref.current && gradientText2Ref.current) {
//         gsap.from([gradientText1Ref.current, gradientText2Ref.current], {
//           opacity: 0,
//           y: 20,
//           scale: 0.8,
//           duration: 1.2,
//           ease: "back.out(1.7)",
//           stagger: 0.2,
//           delay: 0.3
//         })
//       }

//       // Animate text characters with SplitText on initial load only
//       const headline = contentRef.current?.querySelector("h1")
//       if (headline) {
//         splitTextRef.current = new SplitText(headline, { type: "words" })
//         gsap.from(splitTextRef.current.words, {
//           opacity: 0,
//           y: 30,
//           stagger: 0.1,
//           duration: 1,
//           ease: "power3.out",
//           delay: 0.2
//         })
//       }

//       // Parallax background (reversible)
//       gsap.to(backgroundRef.current, {
//         yPercent: 30,
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//         }
//       })

//       // Floating elements animation (independent continuous animation)
//       floatingElementsRef.current.forEach((el, i) => {
//         gsap.to(el, {
//           y: i % 2 === 0 ? -20 : 20,
//           rotation: i % 2 === 0 ? 5 : -5,
//           duration: 3 + i * 0.5,
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut"
//         })
//       })

//       // Gradient orbs animation (independent continuous animation)
//       gradientOrbsRef.current.forEach((orb, i) => {
//         gsap.to(orb, {
//           x: i % 2 === 0 ? 50 : -50,
//           y: i % 3 === 0 ? 30 : -30,
//           duration: 4 + i,
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut",
//           delay: i * 0.3
//         })
//       })

//       // Main scroll timeline with full reversibility
//       const mainTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=400%",
//           scrub: 1.5,
//           pin: true,
//           anticipatePin: 1,
//           onUpdate: (self) => {
//             // Dynamic blur based on scroll progress (will auto-reverse)
//             const blurAmount = gsap.utils.interpolate(0, 20, self.progress)
//             gsap.set(heroMoveRef.current, {
//               filter: `blur(${blurAmount}px)`
//             })
//           }
//         }
//       })

//       // Store timeline reference for cleanup
//       timelineRef.current = mainTl

//       /* ===============================
//          SECTION 1: CAMERA PUSH & CONTENT FADE OUT
//       =============================== */
      
//       // Enhanced camera push with parallax layers
//       mainTl.to(heroMoveRef.current, {
//         scale: 1.8,
//         x: "-40vw",
//         y: "10vh",
//         rotationY: 5,
//         transformOrigin: "center center",
//         ease: "power3.inOut",
//         duration: 2
//       }, 0)

//       // Globe animation with multiple effects
//       mainTl.to(globeRef.current, {
//         scale: 1.25,
//         rotation: 360,
//         duration: 2,
//         ease: "power2.out"
//       }, 0)

//       // Content fade with 3D effect
//       mainTl.to(contentRef.current, {
//         opacity: 0,
//         y: -100,
//         rotationX: -20,
//         filter: "blur(10px)",
//         ease: "power3.in",
//         duration: 1.5
//       }, 0.5)

//       /* ===============================
//          SECTION 2: SATSON REVEAL
//       =============================== */
      
//       // Satson overlay reveal
//       mainTl.to(overlayRef.current, {
//         scale: 0.7,
//         opacity: 1,
//         filter: "blur(0px)",
//         rotationX: 0,
//         duration: 2,
//         ease: "back.out(1.7)"
//       }, 0.3)

//       // Satson text animation
//       mainTl.to(satsonTextRef.current, {
//         scale: 0.65,
//         opacity: 1,
//         filter: "brightness(1) contrast(1)",
//         duration: 1.5,
//         ease: "elastic.out(1, 0.5)"
//       }, 0.8)

//       /* ===============================
//          SECTION 3: FINAL ADJUSTMENTS
//       =============================== */
      
//       // Additional globe movement
//       mainTl.to(globeRef.current, {
//         x: "100px",
//         y: "-50px",
//         duration: 1,
//         ease: "sine.inOut"
//       }, 1.2)

//       // Morph blur effect on globe
//       mainTl.to(globeRef.current, {
//         filter: "blur(15px) brightness(1.5)",
//         duration: 0.8,
//         ease: "power2.in"
//       }, 1.5)

//       // Final overlay glow effect
//       mainTl.to(overlayRef.current, {
//         filter: "brightness(2) contrast(1.2)",
//         duration: 0.5,
//         ease: "power2.out"
//       }, 2)

//     }, sectionRef)

//     return () => {
//       ctx.revert()
//       timelineRef.current?.kill()
//       splitTextRef.current?.revert()
//     }
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full min-h-screen overflow-hidden bg-black"
//       style={{ perspective: "2400px" }}
//     >
//       {/* Animated Gradient Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div
//           ref={backgroundRef}
//           className="absolute inset-0 opacity-20 bg-cover bg-center"
//           style={{
//             backgroundImage: "url('/assets/hero/Hero Backgound.jpg')",
//           }}
//         />
        
//         {/* Animated gradient orbs */}
//         <div
//           ref={addToGradientOrbs}
//           className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full 
//             bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-[120px]"
//         />
//         <div
//           ref={addToGradientOrbs}
//           className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full 
//             bg-gradient-to-l from-pink-500/5 to-cyan-500/10 blur-[100px]"
//         />
//       </div>

//       {/* Floating decorative elements */}
//       <div
//         ref={addToFloatingElements}
//         className="absolute top-20 left-10 w-4 h-4 rounded-full bg-blue-500/30 blur-sm"
//       />
//       <div
//         ref={addToFloatingElements}
//         className="absolute bottom-40 right-20 w-6 h-6 rounded-full bg-purple-500/40 blur-sm"
//       />
//       <div
//         ref={addToFloatingElements}
//         className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500/30 blur-sm"
//       />

//       {/* MOVING HERO WRAPPER */}
//       <div ref={heroMoveRef}>
//         <div className="relative z-10 min-h-screen max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:grid lg:grid-cols-2 lg:items-center">
          
//           {/* LEFT CONTENT */}
//           <div
//             ref={contentRef}
//             className="flex flex-col items-center lg:items-start text-center lg:text-left pt-32 lg:pt-0 space-y-7 relative z-30"
//           >
//             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm text-blue-400 border border-blue-500/30 bg-blue-500/10 backdrop-blur relative z-30">
//               <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
//               Build it smarter
//             </span>

//             <h1 className="font-marcellus font-light tracking-tight text-white leading-tight
//               text-[30px] sm:text-[32px] md:text-[40px] lg:text-[56px] relative z-30">
//               We craft{" "}
//              <span 
//   ref={gradientText1Ref}
//   className="gradient-text-purple-blue"
// >
//   digital solutions
// </span>{" "}
// that turn visitors into{" "}
// <span 
//   ref={gradientText2Ref}
//   className="gradient-text-blue-purple"
// >
//   customers
// </span>
//             </h1>

//             <p className="text-white/80 max-w-xl text-[14px] md:text-lg lg:text-[20px] relative z-30">
//               We design performant, beautiful, and strategic software that
//               generates qualified leads and boosts your revenue.
//             </p>

//             <Link href="/portfolio">
//               <button className="group relative inline-flex items-center gap-3 text-[14px] md:text-[16px]
//                 px-6 sm:px-12 lg:px-20 py-2 md:py-3 rounded-xl overflow-hidden
//                 border border-purple-500/50 text-white
//                 bg-gradient-to-br from-purple-500/10 to-blue-500/5
//                 hover:from-purple-500/20 hover:to-blue-500/10 transition-all duration-300 relative z-30">
//                 <span className="relative z-10">View Our Work</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
//                   translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
//               </button>
//             </Link>
//           </div>

//           {/* RIGHT GLOBE */}
//           <div
//             ref={globeRef}
//             className="relative flex justify-center lg:ml-28 items-center mt-14 lg:mt-0"
//           >
//             {/* Animated glow rings */}
//             <div className="absolute w-[400px] h-[400px] border border-purple-500/20 rounded-full animate-spin-slow" />
//             <div className="absolute w-[350px] h-[350px] border border-blue-500/15 rounded-full animate-spin-slow reverse" />
            
//             <div className="absolute w-[300px] h-[300px] blur-[140px] bg-purple-500/40 rounded-full" />

//             <Image
//               src="https://res.cloudinary.com/dj7xotphr/image/upload/v1770103192/Hero_Support_1_jbwdig.webp"
//               alt="Digital Globe"
//               width={366}
//               height={353}
//               priority
//               className="relative z-10 w-[180px] sm:w-[260px] md:w-[320px] lg:w-[366px] 
//                 drop-shadow-[0_0_40px_rgba(135,100,255,0.3)]"
//             />

//             {/* Floating particles around globe */}
//             {[...Array(6)].map((_, i) => (
//               <div
//                 key={i}
//                 ref={addToFloatingElements}
//                 className={`absolute w-1 h-1 rounded-full bg-white/50 
//                   ${i % 2 === 0 ? 'animate-pulse' : ''}`}
//                 style={{
//                   transform: `rotate(${i * 60}deg) translateX(180px)`,
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* SATSON FULL OVERLAY */}
//       <div
//         ref={overlayRef}
//         className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
//       >
//         <div className="relative flex items-center justify-center">
//           <h1
//             ref={satsonTextRef}
//             className="
//               font-marcellus
//               text-[22vw]
//               leading-none
//               tracking-tight
//               select-none
//               bg-gradient-to-r from-white via-blue-100 to-purple-100
//               bg-clip-text
//               text-transparent
//               opacity-90
//               drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]
//             "
//           >
//             SATSON
//           </h1>
          
//           {/* Text glow effect */}
//           <div className="absolute inset-0 blur-[60px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full" />
//         </div>
//       </div>
//     </section>
//   )
// }



// "use client"

// import { useEffect, useRef } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { SplitText } from "gsap/SplitText"

// gsap.registerPlugin(ScrollTrigger, SplitText)

// export default function Hero() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const heroMoveRef = useRef<HTMLDivElement>(null)
//   const globeRef = useRef<HTMLDivElement>(null)
//   const overlayRef = useRef<HTMLDivElement>(null)
//   const contentRef = useRef<HTMLDivElement>(null)
//   const satsonTextRef = useRef<HTMLHeadingElement>(null)
//   const backgroundRef = useRef<HTMLDivElement>(null)
//   const gradientOrbsRef = useRef<HTMLDivElement[]>([])
//   const floatingElementsRef = useRef<HTMLDivElement[]>([])
//   const timelineRef = useRef<gsap.core.Timeline | null>(null)
//   const splitTextRef = useRef<SplitText | null>(null)

//   // Store refs for floating elements
//   const addToFloatingElements = (el: HTMLDivElement | null) => {
//     if (el) floatingElementsRef.current.push(el)
//   }

//   // Store refs for gradient orbs
//   const addToGradientOrbs = (el: HTMLDivElement | null) => {
//     if (el) gradientOrbsRef.current.push(el)
//   }

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Initial entrance animations (only play once on load)
//       const entranceTl = gsap.timeline()
      
//       // Set initial states for all animated elements
//       gsap.set(contentRef.current, {
//         opacity: 1,
//         y: 0,
//         rotationX: 0,
//         filter: "blur(0px)"
//       })
      
//       gsap.set(heroMoveRef.current, {
//         scale: 1,
//         x: 0,
//         y: 0,
//         rotationY: 0,
//         filter: "blur(0px)"
//       })
      
//       gsap.set(globeRef.current, {
//         scale: 1,
//         rotation: 0,
//         x: 0,
//         y: 0,
//         filter: "blur(0px) brightness(1)"
//       })
      
//       gsap.set(overlayRef.current, {
//         scale: 2,
//         opacity: 0,
//         filter: "blur(20px)",
//         rotationX: 90
//       })
      
//       gsap.set(satsonTextRef.current, {
//         scale: 0.8,
//         opacity: 0,
//         filter: "brightness(10) contrast(2)"
//       })

     
     

//       // Parallax background (reversible)
//       gsap.to(backgroundRef.current, {
//         yPercent: 16,
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
       
//         }
//       })

//       // Floating elements animation (independent continuous animation)
//       floatingElementsRef.current.forEach((el, i) => {
//         gsap.to(el, {
//           y: i % 2 === 0 ? -20 : 20,
//           rotation: i % 2 === 0 ? 5 : -5,
//           duration: 3 + i * 0.5,
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut"
//         })
//       })

//       // Gradient orbs animation (independent continuous animation)
//       gradientOrbsRef.current.forEach((orb, i) => {
//         gsap.to(orb, {
//           x: i % 2 === 0 ? 50 : -50,
//           y: i % 3 === 0 ? 30 : -30,
//           duration: 4 + i,
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut",
//           delay: i * 0.3
//         })
//       })

//       // Main scroll timeline with full reversibility
//       const mainTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=100%",
//           scrub: 1.5,
//           pin: true,
//           anticipatePin: 1,
     
//           onUpdate: (self) => {
//             // Dynamic blur based on scroll progress (will auto-reverse)
//             const blurAmount = gsap.utils.interpolate(0, 20, self.progress)
//             gsap.set(heroMoveRef.current, {
//               filter: `blur(${blurAmount}px)`
//             })
//           }
//         }
//       })

//       // Store timeline reference for cleanup
//       timelineRef.current = mainTl

//       /* ===============================
//          SECTION 1: CAMERA PUSH & CONTENT FADE OUT
//       =============================== */
      
//       // Enhanced camera push with parallax layers
//       mainTl.to(heroMoveRef.current, {
//         scale: 1.8,
//         x: "-40vw",
//         y: "10vh",
//         rotationY: 5,
//         transformOrigin: "center center",
//         ease: "power3.inOut",
//         duration: 2
//       }, 0)

//       // Globe animation with multiple effects
//       mainTl.to(globeRef.current, {
//         scale: 1.25,
//         rotation: 360,
//         duration: 2,
//         ease: "power2.out"
//       }, 0)

//       // Content fade with 3D effect
//       mainTl.to(contentRef.current, {
//         opacity: 0,
//         y: -100,
//         rotationX: -20,
//         filter: "blur(10px)",
//         ease: "power3.in",
//         duration: 1.5
//       }, 0.5)

//       /* ===============================
//          SECTION 2: SATSON REVEAL
//       =============================== */
      
//       // Satson overlay reveal
//       mainTl.to(overlayRef.current, {
//         scale: 0.7,
//         opacity: 1,
//         filter: "blur(0px)",
//         rotationX: 0,
//         duration: 2,
//         ease: "back.out(1.7)"
//       }, 0.3)

//       // Satson text animation
//       mainTl.to(satsonTextRef.current, {
//         scale: 0.65,
//         opacity: 1,
//         filter: "brightness(1) contrast(1)",
//         duration: 1.5,
//         ease: "elastic.out(1, 0.5)"
//       }, 0.8)

//       /* ===============================
//          SECTION 3: FINAL ADJUSTMENTS
//       =============================== */
      
//       // Additional globe movement
//       mainTl.to(globeRef.current, {
//         x: "300px",
//         y: "-60px",
//         duration: 1,
//         ease: "sine.inOut"
//       }, 1.2)

//       // Morph blur effect on globe
//       mainTl.to(globeRef.current, {
//         filter: "blur(15px) brightness(1.5)",
//         duration: 0.8,
//         ease: "power2.in"
//       }, 1.5)

//       // Final overlay glow effect
//       mainTl.to(overlayRef.current, {
//         filter: "brightness(2) contrast(1.2)",
//         duration: 0.5,
//         ease: "power2.out"
//       }, 2)

//     }, sectionRef)

//     return () => {
//       ctx.revert()
//       timelineRef.current?.kill()
//       splitTextRef.current?.revert()
//     }
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full min-h-screen overflow-hidden bg-black"
//       style={{ perspective: "2400px" }}
//     >
//       {/* Animated Gradient Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div
//           ref={backgroundRef}
//           className="absolute inset-0 opacity-20 bg-cover bg-center"
//           style={{
//             backgroundImage: "url('/assets/hero/Hero Backgound.jpg')",
//           }}
//         />
        
//         {/* Animated gradient orbs */}
//         <div
//           ref={addToGradientOrbs}
//           className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full 
//             bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-[120px]"
//         />
//         <div
//           ref={addToGradientOrbs}
//           className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full 
//             bg-gradient-to-l from-pink-500/5 to-cyan-500/10 blur-[100px]"
//         />
//       </div>

//       {/* Floating decorative elements */}
//       <div
//         ref={addToFloatingElements}
//         className="absolute top-20 left-10 w-4 h-4 rounded-full bg-blue-500/30 blur-sm"
//       />
//       <div
//         ref={addToFloatingElements}
//         className="absolute bottom-40 right-20 w-6 h-6 rounded-full bg-purple-500/40 blur-sm"
//       />
//       <div
//         ref={addToFloatingElements}
//         className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500/30 blur-sm"
//       />

//       {/* MOVING HERO WRAPPER */}
//       <div ref={heroMoveRef}>
//         <div className="relative z-10 min-h-screen max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:grid lg:grid-cols-2 lg:items-center">
          
//           {/* LEFT CONTENT */}
//           <div
            
//             className="flex flex-col items-center lg:items-start text-center lg:text-left pt-32 lg:pt-0 space-y-7"
//           >
//             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm text-blue-400 border border-blue-500/30 bg-blue-500/10 backdrop-blur">
//               <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
//               Build it smarter
//             </span>

//             <h1 className="font-marcellus font-light tracking-tight text-white leading-tight
//               text-[30px] sm:text-[32px] md:text-[40px] lg:text-[56px]">
//               We craft{" "}
//               <span className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//                 digital solutions
//               </span>{" "}
//               that turn visitors into{" "}
//               <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//                 customers
//               </span>
//             </h1>

//             <p className="text-white/80 max-w-xl text-[14px] md:text-lg lg:text-[20px]">
//               We design performant, beautiful, and strategic software that
//               generates qualified leads and boosts your revenue.
//             </p>

//             <Link href="/portfolio">
//               <button className="group relative inline-flex items-center gap-3 text-[14px] md:text-[16px]
//                 px-6 sm:px-12 lg:px-20 py-2 md:py-3 rounded-xl overflow-hidden
//                 border border-purple-500/50 text-white
//                 bg-gradient-to-br from-purple-500/10 to-blue-500/5
//                 hover:from-purple-500/20 hover:to-blue-500/10 transition-all duration-300">
//                 <span className="relative z-10">View Our Work</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
//                   translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
//               </button>
//             </Link>
//           </div>

//           {/* RIGHT GLOBE */}
//           <div
//             ref={globeRef}
//             className="relative flex justify-center lg:ml-28 items-center mt-14 lg:mt-0"
//           >
//             {/* Animated glow rings */}
//             <div className="absolute w-[400px] h-[400px] border border-purple-500/20 rounded-full animate-spin-slow" />
//             <div className="absolute w-[350px] h-[350px] border border-blue-500/15 rounded-full animate-spin-slow reverse" />
            
//             <div className="absolute w-[300px] h-[300px] blur-[140px] bg-purple-500/40 rounded-full" />

//             <Image
//               src="https://res.cloudinary.com/dj7xotphr/image/upload/v1770103192/Hero_Support_1_jbwdig.webp"
//               alt="Digital Globe"
//               width={366}
//               height={353}
//               priority
//               className="relative z-10 w-[180px] sm:w-[260px] md:w-[320px] lg:w-[366px] 
//                 drop-shadow-[0_0_40px_rgba(135,100,255,0.3)]"
//             />

//             {/* Floating particles around globe */}
//             {[...Array(6)].map((_, i) => (
//               <div
//                 key={i}
//                 ref={addToFloatingElements}
//                 className={`absolute w-1 h-1 rounded-full bg-white/50 
//                   ${i % 2 === 0 ? 'animate-pulse' : ''}`}
//                 style={{
//                   transform: `rotate(${i * 60}deg) translateX(180px)`,
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* SATSON FULL OVERLAY */}
//       <div
//         ref={overlayRef}
//         className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
//       >
//         <div className="relative flex items-center justify-center">
//           <h1
//             ref={satsonTextRef}
//             className="
//               font-marcellus
//               text-[22vw]
//               leading-none
//               tracking-tight
//               select-none
//             bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent
//               opacity-90
//               drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]
//             "
//           >
//             SATSON
//           </h1>
          
//           {/* Text glow effect */}
//           <div className="absolute inset-0 blur-[60px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full" />
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"


export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const heroMoveRef = useRef<HTMLDivElement>(null)
  const globeRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const satsonTextRef = useRef<HTMLHeadingElement>(null)
  const satsonGlowRef = useRef<HTMLDivElement>(null) // For the glow effect
  const backgroundRef = useRef<HTMLDivElement>(null)
  const gradientOrbsRef = useRef<HTMLDivElement[]>([])
  const floatingElementsRef = useRef<HTMLDivElement[]>([])
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const splitTextRef = useRef<SplitText | null>(null)

  // Store refs for floating elements
  const addToFloatingElements = (el: HTMLDivElement | null) => {
    if (el) floatingElementsRef.current.push(el)
  }

  // Store refs for gradient orbs
  const addToGradientOrbs = (el: HTMLDivElement | null) => {
    if (el) gradientOrbsRef.current.push(el)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animations (only play once on load)
      const entranceTl = gsap.timeline()
      
      // Set initial states for all animated elements
      gsap.set(contentRef.current, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        filter: "blur(0px)"
      })
      
      gsap.set(heroMoveRef.current, {
        scale: 1,
        x: 0,
        y: 0,
        rotationY: 0,
        filter: "blur(0px)"
      })
      
      gsap.set(globeRef.current, {
        scale: 1,
        rotation: 0,
        x: 0,
        y: 0,
        filter: "blur(0px) brightness(1)"
      })
      
      gsap.set(overlayRef.current, {
        scale: 2,
        opacity: 0,
        filter: "blur(20px)",
        rotationX: 90
      })
      
      // KEY CHANGE: Keep the gradient text visible but with reduced opacity and scale
      gsap.set(satsonTextRef.current, {
        scale: 0.8,
        opacity: 0,
        // Remove brightness filter from the text itself
      })
      
      // KEY CHANGE: Apply the bright effect to a separate glow element
      gsap.set(satsonGlowRef.current, {
        opacity: 0,
        scale: 1.2,
        filter: "brightness(10) blur(40px)"
      })

      // Parallax background (reversible)
      gsap.to(backgroundRef.current, {
        yPercent: 16,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      })

      // Floating elements animation (independent continuous animation)
      floatingElementsRef.current.forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -20 : 20,
          rotation: i % 2 === 0 ? 5 : -5,
          duration: 3 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        })
      })

      // Gradient orbs animation (independent continuous animation)
      gradientOrbsRef.current.forEach((orb, i) => {
        gsap.to(orb, {
          x: i % 2 === 0 ? 50 : -50,
          y: i % 3 === 0 ? 30 : -30,
          duration: 4 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.3
        })
      })

      // Main scroll timeline with full reversibility
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Dynamic blur based on scroll progress (will auto-reverse)
            const blurAmount = gsap.utils.interpolate(0, 20, self.progress)
            gsap.set(heroMoveRef.current, {
              filter: `blur(${blurAmount}px)`
            })
          }
        }
      })

      // Store timeline reference for cleanup
      timelineRef.current = mainTl

      /* ===============================
         SECTION 1: CAMERA PUSH & CONTENT FADE OUT
      =============================== */
      
      // Enhanced camera push with parallax layers
      mainTl.to(heroMoveRef.current, {
        scale: 1.8,
        x: "-40vw",
        y: "10vh",
        rotationY: 5,
        transformOrigin: "center center",
        ease: "power3.inOut",
        duration: 2
      }, 0)

      // Globe animation with multiple effects
      mainTl.to(globeRef.current, {
        scale: 1.25,
        rotation: 360,
        duration: 2,
        ease: "power2.out"
      }, 0)

      // Content fade with 3D effect
      mainTl.to(contentRef.current, {
        opacity: 0,
        y: -100,
        rotationX: -20,
        filter: "blur(10px)",
        ease: "power3.in",
        duration: 1.5
      }, 0.5)

      /* ===============================
         SECTION 2: SATSON REVEAL
      =============================== */
      
      // Satson overlay reveal
      mainTl.to(overlayRef.current, {
        scale: 0.7,
        opacity: 1,
        filter: "blur(0px)",
        rotationX: 0,
        duration: 2,
        ease: "back.out(1.7)"
      }, 0.3)

      // Satson text animation - animate the gradient text directly
      mainTl.to(satsonTextRef.current, {
        scale: 0.65,
        opacity: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)"
      }, 0.8)

      // Animate the glow effect separately (not the text itself)
      mainTl.to(satsonGlowRef.current, {
        opacity: 1,
        scale: 1,
        filter: "brightness(1) blur(60px)",
        duration: 1.5,
        ease: "power2.out"
      }, 0.9)

      /* ===============================
         SECTION 3: FINAL ADJUSTMENTS
      =============================== */
      
      // Additional globe movement
      mainTl.to(globeRef.current, {
        x: "300px",
        y: "-60px",
        duration: 1,
        ease: "sine.inOut"
      }, 1.2)

      // Morph blur effect on globe
      mainTl.to(globeRef.current, {
        filter: "blur(15px) brightness(1.5)",
        duration: 0.8,
        ease: "power2.in"
      }, 1.5)

      // Final overlay glow effect
      mainTl.to(overlayRef.current, {
        filter: "brightness(2) contrast(1.2)",
        duration: 0.5,
        ease: "power2.out"
      }, 2)

    }, sectionRef)

    return () => {
      ctx.revert()
      timelineRef.current?.kill()
      splitTextRef.current?.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-black"
      style={{ perspective: "2400px" }}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={backgroundRef}
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/hero/Hero Backgound.jpg')",
          }}
        />
        
        {/* Animated gradient orbs */}
        <div
          ref={addToGradientOrbs}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full 
            bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-[120px]"
        />
        <div
          ref={addToGradientOrbs}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full 
            bg-gradient-to-l from-pink-500/5 to-cyan-500/10 blur-[100px]"
        />
      </div>

      {/* Floating decorative elements */}
      <div
        ref={addToFloatingElements}
        className="absolute top-20 left-10 w-4 h-4 rounded-full bg-blue-500/30 blur-sm"
      />
      <div
        ref={addToFloatingElements}
        className="absolute bottom-40 right-20 w-6 h-6 rounded-full bg-purple-500/40 blur-sm"
      />
      <div
        ref={addToFloatingElements}
        className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-cyan-500/30 blur-sm"
      />

      {/* MOVING HERO WRAPPER */}
      <div ref={heroMoveRef}>
        <div className="relative z-10 min-h-screen max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:grid lg:grid-cols-2 lg:items-center">
          
          {/* LEFT CONTENT */}
          <div
            ref={contentRef}
            className="flex flex-col items-center lg:items-start text-center lg:text-left pt-32 lg:pt-0 space-y-7"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm text-blue-400 border border-blue-500/30 bg-blue-500/10 backdrop-blur">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Build it smarter
            </span>

            <h1 className="font-marcellus font-light tracking-tight text-white leading-tight
              text-[30px] sm:text-[32px] md:text-[40px] lg:text-[56px]">
              We craft{" "}
              <span className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                digital solutions
              </span>{" "}
              that turn visitors into{" "}
              <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                customers
              </span>
            </h1>

            <p className="text-white/80 max-w-xl text-[14px] md:text-lg lg:text-[20px]">
              We design performant, beautiful, and strategic software that
              generates qualified leads and boosts your revenue.
            </p>

            <Link href="/portfolio">
              <button className="group relative inline-flex items-center gap-3 text-[14px] md:text-[16px]
                px-6 sm:px-12 lg:px-20 py-2 md:py-3 rounded-xl overflow-hidden
                border border-purple-500/50 text-white
                bg-gradient-to-br from-purple-500/10 to-blue-500/5
                hover:from-purple-500/20 hover:to-blue-500/10 transition-all duration-300">
                <span className="relative z-10">View Our Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </button>
            </Link>
          </div>

          {/* RIGHT GLOBE */}
          <div
            ref={globeRef}
            className="relative flex justify-center lg:ml-28 items-center mt-14 lg:mt-0"
          >
            {/* Animated glow rings */}
            <div className="absolute w-[400px] h-[400px] border border-purple-500/20 rounded-full animate-spin-slow" />
            <div className="absolute w-[350px] h-[350px] border border-blue-500/15 rounded-full animate-spin-slow reverse" />
            
            <div className="absolute w-[300px] h-[300px] blur-[140px] bg-purple-500/40 rounded-full" />

            <Image
              src="https://res.cloudinary.com/dj7xotphr/image/upload/v1770103192/Hero_Support_1_jbwdig.webp"
              alt="Digital Globe"
              width={366}
              height={353}
              priority
              className="relative z-10 w-[180px] sm:w-[260px] md:w-[320px] lg:w-[366px] 
                drop-shadow-[0_0_40px_rgba(135,100,255,0.3)]"
            />

            {/* Floating particles around globe */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                ref={addToFloatingElements}
                className={`absolute w-1 h-1 rounded-full bg-white/50 
                  ${i % 2 === 0 ? 'animate-pulse' : ''}`}
                style={{
                  transform: `rotate(${i * 60}deg) translateX(180px)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* SATSON FULL OVERLAY */}
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
      >
        <div className="relative flex items-center justify-center">
          {/* KEY CHANGE: The gradient text always stays with the same color */}
          <h1
            ref={satsonTextRef}
            className="
              font-marcellus
              text-[22vw]
              leading-none
              tracking-tight
              select-none
              bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent
              opacity-90
            "
          >
            SATSON
          </h1>
          
          {/* KEY CHANGE: Separate element for the glow/whitening effect */}
          <div 
            ref={satsonGlowRef}
            className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 
              rounded-full -z-10 blur-[60px] opacity-0"
          />
        </div>
      </div>
    </section>
  )
}