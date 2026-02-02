// "use client"

// import { useState } from "react"
// import { MapPin, Clock, ChevronDown } from "lucide-react"

// const jobs = [
//     {
//         title: "Senior AI/ML Engineer",
//         tag: "Engineering",
//         location: "Remote",
//         type: "Full-time",
//         description:
//             "Build and deploy AI models that power our clients' products. You'll work with GPT, LLMs, and production ML systems at scale.",
//         requirements: [
//             "5+ years ML experience",
//             "Production ML systems",
//             "Python, PyTorch/TensorFlow",
//             "LLM fine-tuning experience",
//         ],
//         open: true,
//     },
//     {
//         title: "UX/UI Designer",
//         tag: "Design",
//         location: "Hybrid",
//         type: "Full-time",
//     },
//     {
//         title: "Product Manager",
//         tag: "Product",
//         location: "Pune",
//         type: "Full-time",
//     },
//     {
//         title: "DevOps Engineer",
//         tag: "Engineering",
//         location: "Pune",
//         type: "Full-time",
//     },
// ]


// export default function JobsSection() {
//   const [openIndex, setOpenIndex] = useState(0)

//   return (
//     <section className="relative overflow-hidden bg-Base pt-24 sm:pt-32">

//       {/* Background glows */}
//       <div className="
//         pointer-events-none absolute top-[6%] -left-40
//         w-[280px] h-[280px]
//         sm:w-[500px] sm:h-[500px]
//         rounded-full
//         bg-[radial-gradient(circle,rgba(122,59,255,0.35)_0%,rgba(122,59,255,0.0)_70%)]
//         blur-[120px] sm:blur-[140px] hidden md:block
//       " />
//       <div className="
//         pointer-events-none absolute top-[6%] -right-40
//         w-[280px] h-[280px]
//         sm:w-[500px] sm:h-[500px]
//         rounded-full
//         bg-[radial-gradient(circle,rgba(122,59,255,0.25)_0%,rgba(122,59,255,0.0)_70%)]
//         blur-[120px] sm:blur-[140px] hidden md:block
//       " />

//       {/* Header */}
//       <div className="relative z-10 max-w-6xl mx-auto text-center px-4">

//         <span className="inline-block mb-6 rounded-full font-inter border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-4 py-1 text-xs text-[#60A5FA]">
//           Careers
//         </span>

//         <h1 className="text-3xl sm:text-4xl md:text-6xl font-marcellus text-white">
//           Build the{" "}
//           <span className="bg-gradient-to-r from-[#C47DE8] to-[#5593F7] bg-clip-text text-transparent">
//             Future
//           </span>{" "}
//           With Us
//         </h1>

//         <p className="mt-4 max-w-2xl mx-auto text-[14px] sm:text-[16px] md:text-[20px] font-poppins text-secondaryText">
//           Join a team of passionate innovators working on AI-powered solutions
//           that transform businesses worldwide.
//         </p>

//         {/* Filters */}
//   <div
//   className="
//     my-8 sm:my-10
//     flex flex-nowrap
//     justify-start sm:justify-center
//     gap-3 sm:gap-6
//     overflow-x-auto
//     scrollbar-hide
//     px-4
//     snap-x snap-mandatory
//   "
// >
//           <FilterButton active label="All" />
//           <FilterButton label="Engineering" />
//           <FilterButton label="Design" />
//           <FilterButton label="Product" />
//           <FilterButton label="Sales" />
//         </div>
//       </div>

//       {/* Job List */}
//       <div className="relative z-10 max-w-5xl mx-auto space-y-5 px-4">
//         {jobs.map((job, i) => {
//           const isOpen = openIndex === i

//           return (
//             <div
//               key={i}
//               className="rounded-2xl bg-gradient-to-b from-[#0b0e18] to-[#07080f] border border-white/10 shadow-xl"
//             >
//               {/* Header */}
//               <button
//   onClick={() => setOpenIndex(isOpen ? -1 : i)}
//   className="w-full text-left p-5 sm:p-6"
// >
//   {/* Top Row: Title + Pill + Arrow */}
//   <div className="flex items-center justify-between gap-3">
//     <div className="flex flex-wrap items-center gap-3">
//       <h3 className="text-base sm:text-lg font-semibold font-marcellus text-white">
//         {job.title}
//       </h3>

//       <span className="text-xs px-3 py-1 rounded-full font-inter bg-blue-500/10 text-blue-400">
//         {job.tag}
//       </span>
//     </div>

//     <ChevronDown
//       className={`shrink-0 text-secondaryText transition-transform ${
//         isOpen ? "rotate-180" : ""
//       }`}
//     />
//   </div>

//   {/* Bottom Row: Location + Type */}
//   <div className="mt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-secondaryText font-poppins">
//     <span className="flex items-center gap-1">
//       <MapPin size={14} /> {job.location}
//     </span>
//     <span className="flex items-center gap-1">
//       <Clock size={14} /> {job.type}
//     </span>
//   </div>
// </button>


