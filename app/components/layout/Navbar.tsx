// // // import Image from "next/image"

// // // export default function Navbar() {
// // //   return (
// // //     <>
// // //       {/* Navbar */}
// // //       <header className="fixed font-poppins  left-0 w-full z-999">
// // //         <div className="pt-4">
// // //           <nav className="mx-auto max-w-[1344px] px-10 h-[60px] flex items-center justify-between rounded-2xl bg-[#080C16] backdrop-blur-md   shadow-lg">

// // //             {/* LOGO */}
// // //             <div className="flex items-center">
// // //               <Image
// // //                 src="/assets/logo/Satson Logo.png"
// // //                 alt="Satson"
// // //                 width={120}
// // //                 height={49}
// // //                 priority
// // //               />
// // //             </div>






// // //             {/* CENTER NAV */}
// // //             <ul className="hidden md:flex items-center gap-10 text-[15px] text-white/80">
// // //               {["Services", "Portfolio", "About us", "Blogs", "Careers"].map(
// // //                 (item) => (
// // //                   <li
// // //                     key={item}
// // //                     className="cursor-pointer hover:text-white transition-colors"
// // //                   >
// // //                     {item}
// // //                   </li>
// // //                 )
// // //               )}
// // //             </ul>

// // //             {/* CTA */}
// // //             <button

// // //               className="inline-flex items-center bg-gradient-to-b from-[#1864B7] to-[#173D66E0] justify-center rounded-2xl px-4 py-2.5 text-sm font-medium text-slate-200 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
// // //             >
// // //               <span className="text-slate-300/90">Request Demo</span>
// // //             </button>

// // //           </nav>
// // //         </div>
// // //       </header>


// // //     </>
// // //   )
// // // }



// // import Image from "next/image"
// // import Link from "next/link"

// // const navLinks = [


// //   { label: "Home", href: "/" },
// //   { label: "Services", href: "/services" },
// //   { label: "Portfolio", href: "/portfolio" },
// //   { label: "About us", href: "/about-us" },
// //   { label: "Blogs", href: "/blogs" },
// //   { label: "Careers", href: "/careers" },
// //   { label: "Contact", href: "/contact-us" },
// // ]

// // export default function Navbar() {
// //   return (
// //     <>
// //       <header className="fixed font-poppins left-0 w-full z-[999]">
// //         <div className="pt-4">
// //           <nav className="mx-auto  md:max-w-[1344px] px-10 h-[60px] flex items-center justify-between rounded-2xl bg-[#080C16] backdrop-blur-md shadow-lg">

// //             {/* LOGO */}
// //             <Link href="/" className="flex items-center">
// //               <Image
// //                 src="/assets/logo/Satson Logo.png"
// //                 alt="Satson"
// //                 width={120}
// //                 height={49}
// //                 priority
// //               />
// //             </Link>

// //             {/* CENTER NAV */}
// //             <ul className="hidden md:flex items-center gap-10 text-[15px] text-white/80">
// //               {navLinks.map((item) => (
// //                 <li key={item.label} className="relative group">
// //                   <Link
// //                     href={item.href}
// //                     className="relative inline-block py-1 transition-colors duration-300 group-hover:text-white"
// //                   >
// //                     {item.label}

// //                     {/* Sword line */}
// //                     <span className="
// //                       absolute left-0 -bottom-1
// //                       h-[2px] w-full
// //                       origin-left scale-x-0
// //                       bg-gradient-to-r from-[#3FA9F5] via-white to-[#3FA9F5]
// //                       transition-transform duration-300 ease-out
// //                       group-hover:scale-x-100
// //                     " />
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>

// //             {/* CTA */}
// //             <button
// //               className="inline-flex items-center bg-gradient-to-b from-[#1864B7] to-[#173D66E0] justify-center rounded-2xl px-4 py-2.5 text-sm font-medium text-slate-200 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
// //             >
// //               <span className="text-slate-300/90">Request Demo</span>
// //             </button>

// //           </nav>
// //         </div>
// //       </header>
// //     </>
// //   )
// // }



// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { useState } from "react"
// import { usePathname } from "next/navigation"
// import { motion, AnimatePresence } from "framer-motion"
// import { Menu, X } from "lucide-react"

// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "Services", href: "/services" },
//   { label: "Portfolio", href: "/portfolio" },
//   { label: "About us", href: "/about-us" },
//   { label: "Blogs", href: "/blogs" },
//   { label: "Careers", href: "/careers" },
//   { label: "Contact", href: "/contact-us" },
// ]

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const pathname = usePathname()

