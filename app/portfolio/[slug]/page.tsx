


// "use client"

// import BuildTogether from "@/app/components/layout/BuildTogether"
// import Image from "next/image"

// export default function SinglePortfolio() {
//   return (
//     <main className="relative min-h-screen bg-Base text-white overflow-hidden">

//       {/* HERO */}
//       <section className="relative w-full h-[240px] sm:h-[360px] md:h-[600px] overflow-hidden">
//         <Image
//           src="/assets/portfolio/Suvasti Fabrics.png"
//           alt="Suvasti Fabrics Hero"
//           fill
//           className="object-cover"
//           priority
//         />
//       </section>

//       {/* TITLE */}
//       <section className="px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 max-w-6xl mx-auto">
//         <h2 className="text-2xl sm:text-3xl md:text-[48px] font-medium font-marcellus bg-gradient-to-r from-[#C47DE8] to-[#5593F7] bg-clip-text text-transparent">
//           Landing Page For Suvasti Fabrics
//         </h2>
//       </section>

//       {/* CONTENT */}
//       <section className="relative px-4 sm:px-6 lg:px-20 py-10 max-w-7xl mx-auto">

//         {/* Background glows */}
//         <div className="
//           pointer-events-none absolute -top-[300px] -left-40
//           w-[280px] h-[280px]
//           sm:w-[500px] sm:h-[500px]
//           rounded-full
//           bg-[radial-gradient(circle,rgba(122,59,255,0.35)_0%,rgba(122,59,255,0.0)_70%)]
//           blur-[120px] sm:blur-[140px]
//         " />
//         <div className="
//           pointer-events-none absolute top-1/4 -right-40
//           w-[280px] h-[280px]
//           sm:w-[500px] sm:h-[500px]
//           rounded-full
//           bg-[radial-gradient(circle,rgba(122,59,255,0.25)_0%,rgba(122,59,255,0.0)_70%)]
//           blur-[120px] sm:blur-[140px]
//         " />

//         {/* META PILLS */}
//         <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 font-poppins">
//           {[
//             { label: "Client", value: "Suvasti Fabrics" },
//             { label: "Industry", value: "Fashion" },
//             { label: "Timeline", value: "1 Week" },
//             { label: "Year", value: "2025" },
//           ].map((item) => (
//             <div
//               key={item.label}
//               className="
//                 flex items-center gap-3
//                 rounded-xl
//                 w-full sm:w-[240px]
//                 min-h-[80px]
//                 bg-white/5 px-4 py-4 backdrop-blur
//               "
//             >
//               <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center">
//                 <div className="h-3 w-3 rounded-full bg-purple-400" />
//               </div>
//               <div>
//                 <p className="text-xs text-gray-400">{item.label}</p>
//                 <p className="text-sm font-medium">{item.value}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ABOUT */}
//         <h3 className="text-base sm:text-lg font-semibold mb-3 font-marcellus">
//           About the Project
//         </h3>
//         <p className="text-secondaryText leading-relaxed mb-10 text-[14px] sm:text-[16px] font-poppins max-w-4xl">
//           Suvasti Fabrics is a luxury textile brand rooted in Indian craftsmanship
//           and timeless elegance. The objective was to design a royal,
//           shahi-inspired digital presence that reflects the brand’s philosophy
//           of quiet luxury. The visual direction draws inspiration from heritage
//           motifs, refined typography, and a deep royal navy blue palette to
//           convey exclusivity, sophistication, and trust.
//         </p>

//         {/* CHALLENGES */}
//         <h3 className="text-base sm:text-lg font-semibold mb-3 font-marcellus">
//           Challenges We Solved
//         </h3>
//         <ul className="space-y-3 text-secondaryText mb-10 max-w-4xl">
//           {[
//             "Translating traditional Indian luxury into a modern, minimal digital experience",
//             "Balancing rich visual elements without overwhelming the design",
//             "Creating a premium brand feel suitable for future scalability",
//             "Ensuring the site feels luxurious yet contemporary",
//           ].map((item) => (
//             <li key={item} className="flex gap-3">
//               <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400" />
//               <span className="text-[14px] sm:text-[16px]">{item}</span>
//             </li>
//           ))}
//         </ul>

//         {/* OUTCOMES */}
//         <h3 className="text-base sm:text-lg font-semibold mb-3 font-marcellus">
//           Outcomes
//         </h3>
//         <ul className="space-y-3 text-secondaryText mb-12 max-w-4xl">
//           {[
//             "A refined royal-themed landing experience",
//             "Strong visual identity using motifs and symmetry",
//             "Clear storytelling and brand depth",
//             "Scalable foundation for future growth",
//           ].map((item) => (
//             <li key={item} className="flex gap-3">
//               <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400" />
//               <span className="text-[14px] sm:text-[16px]">{item}</span>
//             </li>
//           ))}
//         </ul>

//         {/* TECH */}
//         <h3 className="text-base sm:text-lg font-semibold mb-4 font-marcellus">
//           Technologies Used
//         </h3>
//         <div className="flex flex-wrap gap-3 mb-10">
//           {["Figma", "Node.js", "React", "Angular JS", "AWS"].map((tech) => (
//             <span
//               key={tech}
//               className="rounded-full border border-purple-500/60 px-4 py-1.5 text-xs sm:text-sm text-purple-300"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         {/* VISIT */}
//         <h3 className="text-base sm:text-lg font-semibold mb-2 font-marcellus">
//           Visit Suvasti
//         </h3>
//         <a
//           href="https://suvasti.in"
//           target="_blank"
//           className="text-purple-400 hover:underline font-poppins text-sm"
//         >
//           suvasti.in
//         </a>
//       </section>