//               {/* Expanded */}
//               {isOpen && job.description && (
//                 <div className="px-5 sm:px-6 pb-6 space-y-6">
//                   <p className="text-[14px] sm:text-[16px] max-w-4xl text-secondaryText font-inter leading-relaxed">
//                     {job.description}
//                   </p>

//                   <div>
//                     <h4 className="text-sm font-medium font-playfairDisplay text-white mb-3">
//                       Requirements
//                     </h4>

//                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] sm:text-sm text-secondaryText font-inter list-disc pl-5">
//                       {job.requirements?.map((req, idx) => (
//                         <li key={idx}>{req}</li>
//                       ))}
//                     </ul>
//                   </div>

//                   <button className="w-full rounded-xl py-3 text-sm font-medium text-black font-inter bg-gradient-to-r from-[#C243FE] to-[#9B34CB]">
//                     Apply Now
//                   </button>
//                 </div>
//               )}
//             </div>
//           )
//         })}
//       </div>

//       {/* Fallback CTA */}


 
      
//      {/* <div className="py-12 sm:py-16 md:py-20 px-4">
//   <div className="
//     relative z-10
//     max-w-[90%] sm:max-w-2xl md:max-w-3xl
//     mx-auto
//     rounded-2xl
//     bg-gradient-to-b from-[#0b0e18] to-[#07080f]
//     border border-white/10
//     shadow-[0_40px_120px_rgba(0,0,0,0.6)]
//     p-6 sm:p-8 md:p-10
//     text-center
//   ">

  
//     <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">
//       🤔
//     </div>


//     <h2 className="
//       text-xl sm:text-2xl md:text-4xl lg:text-[48px]
//       font-semibold
//       text-white
//       leading-tight
//     ">
//       Don&apos;t See a{" "}
//       <span className="bg-gradient-to-r from-[#C47DE8] to-[#5593F7] bg-clip-text text-transparent">
//         Perfect Fit?
//       </span>
//     </h2>

   
//     <p className="
//       mt-3 sm:mt-4
//       text-[13px] sm:text-[15px] md:text-[18px]
//       font-inter
//       text-secondaryText
//       max-w-xs sm:max-w-md md:max-w-xl
//       mx-auto
//       leading-relaxed
//     ">
//       We&apos;re always looking for exceptional people. Send us your resume
//       and tell us how you&apos;d like to contribute.
//     </p>


//     <div className="mt-6 sm:mt-8 flex justify-center">
//       <span className="
//         px-4 sm:px-5
//         py-2.5 sm:py-3
//         rounded-xl
//         border border-purple-500/40
//         text-[11px] sm:text-sm
//         text-white
//         bg-white/5
//         backdrop-blur-md
//         break-all sm:break-normal
//       ">
//         info@satsoninnovation.com
//       </span>
//     </div>

//   </div>
// </div> */}

// <div className="py-16 px-4">
//   <div
//     className="
//       relative
//       max-w-2xl
//       mx-auto
//       rounded-3xl
//       bg-[#0b0f1d]
//       border border-white/10
//       px-6 sm:px-10 py-6
//       text-center
//     "
//   >
//     {/* subtle outer glow */}
//     {/* <div className="absolute inset-0 rounded-3xl shadow-[0_0_80px_rgba(90,80,255,0.12)] pointer-events-none" /> */}

//     {/* Emoji */}
//     <div className="text-4xl sm:text-5xl mb-4">
//       🤔
//     </div>

//     {/* Heading */}
//     <h2 className="text-xl sm:text-2xl md:text-4xl font-playfairDisplay text-white">
//       Don&apos;t See a{" "}
//       <span className="text-[#9b7cff]">
//         Perfect Fit?
//       </span>
//     </h2>

//     {/* Paragraph */}
//     <p className="mt-4 text-sm sm:text-base text-[#8b93a7] max-w-2xl mx-auto leading-relaxed">
//       We&apos;re always looking for exceptional people. Send us your resume and
//       tell us how you&apos;d like to contribute.
//     </p>

//     {/* CTA Pill */}
//     <div className="mt-8 flex justify-center">
//       <div
//         className="
//           px-6 py-2.5
//           rounded-full
//           border border-[#9b7cff]/60
//           text-sm
//           text-white
//           bg-transparent
//         "
//       >
//         info@satsoninnovation.com
//       </div>
//     </div>
//   </div>
// </div>


//     </section>
//   )
// }





// function FilterButton({
//   label,
//   active = false,
// }: {
//   label: string
//   active?: boolean
// }) {
//   return (
//     <button
//       className={`rounded-full px-5 sm:px-8 py-2 sm:py-3 text-[11px] sm:text-xs transition
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



"use client"

import { useState, useEffect } from "react"
import { MapPin, Clock, ChevronDown } from "lucide-react"
import api from "../_lib/axios"
import Link from "next/link"

type Job = {
  _id: string
  title: string
  tag: string
  location: string
  type: string
  slug:string,
  description: string
  requirements?: string[]
}

type FilterButtonProps = {
  label: string
  active?: boolean
  onClick?: () => void
}

type JobTag = "All" | "Engineering" | "Design" | "Product" | "Sales"