//   const isActive = (href: string) =>
//     href === "/" ? pathname === "/" : pathname.startsWith(href)

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
//       <header className="fixed left-0 w-full z-[999] font-poppins">
//         <div className="pt-4 px-4 md:px-0">
//           <nav className="mx-auto md:max-w-[1344px] h-[56px] md:h-[60px]
//                           flex items-center justify-between
//                           rounded-2xl bg-[#080C16] backdrop-blur-md shadow-lg
//                           px-4 md:px-10">

//             {/* LOGO */}
//             <Link href="/" className="flex items-center">
//               <Image
//                 src="/assets/logo/Satson Logo.png"
//                 alt="Satson"
//                 width={110}
//                 height={40}
//                 priority
//               />
//             </Link>

//             {/* DESKTOP NAV */}
//             <ul className="hidden md:flex items-center gap-10 text-[15px]">
//               {navLinks.map((item) => {
//                 const active = isActive(item.href)

//                 return (
//                   <li key={item.label} className="relative">
//                     <Link
//                       href={item.href}
//                       className={`relative inline-block py-1 transition-colors duration-300
//                         ${active ? "text-white" : "text-white/80 hover:text-white"}
//                       `}
//                     >
//                       {item.label}

//                       {/* Active / Hover underline */}
//                       <span
//                         className={`absolute left-0 -bottom-1 h-[2px] w-full
//                           bg-gradient-to-r from-[#3FA9F5] via-white to-[#3FA9F5]
//                           transition-transform duration-300 origin-left
//                           ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
//                         `}
//                       />
//                     </Link>
//                   </li>
//                 )
//               })}
//             </ul>

//             {/* DESKTOP CTA */}
//             <button
//               className="hidden md:inline-flex items-center
//                          bg-gradient-to-b from-[#1864B7] to-[#173D66E0]
//                          justify-center rounded-2xl px-4 py-2.5
//                          text-sm font-medium text-slate-200
//                          shadow-md transition-all duration-300
//                          hover:-translate-y-1 hover:shadow-xl"
//             >
//               <span className="text-slate-300/90">Request Demo</span>
//             </button>

//             {/* MOBILE MENU BUTTON */}
//             <button
//               onClick={() => setOpen(true)}
//               className="md:hidden text-white/80 hover:text-white transition"
//             >
//               <Menu size={22} />
//             </button>
//           </nav>
//         </div>
//       </header>


//      {/* ================= MOBILE FULLSCREEN MENU ================= */}
// <AnimatePresence>
//   {open && (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.25 }}
//       className="fixed inset-0 z-[999]  text-white"
//     >



//       {/* Top Bar */}
//       <div className="flex items-center bg-[#080C16]  w-[90%] mx-auto justify-between px-3 pt-1">
//         {/* Logo */}
//         <Link href="/" onClick={() => setOpen(false)}>
//           <Image
//             src="/assets/logo/Satson Logo.png"
//             alt="Satson"
//             width={110}
//             height={40}
//             priority
//           />
//         </Link>

//         {/* Close (hamburger style) */}
//         <button
//           onClick={() => setOpen(false)}
//           className="text-white"
//         >
//           <X size={26} />
//         </button>
//       </div>


//    <div className="pointer-events-none absolute -top-[-36%] -left-[40px]  w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.25)_0%,rgba(122,59,255,0.0)_70%)]  blur-[]" />



//       <div className="pointer-events-none absolute top-0 -right-20 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(120,59,255,0.25)_0%,rgba(122,59,255,0.0)_70%)] rounded-full  blur-[30px]" />
//       {/* Centered Navigation */}
//       <div className="flex flex-col w-[90%] bg-[#080C16] mx-auto items-center px-20 justify-center h-full gap-8 -mt-10">
//         {navLinks
//           .filter((l) => l.label !== "Home")
//           .map((item) => {
//             const active = isActive(item.href)

//             return (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 onClick={() => setOpen(false)}
//                 className={`text-[24px] font-light tracking-wide transition
//                   ${active ? "text-white" : "text-white/80 hover:text-white"}
//                 `}
//               >
//                 {item.label}
//               </Link>
//             )
//           })}

//         {/* CTA */}
//         <button
//           className="

