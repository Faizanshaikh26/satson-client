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








import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/hero/Hero Backgound.jpg')",
        }}
      />

      {/* Overlays */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#080C16]/40 via-black/90 via-black/90  to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-black to-transparent" /> */}

      {/* Content wrapper */}
      <div className="relative z-10 min-h-screen max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:grid lg:grid-cols-2 lg:items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-34 sm:pt-32 lg:pt-0 space-y-2 sm:space-y-7 lg:space-y-8">

          {/* Pill */}
          <span className="inline-flex items-center font-inter gap-2 px-4 py-2 rounded-full text-xs sm:text-sm text-blue-400 border border-blue-500/30 bg-blue-500/10 backdrop-blur">
            Build it smarter
          </span>

          {/* Heading */}
          <h1 className="font-marcellus font-light tracking-tight text-white leading-tight
            text-[30px]
            sm:text-[32px]
            md:text-[40px]
            lg:text-[56px]"
          >
            We craft{" "}
            <span className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
              digital solutions
            </span>{" "}
            that turn visitors into{" "}
            <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
              customers
            </span>
          </h1>

          {/* Subtext */}
          <p className="font-inter text-white/90 max-w-md lg:max-w-xl
           
           text-[14px]
            md:text-lg
            lg:text-[20px]"
          >
            We design performant, beautiful, and strategic software that
            generates qualified leads and boosts your revenue.
          </p>

          {/* CTA */}




<Link href='/portfolio'>






          <button className="group inline-flex items-center gap-3 text-[14px] md:text-[16px]
            px-4 sm:px-12 lg:px-20
            py-2 md:py-3 rounded-xl
            border border-purple-500
            text-white
            bg-gradient-to-br from-purple-500/10 to-blue-500/5
               font-inter
            
          ">
            View Our Work
            
          </button>

          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center mt-14 sm:mt-16 lg:mt-0">
          <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px] blur-[120px] bg-purple-500/30 rounded-full" />

          <Image
            src="https://res.cloudinary.com/dj7xotphr/image/upload/v1770103192/Hero_Support_1_jbwdig.webp"
            alt="Digital Globe"
            width={366}
            height={353}
            priority
            className="relative z-10 object-contain
              w-[150px]
              sm:w-[240px]
              md:w-[300px]
              lg:w-[366px]"
          />
        </div>

      </div>
    </section>
  )
}




