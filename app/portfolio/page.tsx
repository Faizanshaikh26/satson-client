import BuildTogether from "../components/layout/BuildTogether"

import Link from "next/link"

export default function Portfolio() {


const projects = [
  {
    title: "Suvasti Fabrics",
    type: "Web Application",
    tech: ["React", "Node.js"],
    image: "assets/portfolio/Suvasti Fabrics.png",
  },
  {
    title: "Bharat Kapital",
    type: "Financial Dashboard",
    tech: ["Dashboard", "Analytics"],
    image: "assets/portfolio/Bharat Kapital.png",
  },
  {
    title: "Cloudsync Mobile",
    type: "Mobile App",
    tech: ["React Native", "API"],
    image: "assets/portfolio/Landing Labs.png",
  },
  {
    title: "Suvasti Fabrics",
    type: "Web Application",
    tech: ["React", "Node.js"],
    image: "assets/portfolio/Suvasti Fabrics.png",
  },
  {
    title: "Bharat Kapital",
    type: "Financial Dashboard",
    tech: ["Dashboard", "Analytics"],
    image: "assets/portfolio/Bharat Kapital.png",
  },
  {
    title: "Cloudsync Mobile",
    type: "Mobile App",
    tech: ["React Native", "API"],
    image: "assets/portfolio/Landing Labs.png",
  },
]

  return (
//     <section className="relative overflow-hidden bg-Base  pt-34">
      
//       {/* Background glows */}
//       <div className="pointer-events-none absolute top-[6%] -left-40 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.35)_0%,rgba(122,59,255,0.0)_70%)] blur-[140px]" />
//       <div className="pointer-events-none absolute top-[6%] -right-40 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.25)_0%,rgba(122,59,255,0.0)_70%)] blur-[140px]" />

//       {/* Content */}
//       <div className="relative z-10 max-w-6xl mx-auto text-center">

//         {/* Badge */}
//         <span className="inline-block mb-6 rounded-full font-inter border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-4 py-1 text-xs text-[#60A5FA]">
//           Our Work
//         </span>

//         {/* Heading */}
//         <h1 className="text-3xl md:text-6xl font-marcellus text-white ">
//           Projects That{" "}
//           <span className="bg-gradient-to-r from-[#C47DE8] to-[#5593F7] bg-clip-text text-transparent">
//             Deliver Results
//           </span>
//         </h1>

//         {/* Subtitle */}
//         <p className="mt-4 max-w-2xl mx-auto text-sm md:text-[20px] font-poppins text-secondaryText">
//           Deep dives into AI, engineering, design, and building products
//           that matter. Written by our team.
//         </p>

//         {/* Filters */}
//         <div className="mt-10  flex flex-wrap justify-center gap-10">
//           <FilterButton active label="All" />
//           <FilterButton label="AI Solutions" />
//           <FilterButton label="Web Apps" />
//           <FilterButton label="Mobile Apps" />
//           <FilterButton label="Websites" />
//         </div>
//       </div>





//  <div className="relative z-10 max-w-7xl mx-auto py-14 px-8 grid md:grid-cols-3 gap-14 ">
//         {projects.map((p, i) => (
//           <div
//   key={i}
//   className="portfolio-card w-[400px] group relative rounded-xl overflow-hidden"
// >
  


// <Link href="/portfolio/1">
//   {/* Content */}
//   <div className="relative  z-10">

//     {/* Top visual */}
//     <div className="h-[220px]  overflow-hidden">
//       <img
//         src={p.image}
//         className="w-full h-full object-cover"
//         alt={p.title}
//       />
//     </div>

//     {/* Bottom glass panel */}
//     <div className="relative px-8 py-7 bg-gradient-to-br from-[#0b0e14]/80 via-[#0b0e14]/60 to-[#0b0e14]/80 backdrop-blur-xl border-t border-white/10">
      
//       <p className="text-[11px] tracking-[0.25em] text-gray-400 uppercase">
//         {p.type}
//       </p>

//       <h3 className="mt-2 text-xl font-semibold text-white">
//         {p.title}
//       </h3>

//       <div className="flex gap-3 mt-4 flex-wrap">
//         {p.tech.map((t, i) => (
//           <span
//             key={i}
//             className="px-3 py-1 rounded-full bg-white/10 text-[11px] text-gray-300 backdrop-blur-md"
//           >
//             {t}
//           </span>
//         ))}
//       </div>
//     </div>
//   </div>

//   </Link>
// </div>

//         ))}

        


// <div className="pointer-events-none absolute top-[60%] -left-100 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.35)_0%,rgba(122,59,255,0.0)_70%)] blur-[140px]" />
//       <div className="pointer-events-none absolute top-[60%] -right-100 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.25)_0%,rgba(122,59,255,0.0)_70%)] blur-[140px]" />




//       </div>



// <BuildTogether/>

//     </section>


<section className="relative overflow-hidden bg-Base pt-20 sm:pt-28 pb-16">

  {/* Background glows (responsive) */}
  <div className="
    pointer-events-none absolute top-[6%] -left-40
    w-[280px] h-[280px]
    sm:w-[500px] sm:h-[500px]
    rounded-full
    bg-[radial-gradient(circle,rgba(122,59,255,0.35)_0%,rgba(122,59,255,0.0)_70%)]
    blur-[120px] sm:blur-[140px]
  " />
  <div className="
    pointer-events-none absolute top-[6%] -right-40
    w-[280px] h-[280px]
    sm:w-[500px] sm:h-[500px]
    rounded-full
    bg-[radial-gradient(circle,rgba(122,59,255,0.25)_0%,rgba(122,59,255,0.0)_70%)]
    blur-[120px] sm:blur-[140px]
  " />

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto text-center px-4">

    {/* Badge */}
    <span className="inline-block mb-6 rounded-full font-inter border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-4 py-1 text-xs text-[#60A5FA]">
      Our Work
    </span>

    {/* Heading */}
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-marcellus text-white">
      Projects That{" "}
      <span className="bg-gradient-to-r from-[#C47DE8] to-[#5593F7] bg-clip-text text-transparent">
        Deliver Results
      </span>
    </h1>

    {/* Subtitle */}
    <p className="mt-4 max-w-2xl mx-auto text-[14px] sm:text-[16px] md:text-[20px] font-poppins text-secondaryText">
      Deep dives into AI, engineering, design, and building products
      that matter. Written by our team.
    </p>

    {/* Filters */}
<div
  className="
    mt-8 sm:mt-10
    flex flex-nowrap
    justify-start sm:justify-center
    gap-3 sm:gap-6
    overflow-x-auto
    scrollbar-hide
    px-4
    snap-x snap-mandatory
  "
>
  <FilterButton active label="All" />
  <FilterButton label="AI Solutions" />
  <FilterButton label="Web Apps" />
  <FilterButton label="Mobile Apps" />
  <FilterButton label="Websites" />
</div>

  </div>

  {/* Cards Grid */}
  <div className="
    relative z-10
    max-w-7xl mx-auto
    py-12 sm:py-16
    px-4 sm:px-6 lg:px-8
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-10 lg:gap-14
  ">
    {projects.map((p, i) => (
      <div
        key={i}
        className="portfolio-card w-full max-w-[400px] mx-auto group relative rounded-xl overflow-hidden"
      >
        <Link href="/portfolio/1">
          <div className="relative z-10">

            {/* Image */}
            <div className="h-[180px] sm:h-[220px] overflow-hidden">
              <img
                src={p.image}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt={p.title}
              />
            </div>

            {/* Glass Panel */}
            <div className="relative px-6 sm:px-8 py-6 sm:py-7 bg-[#21262933] backdrop-blur-xl border-t border-white/10">
              <p className="text-[10px] sm:text-[11px] tracking-[0.25em] text-gray-400 uppercase">
                {p.type}
              </p>

              <h3 className="mt-2 text-lg sm:text-xl font-semibold text-white">
                {p.title}
              </h3>

              <div className="flex gap-2 sm:gap-3 mt-4 flex-wrap">
                {p.tech.map((t, i) => (
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

  {/* Bottom glows */}
  <div className="
    pointer-events-none absolute top-[60%] -left-40
    w-[280px] h-[280px]
    sm:w-[500px] sm:h-[500px]
    rounded-full
    bg-[radial-gradient(circle,rgba(122,59,255,0.35)_0%,rgba(122,59,255,0.0)_70%)]
    blur-[120px] sm:blur-[140px]
  " />
  <div className="
    pointer-events-none absolute top-[60%] -right-40
    w-[280px] h-[280px]
    sm:w-[500px] sm:h-[500px]
    rounded-full
    bg-[radial-gradient(circle,rgba(122,59,255,0.25)_0%,rgba(122,59,255,0.0)_70%)]
    blur-[120px] sm:blur-[140px]
  " />

  <BuildTogether />
</section>

  )
}





function FilterButton({
  label,
  active = false,
}: {
  label: string
  active?: boolean
}) {
  return (
    <button
      className={`
        snap-start
        whitespace-nowrap
        rounded-full
        px-6 sm:px-8
        py-2.5 sm:py-3
        text-[11px] sm:text-xs
        font-medium
        transition-all
        duration-300
        ${
          active
            ? "bg-gradient-to-r from-[#C243FE] to-[#9B34CB] text-white shadow-[0_0_20px_rgba(170,34,156,0.35)]"
            : "bg-[#121826]/80 text-white/70 border border-white/10 hover:bg-[#1a2130]"
        }
      `}
    >
      {label}
    </button>
  )
}







// function FilterButton({
//   label,
//   active = false,
// }: {
//   label: string
//   active?: boolean
// }) {
//   return (
//     <button
//       className={`rounded-full px-10 py-3 text-xs transition
//         ${
//           active
//             ? "bg-gradient-to-r from-[#AA229CEB] to-[#7547B0E3] text-white"
//             : "border border-white/10 bg-white/5 text-white/60 hover:bg-white/10"
//         }`}
//     >
//       {label}
//     </button>
//   )
// }