//             px-8 py-3
//             rounded-full
//             border border-purple-500
//             text-sm
//             text-white
//             hover:bg-purple-500/10
//             transition
//           "
//         >
//           Request Demo
//         </button>
//       </div>
//     </motion.div>
//   )}
// </AnimatePresence>

//     </>
//   )
// }



"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import gsap from "gsap"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About us", href: "/about-us" },
  // { label: "Blogs", href: "/blogs" },
  { label: "Careers", href: "/careers" },
  // { label: "Contact", href: "/contact-us" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [ready, setReady] = useState(false)
  const pathname = usePathname()

  const menuRef = useRef<HTMLDivElement>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  // Setup GSAP timeline once (after first paint)
  useEffect(() => {
    if (!menuRef.current) return

    // Force initial state
    gsap.set(menuRef.current, {
      clipPath: "circle(0% at 0% 0%)",
      visibility: "hidden", // Changed from "visible" to "hidden"
    })

    tl.current = gsap.timeline({ paused: true })

    tl.current
      .set(menuRef.current, { visibility: "visible" }) // Make visible when animation starts
      .to(menuRef.current, {
        clipPath: "circle(150% at 0% 0%)",
        duration: 0.9,
        ease: "power4.inOut",
      })
      .from(
        ".mobile-link",
        {
          y: 40,
          opacity: 0,
          stagger: 0.08,
          duration: 0.4,
        },
        "-=0.4"
      )
      .from(
        ".mobile-cta",
        {
          y: 20,
          opacity: 0,
          duration: 0.3,
        },
        "-=0.2"
      )

    // Wait one frame to guarantee layout is ready
    requestAnimationFrame(() => setReady(true))
  }, [])

  // Play / reverse animation
  useEffect(() => {
    if (!tl.current || !ready) return
    open ? tl.current.play() : tl.current.reverse()
  }, [open, ready])

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 w-full z-[999] font-poppins">
        <div className="pt-4 px-4 md:px-0">
          <nav className="mx-auto md:max-w-[1344px] h-[56px] md:h-[60px]
                          flex items-center justify-between
                          rounded-2xl bg-[#080C16] shadow-lg
                          px-4 md:px-10">

            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo/Satson Logo.png"
                alt="Satson"
                width={90}
                height={40}
                priority
              />
            </Link>

            {/* DESKTOP NAV */}
            <ul className="hidden md:flex items-center gap-10 text-[15px]">
              {navLinks.map((item) => {
                const active = isActive(item.href)

                return (
                  <li key={item.label} className="relative">
                    <Link
                      href={item.href}
                      className={`relative inline-block py-1 transition-colors duration-300
                     ${active 
  ? "text-transparent bg-clip-text bg-gradient-to-l from-[#5593F7] to-[#C47DE8] font-bold  " 
  : "text-white/80 hover:bg-gradient-to-l hover:from-[#5593F7] hover:to-[#C47DE8] hover:bg-clip-text hover:text-transparent"
}

                      `}
                    >
                      {item.label}
                     
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* DESKTOP CTA */}
<Link href='lets-talk'>

<button className="hidden md:inline-flex items-center
                        bg-gradient-to-r from-[#C243FE] to-[#9B34CB]
                         justify-center rounded-2xl px-4 py-2.5
                         text-sm font-medium text-slate-200
                         shadow-md transition-all duration-300
                         hover:-translate-y-1 hover:shadow-xl">
              Request Demo
            </button>
</Link>

            

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-white"
            >
              <Menu size={22} />
            </button>
          </nav>
        </div>
      </header>

      {/* ================= MOBILE RADIAL MENU ================= */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-[999] bg-[#080C16] text-white"
        style={{
          clipPath: "circle(0% at 0% 0%)",
          visibility: "hidden",
        }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3">
          <Image
            src="/assets/logo/Satson Logo.png"
            alt="Satson"
            width={110}
            height={40}
          />

          <button onClick={() => setOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* Center links - REMOVED THE FILTER FOR HOME */}
        <div className="flex flex-col items-center justify-center min-h-screen gap-8 -mt-10">
          {navLinks.map((item) => { // Removed the filter
            const active = isActive(item.href)

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`mobile-link text-[24px] font-light tracking-wide
                  ${active ? "text-white" : "text-white/80 hover:text-white"}
                `}
              >
                {item.label}
              </Link>
            )
          })}

          <button className="mobile-cta px-8 py-3 rounded-full border border-purple-500 text-sm hover:bg-purple-500/10 transition">
            Request Demo
          </button>
        </div>
      </div>
    </>
  )
}