//       <BuildTogether />
//     </main>
//   )
// }





"use client"

import BuildTogether from "@/app/components/layout/BuildTogether"
import Image from "next/image"

export default function SinglePortfolio() {
  return (
    <main className="relative min-h-screen bg-Base text-white overflow-hidden">

      {/* HERO */}
      <section className="relative w-full h-[240px] sm:h-[360px] md:h-[600px] overflow-hidden">
        <Image
          src="/assets/portfolio/Suvasti Fabrics.png"
          alt="Suvasti Fabrics Hero"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* TITLE */}
      <section className="px-4 sm:px-6 lg:px-8 pt-2 sm:pt-10 max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-3xl md:text-[48px] font-medium font-marcellus bg-gradient-to-r from-[#C47DE8] to-[#5593F7] bg-clip-text text-transparent">
          Landing Page For Suvasti Fabrics
        </h2>
      </section>

      {/* CONTENT */}
      <section className="relative px-4 sm:px-6 lg:px-20 py-5 max-w-7xl mx-auto">

        {/* Background glows */}
        <div className="
          pointer-events-none absolute -top-[300px] -left-40
          w-[280px] h-[280px]
          sm:w-[500px] sm:h-[500px]
          rounded-full
          bg-[radial-gradient(circle,rgba(122,59,255,0.35)_0%,rgba(122,59,255,0.0)_70%)]
          blur-[120px] sm:blur-[140px]
        " />
        <div className="
          pointer-events-none absolute top-1/4 -right-40
          w-[280px] h-[280px]
          sm:w-[500px] sm:h-[500px]
          rounded-full
          bg-[radial-gradient(circle,rgba(122,59,255,0.25)_0%,rgba(122,59,255,0.0)_70%)]
          blur-[120px] sm:blur-[140px]
        " />

        {/* META PILLS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 font-poppins">
  {[
    { label: "Client", value: "Suvasti Fabrics" },
    { label: "Industry", value: "Fashion" },
    { label: "Timeline", value: "1 Week" },
    { label: "Year", value: "2025" },
  ].map((item) => (
    <div
      key={item.label}
      className="
        flex items-center gap-3
        rounded-2xl
        min-h-[72px]
        bg-[#0e1422]/80
        border border-white/5
        px-4 py-4
        backdrop-blur-md
      "
    >
      {/* Icon */}
      <div className="h-9 w-9 rounded-full bg-purple-500/20 flex items-center justify-center">
        <div className="h-3 w-3 rounded-full bg-purple-400" />
      </div>

      {/* Text */}
      <div>
        <p className="text-[11px] text-white/50">{item.label}</p>
        <p className=" text-[10px] md:text-sm font-medium text-white">{item.value}</p>
      </div>
    </div>
  ))}
</div>


        {/* ABOUT */}
        <h3 className="text-base sm:text-lg font-semibold mb-3 font-marcellus">
          About the Project
        </h3>
        <p className="text-secondaryText leading-relaxed mb-10 text-[14px] sm:text-[16px] font-poppins max-w-4xl">
          Suvasti Fabrics is a luxury textile brand rooted in Indian craftsmanship
          and timeless elegance. The objective was to design a royal,
          shahi-inspired digital presence that reflects the brand’s philosophy
          of quiet luxury. The visual direction draws inspiration from heritage
          motifs, refined typography, and a deep royal navy blue palette to
          convey exclusivity, sophistication, and trust.
        </p>

        {/* CHALLENGES */}
        <h3 className="text-base sm:text-lg font-semibold mb-3 font-marcellus">
          Challenges We Solved
        </h3>
        <ul className="space-y-3 text-secondaryText mb-10 max-w-4xl">
          {[
            "Translating traditional Indian luxury into a modern, minimal digital experience",
            "Balancing rich visual elements without overwhelming the design",
            "Creating a premium brand feel suitable for future scalability",
            "Ensuring the site feels luxurious yet contemporary",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span className="text-[14px] sm:text-[16px]">{item}</span>
            </li>
          ))}
        </ul>

        {/* OUTCOMES */}
        <h3 className="text-base sm:text-lg font-semibold mb-3 font-marcellus">
          Outcomes
        </h3>
        <ul className="space-y-3 text-secondaryText mb-12 max-w-4xl">
          {[
            "A refined royal-themed landing experience",
            "Strong visual identity using motifs and symmetry",
            "Clear storytelling and brand depth",
            "Scalable foundation for future growth",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span className="text-[14px] sm:text-[16px]">{item}</span>
            </li>
          ))}
        </ul>

        {/* TECH */}
        <h3 className="text-base sm:text-lg font-semibold mb-4 font-marcellus">
          Technologies Used
        </h3>
        <div className="flex flex-wrap gap-3 mb-10">
          {["Figma", "Node.js", "React", "Angular JS", "AWS"].map((tech) => (
            <span
              key={tech}
              className="rounded border border-purple-500/60 px-4 py-1.5 text-xs sm:text-sm text-purple-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* VISIT */}
        <h3 className="text-base sm:text-lg font-semibold mb-2 font-marcellus">
          Visit Suvasti
        </h3>
        <a
          href="https://suvasti.in"
          target="_blank"
          className="text-purple-400 hover:underline font-poppins text-sm"
        >
          suvasti.in
        </a>
      </section>

      <BuildTogether />
    </main>
  )
}