export default function JobsSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)
  const [jobs, setJobs] = useState<Job[]>([])
  const [activeTag, setActiveTag] = useState<JobTag>("All")
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")

  // Fetch jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true)
        setError("")
        const res = await api.get("/jobs", {
          params: { tag: activeTag === "All" ? "" : activeTag },
        })
        const jobsData = res.data?.data || res.data || []
        setJobs(jobsData)
        if (jobsData.length > 0) {
          setOpenIndex(0)
        }
      } catch (err: any) {
        console.error("Failed to load jobs", err)
        setError("Unable to load job listings. Please try again later.")
        setJobs([])
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [activeTag])

  const filterTags: JobTag[] = ["All", "Engineering", "Design", "Product", "Sales"]

  const renderContent = () => {
    if (loading) {
      return (
        <div className="relative z-10 max-w-5xl mx-auto space-y-5 px-4 py-12 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent"></div>
          <p className="mt-4 text-gray-400">Loading job opportunities...</p>
        </div>
      )
    }

    if (error) {
      return (
        <div className="relative z-10 max-w-5xl mx-auto space-y-5 px-4 py-12 text-center">
          <div className="text-gray-400 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Unable to Load Jobs</h3>
          <p className="text-gray-400">{error}</p>
        </div>
      )
    }

    if (jobs.length === 0) {
      return (
        <div className="relative z-10 max-w-5xl mx-auto space-y-5 px-4 py-12 text-center">
          <div className="text-gray-400 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">No Open Positions</h3>
          <p className="text-gray-400 mb-6">
            {activeTag === "All" 
              ? "We don't have any open positions at the moment. Check back soon!" 
              : `We don't have any ${activeTag.toLowerCase()} positions open at the moment. Try another category.`}
          </p>
          {activeTag !== "All" && (
            <button
              onClick={() => setActiveTag("All")}
              className="rounded-full px-6 py-2 text-sm border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 transition"
            >
              View All Categories
            </button>
          )}
        </div>
      )
    }

    return (
      <div className="relative z-10 max-w-5xl mx-auto space-y-5 px-4">
        {jobs.map((job, i) => {
          const isOpen = openIndex === i

          return (
            <div
              key={job._id}
              className="rounded-2xl bg-gradient-to-b from-[#0b0e18] to-[#07080f] border border-white/10 shadow-xl"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="w-full text-left p-5 sm:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-base sm:text-lg font-semibold font-marcellus text-white">
                      {job.title}
                    </h3>

                    <span className="text-xs px-3 py-1 rounded-full font-inter bg-blue-500/10 text-blue-400">
                      {job.tag}
                    </span>
                  </div>

                  <ChevronDown
                    className={`shrink-0 text-secondaryText transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-secondaryText font-poppins">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {job.type}
                  </span>
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 space-y-6">
                  <p className="text-[14px] sm:text-[16px] max-w-4xl text-secondaryText font-inter leading-relaxed">
                    {job.description}
                  </p>

                  {job.requirements && job.requirements.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium font-playfairDisplay text-white mb-3">
                        Requirements
                      </h4>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] sm:text-sm text-secondaryText font-inter list-disc pl-5">
                        {job.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}


<Link href={`/careers/${job.slug}`}>
                  <button className="w-full rounded-xl py-3 text-sm font-medium text-black font-inter bg-gradient-to-r from-[#C243FE] to-[#9B34CB] hover:opacity-90 transition-opacity">
                    Apply Now
                  </button>
                  </Link>
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <section className="relative overflow-hidden bg-Base pt-24 sm:pt-32 pb-16">
      {/* Header */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
        <span className="inline-block mb-6 rounded-full font-inter border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-4 py-1 text-xs text-[#60A5FA]">
          Careers
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-marcellus text-white">
          Build the{" "}
          <span className="bg-gradient-to-r from-[#C47DE8] to-[#5593F7] bg-clip-text text-transparent">
            Future
          </span>{" "}
          With Us
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-[14px] sm:text-[16px] md:text-[20px] font-poppins text-secondaryText">
          Join a team of passionate innovators working on AI-powered solutions
          that transform businesses worldwide.
        </p>

        {/* Filters */}
        {!loading && (
          <div className="my-8 sm:my-10 flex flex-nowrap justify-start sm:justify-center gap-3 sm:gap-6 overflow-x-auto px-4">
            {filterTags.map((tag) => (
              <FilterButton
                key={tag}
                label={tag}
                active={activeTag === tag}
                onClick={() => setActiveTag(tag)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Job List or State Messages */}
      {renderContent()}
    </section>
  )
}

function FilterButton({ label, active = false, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-5 sm:px-8 py-2 sm:py-3 text-[11px] sm:text-xs transition whitespace-nowrap
        ${
          active
            ? "bg-gradient-to-r from-[#AA229CEB] to-[#7547B0E3] text-white shadow-[0_0_20px_rgba(170,34,156,0.35)]"
            : "border border-white/10 bg-white/5 text-white/60 hover:bg-white/10"
        }`}
    >
      {label}
    </button>
  )
}