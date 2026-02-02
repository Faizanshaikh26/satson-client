"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import api from "@/app/_lib/axios"

export default function JobApplyPage() {

 const { slug } = useParams()
  const [job, setJob] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await api.get(`/jobs/${slug}`)
        setJob(res.data)
      } catch (err) {
        console.error("Failed to load job", err)
      } finally {
        setLoading(false)
      }
    }

    if (slug) fetchJob()
  }, [slug])

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    )

  if (!job)
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Job not found
      </div>
    )

    return (
        <section className="min-h-screen bg-Base px-6 pt-20 sm:pt-28 pb-16 text-white">

               <div className="pointer-events-none absolute top-[6%]   -left-40 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.35)_0%,rgba(122,59,255,0.0)_70%)] blur-[140px] hidden md:block" />
      <div className="pointer-events-none absolute top-[16%] -right-40 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.25)_0%,rgba(122,59,255,0.0)_70%)] blur-[140px] hidden md:block" />
            <div className="max-w-7xl mx-auto">

                {/* Page Title */}
                <h1 className="text-2xl md:text-5xl font-semibold mb-6 md:mb-14">
                    Apply for Senior AI/ML Engineer
                </h1>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* LEFT PANEL */}
                    <div className="lg:col-span-1  rounded-2xl bg-[#0E121F] border border-white/10 p-6 space-y-8">

                        {/* Job Requirements */}
                        <div>
                            <h3 className="text-[24px] font-inter font-semibold mb-4">Job Requirements</h3>

                            <ul className="space-y-1 text-[16px] font-inter text-secondaryText">
                                  <li>{job.type}</li>
                <li>{job.location}</li>
                <li>{job.tag}</li>
                            </ul>

                           {job.requirements && (
                <>
                  <h4 className="mt-6 mb-3 text-[20px] font-medium font-inter text-secondaryText">
                    Skill Set Required
                  </h4>

                  <div className="grid grid-cols-2 gap-2 font-inter text-sm text-secondaryText">
                    {job.requirements.map((r: string, i: number) => (
                      <span key={i}>{r}</span>
                    ))}
                  </div>
                </>
              )}

                            

                            
                        </div>

                        {/* Job Description */}
                        <div>
                            <h3 className="text-[24px] font-inter font-semibold mb-4">Job Description</h3>

                            {job.description}
                        </div>

                    </div>


                    {/* RIGHT PANEL – FORM */}
                    <div className="lg:col-span-2">
                        <div className="rounded-2xl bg-[#0E121F] border border-white/10 p-8">
                            <h2 className="text-[36px] font-i font-semibold mb-6">Job Application</h2>

                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* Inputs */}
                                {[
                                    "Full Name",
                                    "Email",
                                    "Mobile Number",
                                    "Current Location",
                                ].map((label) => (
                                    <div key={label}>
                                        <label className="text-sm text-secondaryText">{label}</label>
                                        <input
                                            type="text"
                                            placeholder={label}
                                            className="mt-2 w-full  border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-300"
                                        />
                                    </div>
                                ))}

                                {/* Selects */}
                                {[
                                    "CGPA or % in Graduation",
                                    "Highest Qualification",
                                    "Are you Currently Employed",
                                    "Are you Ready to work from the office in Pune?",
                        
                                    "Upload your resume",
                                ].map((label) => (
                                    <div key={label}>
                                        <label className="text-sm text-secondaryText">{label}</label>
                                        <select
                                            className="mt-2 w-full   border border-white/10 px-4 py-3 text-sm text-secondaryText focus:outline-none focus:border-white/18"
                                        >
                                            <option>Please select</option>
                                        </select>
                                    </div>
                                ))}

                                {/* Referral */}
                                <div className="md:col-span-2">
                                    <label className="text-sm text-secondaryText">
                                        Referral (How you come to know about this position?)
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Eg. LinkedIn, Internshala, Instagram, etc."
                                        className="mt-2 w-full   border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-300"
                                    />
                                </div>

                                {/* Anti-bot */}
                                <div>
                                    <label className="text-sm text-secondaryText">What is 6 + 4?</label>
                                    <input
                                        type="text"
                                        placeholder="Please select"
                                        className="mt-2 w-full   border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-300"
                                    />
                                </div>

                                {/* Submit */}
                                <div className="md:col-span-2 mt-4">
                                    <button
                                        type="submit"
                                        className="w-full rounded   bg-gradient-to-r from-[#C243FE] to-[#9B34CB] py-3 text-sm font-medium text-black hover:opacity-90 transition"
                                    >
                                        Submit Application
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
