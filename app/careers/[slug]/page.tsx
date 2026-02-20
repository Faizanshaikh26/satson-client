// // "use client"

// // import { useEffect, useState } from "react"
// // import { useParams } from "next/navigation"
// // import api from "@/app/_lib/axios"

// // export default function JobApplyPage() {

// //  const { slug } = useParams()
// //   const [job, setJob] = useState<any>(null)
// //   const [loading, setLoading] = useState(true)

// //   useEffect(() => {
// //     const fetchJob = async () => {
// //       try {
// //         const res = await api.get(`/jobs/${slug}`)
// //         setJob(res.data)
// //       } catch (err) {
// //         console.error("Failed to load job", err)
// //       } finally {
// //         setLoading(false)
// //       }
// //     }

// //     if (slug) fetchJob()
// //   }, [slug])

// //   if (loading)
// //     return (
// //       <div className="min-h-screen flex items-center justify-center text-white">
// //         Loading...
// //       </div>
// //     )

// //   if (!job)
// //     return (
// //       <div className="min-h-screen flex items-center justify-center text-white">
// //         Job not found
// //       </div>
// //     )

// //     return (
// //         <section className="min-h-screen bg-Base px-6 pt-20 sm:pt-28 pb-16 text-white">

// //                <div className="pointer-events-none absolute top-[6%]   -left-40 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.35)_0%,rgba(122,59,255,0.0)_70%)] blur-[140px] hidden md:block" />
// //       <div className="pointer-events-none absolute top-[16%] -right-40 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.25)_0%,rgba(122,59,255,0.0)_70%)] blur-[140px] hidden md:block" />
// //             <div className="max-w-7xl mx-auto">

// //                 {/* Page Title */}
// //                 <h1 className="text-2xl md:text-5xl font-semibold mb-6 md:mb-14">
// //                     Apply for Senior AI/ML Engineer
// //                 </h1>

// //                 {/* Layout */}
// //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

// //                     {/* LEFT PANEL */}
// //                     <div className="lg:col-span-1  rounded-2xl bg-[#0E121F] border border-white/10 p-6 space-y-8">

// //                         {/* Job Requirements */}
// //                         <div>
// //                             <h3 className="text-[24px] font-inter font-semibold mb-4">Job Requirements</h3>

// //                             <ul className="space-y-1 text-[16px] font-inter text-secondaryText">
// //                                   <li>{job.type}</li>
// //                 <li>{job.location}</li>
// //                 <li>{job.tag}</li>
// //                             </ul>

// //                            {job.requirements && (
// //                 <>
// //                   <h4 className="mt-6 mb-3 text-[20px] font-medium font-inter text-secondaryText">
// //                     Skill Set Required
// //                   </h4>

// //                   <div className="grid grid-cols-2 gap-2 font-inter text-sm text-secondaryText">
// //                     {job.requirements.map((r: string, i: number) => (
// //                       <span key={i}>{r}</span>
// //                     ))}
// //                   </div>
// //                 </>
// //               )}

                            

                            
// //                         </div>

// //                         {/* Job Description */}
// //                         <div>
// //                             <h3 className="text-[24px] font-inter font-semibold mb-4">Job Description</h3>

// //                             {job.description}
// //                         </div>

// //                     </div>


// //                     {/* RIGHT PANEL – FORM */}
// //                     <div className="lg:col-span-2">
// //                         <div className="rounded-2xl bg-[#0E121F] border border-white/10 p-8">
// //                             <h2 className="text-[36px] font-i font-semibold mb-6">Job Application</h2>

// //                             <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

// //                                 {/* Inputs */}
// //                                 {[
// //                                     "Full Name",
// //                                     "Email",
// //                                     "Mobile Number",
// //                                     "Current Location",
// //                                 ].map((label) => (
// //                                     <div key={label}>
// //                                         <label className="text-sm text-secondaryText">{label}</label>
// //                                         <input
// //                                             type="text"
// //                                             placeholder={label}
// //                                             className="mt-2 w-full  border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-300"
// //                                         />
// //                                     </div>
// //                                 ))}

// //                                 {/* Selects */}
// //                                 {[
// //                                     "CGPA or % in Graduation",
// //                                     "Highest Qualification",
// //                                     "Are you Currently Employed",
// //                                     "Are you Ready to work from the office in Pune?",
                        
// //                                     "Upload your resume",
// //                                 ].map((label) => (
// //                                     <div key={label}>
// //                                         <label className="text-sm text-secondaryText">{label}</label>
// //                                         <select
// //                                             className="mt-2 w-full   border border-white/10 px-4 py-3 text-sm text-secondaryText focus:outline-none focus:border-white/18"
// //                                         >
// //                                             <option>Please select</option>
// //                                         </select>
// //                                     </div>
// //                                 ))}

// //                                 {/* Referral */}
// //                                 <div className="md:col-span-2">
// //                                     <label className="text-sm text-secondaryText">
// //                                         Referral (How you come to know about this position?)
// //                                     </label>
// //                                     <input
// //                                         type="text"
// //                                         placeholder="Eg. LinkedIn, Internshala, Instagram, etc."
// //                                         className="mt-2 w-full   border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-300"
// //                                     />
// //                                 </div>

// //                                 {/* Anti-bot */}
// //                                 <div>
// //                                     <label className="text-sm text-secondaryText">What is 6 + 4?</label>
// //                                     <input
// //                                         type="text"
// //                                         placeholder="Please select"
// //                                         className="mt-2 w-full   border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-300"
// //                                     />
// //                                 </div>

// //                                 {/* Submit */}
// //                                 <div className="md:col-span-2 mt-4">
// //                                     <button
// //                                         type="submit"
// //                                         className="w-full rounded   bg-gradient-to-r from-[#C243FE] to-[#9B34CB] py-3 text-sm font-medium text-black hover:opacity-90 transition"
// //                                     >
// //                                         Submit Application
// //                                     </button>
// //                                 </div>

// //                             </form>
// //                         </div>
// //                     </div>

// //                 </div>
// //             </div>
// //         </section>
// //     )
// // }



// "use client"

// import { useEffect, useState } from "react"
// import { useParams } from "next/navigation"
// import api from "@/app/_lib/axios"
// import { ArrowRight, Briefcase, MapPin, Tag, Upload } from "lucide-react"

// export default function JobApplyPage() {
//   const { slug } = useParams()
//   const [job, setJob] = useState<any>(null)
//   const [loading, setLoading] = useState(true)
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phoneNumber: "",
//     jobRole: "",
//     message: "",
//     resume: null
//   })

//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//        const res = await api.get(`/careers/${slug}`)

//         setJob(res.data)
//         // Pre-fill job role from the job data
//         setFormData(prev => ({ ...prev, jobRole: res.data?.title || "" }))
//       } catch (err) {
//         console.error("Failed to load job", err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     if (slug) fetchJob()
//   }, [slug])



//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData(prev => ({ ...prev, [name]: value }))
//   }

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setFormData(prev => ({ ...prev, resume: e.target.files[0] }))
//     }
//   }

 

//   if (loading)
//     return (
//       <div className="min-h-screen bg-[#080C16] flex items-center justify-center text-white font-poppins">
//         <div className="text-[#7588A3]">Loading...</div>
//       </div>
//     )

//   if (!job)
//     return (
//       <div className="min-h-screen bg-[#080C16] flex items-center justify-center text-white font-poppins">
//         <div className="text-[#7588A3]">Job not found</div>
//       </div>
//     )

//   return (
//     <main className="relative w-full bg-[#080C16] font-inter antialiased selection:bg-[#5593F7]/20 selection:text-white overflow-x-hidden min-h-screen">
//       {/* —— CORE GLOW —— */}
//       <div className="pointer-events-none fixed -top-[-7%] -left-30 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(85,147,247,0.28)_0%,rgba(85,147,247,0.0)_70%)] blur-[140px] hidden md:block" />
//       <div className="pointer-events-none fixed md:top-[10%] lg:top-0 -right-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(196,125,232,0.20)_0%,rgba(196,125,232,0.0)_70%)] blur-[140px] hidden md:block" />
      
//       {/* —— subtle grid —— */}
//       <div className="pointer-events-none fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0icmdiYSg4NSwxNDcsMjQ3LDAuMDIpIi8+PC9zdmc+')] opacity-20" />

//       {/* —— main container —— */}
//       <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pt-28 sm:pt-20 md:pt-32 pb-16">
        
//         {/* —— header with job title —— */}
//         <div className="mb-12 md:mb-16">
//           <div className="flex items-center gap-2 mb-6">
//             <span className="w-8 h-[2px] bg-gradient-to-r from-[#5593F7] to-[#C47DE8]" />
//             <span className="font-marcellus text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#7588A3]">Career opportunity</span>
//           </div>
//           <h1 className="font-playfairDisplay text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-white max-w-4xl">
//             Apply for
//             <span className="block mt-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//               {job.title || "Senior AI/ML Engineer"}
//             </span>
//           </h1>
//         </div>

//         {/* —— layout grid —— */}
//         <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
//           {/* —— LEFT PANEL - Job Details —— */}
//           <div className="lg:col-span-4 space-y-8">
            
//             {/* quick info cards */}
//             <div className="grid grid-cols-2 gap-3">
//               <div className="border border-white/5 bg-white/[0.02] rounded-xl p-4">
//                 <Briefcase size={16} className="text-[#5593F7] mb-2" />
//                 <p className="font-marcellus text-xs uppercase tracking-wider text-[#7588A3] mb-1">Job Type</p>
//                 <p className="font-poppins text-sm text-white">{job.type || "Full-time"}</p>
//               </div>
//               <div className="border border-white/5 bg-white/[0.02] rounded-xl p-4">
//                 <MapPin size={16} className="text-[#C47DE8] mb-2" />
//                 <p className="font-marcellus text-xs uppercase tracking-wider text-[#7588A3] mb-1">Location</p>
//                 <p className="font-poppins text-sm text-white">{job.location || "Pune"}</p>
//               </div>
//             </div>

//             {/* Job Requirements */}
//             <div className="border border-white/5 bg-white/[0.02] rounded-2xl p-6">
//               <h3 className="font-playfairDisplay text-xl text-white mb-4 flex items-center gap-2">
//                 <Tag size={16} className="text-[#5593F7]" />
//                 Job Requirements
//               </h3>
              
//               <div className="space-y-4">
//                 <div>
//                   <p className="font-marcellus text-xs uppercase tracking-wider text-[#7588A3] mb-2">Experience</p>
//                   <p className="font-poppins text-sm text-white/80">{job.experience || "5+ years"}</p>
//                 </div>
                
//                 {job.requirements && (
//                   <div>
//                     <p className="font-marcellus text-xs uppercase tracking-wider text-[#7588A3] mb-2">Skill Set Required</p>
//                     <div className="flex flex-wrap gap-2">
//                       {job.requirements.map((r: string, i: number) => (
//                         <span key={i} className="font-poppins text-xs px-3 py-1.5 border border-white/5 bg-white/[0.02] rounded-full text-[#7588A3]">
//                           {r}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Job Description */}
//             <div className="border border-white/5 bg-white/[0.02] rounded-2xl p-6">
//               <h3 className="font-playfairDisplay text-xl text-white mb-4">Job Description</h3>
//               <p className="font-poppins text-sm text-[#7588A3] leading-relaxed">
//                 {job.description || "We are looking for a passionate and experienced professional to join our team. You will be responsible for designing, developing, and implementing cutting-edge solutions that solve real business problems."}
//               </p>
//             </div>

//             {/* subtle meta */}
//             <div className="border-t border-white/5 pt-4 mt-4">
//               <p className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#7588A3]/30">
//                 posted · {job.postedAt || "recently"} · ref {job.id || "SAT-2024"}
//               </p>
//             </div>
//           </div>

//           {/* —— RIGHT PANEL - Application Form (updated with correct fields) —— */}
//           <div className="lg:col-span-8">
//             <div className="border border-white/5 bg-white/[0.02] rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm">
              
//               <div className="flex items-center gap-3 mb-8">
//                 <span className="w-8 h-[2px] bg-gradient-to-r from-[#5593F7] to-[#C47DE8]" />
//                 <span className="font-marcellus text-xs uppercase tracking-[0.25em] text-[#7588A3]">Submit your application</span>
//               </div>
              
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Full Name */}
//                 <div>
//                   <label className="font-marcellus text-xs uppercase tracking-wider text-[#7588A3] block mb-2">
//                     Full Name <span className="text-[#5593F7]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleInputChange}
//                     placeholder="John Doe"
//                     className="w-full bg-[#080C16] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#7588A3]/50 focus:outline-none focus:border-[#5593F7]/40 transition-colors font-poppins"
//                     required
//                   />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="font-marcellus text-xs uppercase tracking-wider text-[#7588A3] block mb-2">
//                     Email <span className="text-[#5593F7]">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="john@example.com"
//                     className="w-full bg-[#080C16] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#7588A3]/50 focus:outline-none focus:border-[#5593F7]/40 transition-colors font-poppins"
//                     required
//                   />
//                 </div>

//                 {/* Phone Number */}
//                 <div>
//                   <label className="font-marcellus text-xs uppercase tracking-wider text-[#7588A3] block mb-2">
//                     Phone Number <span className="text-[#5593F7]">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleInputChange}
//                     placeholder="+91 98765 43210"
//                     className="w-full bg-[#080C16] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#7588A3]/50 focus:outline-none focus:border-[#5593F7]/40 transition-colors font-poppins"
//                     required
//                   />
//                 </div>

//                 {/* Job Role (pre-filled, editable) */}
//                 <div>
//                   <label className="font-marcellus text-xs uppercase tracking-wider text-[#7588A3] block mb-2">
//                     Job Role <span className="text-[#5593F7]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="jobRole"
//                     value={formData.jobRole}
//                     onChange={handleInputChange}
//                     className="w-full bg-[#080C16] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#7588A3]/50 focus:outline-none focus:border-[#5593F7]/40 transition-colors font-poppins"
//                     required
//                   />
//                 </div>

//                 {/* Resume Upload */}
//                 <div>
//                   <label className="font-marcellus text-xs uppercase tracking-wider text-[#7588A3] block mb-2">
//                     Resume / CV <span className="text-[#5593F7]">*</span>
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="file"
//                       name="resume"
//                       onChange={handleFileChange}
//                       accept=".pdf,.doc,.docx"
//                       className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
//                       required
//                     />
//                     <div className="w-full bg-[#080C16] border border-white/10 px-4 py-3 text-sm text-[#7588A3] flex items-center gap-2">
//                       <Upload size={16} className="text-[#5593F7]" />
//                       <span>{formData.resume ? formData.resume.name : "Upload PDF or DOC"}</span>
//                     </div>
//                   </div>
//                   <p className="font-mono text-[8px] text-[#7588A3]/30 mt-1">Accepted formats: .pdf, .doc, .docx (max 5MB)</p>
//                 </div>

//                 {/* Message / Cover Letter */}
//                 <div>
//                   <label className="font-marcellus text-xs uppercase tracking-wider text-[#7588A3] block mb-2">
//                     Message / Cover Letter <span className="text-white/30">(optional)</span>
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     rows={4}
//                     placeholder="Tell us why you're interested in this role..."
//                     className="w-full bg-[#080C16] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#7588A3]/50 focus:outline-none focus:border-[#5593F7]/40 transition-colors font-poppins resize-none"
//                   />
//                 </div>

//                 {/* Submit Button */}
//                 <div className="pt-4">
//                   <button
//                     type="submit"
//                     className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#5593F7] to-[#C47DE8] text-white font-marcellus text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
//                   >
//                     <span className="relative z-10 flex items-center gap-3">
//                       Submit Application
//                       <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//                     </span>
//                     <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
//                   </button>
                  
//                   <p className="font-mono text-[8px] text-[#7588A3]/30 mt-4">
//                     * Required fields · Your data is handled according to our privacy policy
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* —— footer line —— */}
//         <div className="mt-16 pt-8 border-t border-white/5">
//           <div className="flex justify-between items-center">
//             <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#7588A3]/30">
//               Satson Innovation · Careers
//             </span>
//             <span className="font-mono text-[8px] text-[#7588A3]/30">
//               est. 2021
//             </span>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }




"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import api from "@/app/_lib/axios"
import { ArrowRight, Briefcase, MapPin, Tag, Upload } from "lucide-react"
import toast from "react-hot-toast"
import axios from "axios"

interface Job {
  id: string;
  _id: string;
  title: string;      // From mapping
  role: string;       // Original field
  team: string;
  type: string;       // From mapping (workTime)
  workTime: string;   // Original field
  location: string;
  experience: string;
  requirements: string[];
  description: string;
  postedAt: string;
  salaryRange: string;
  slug: string;
}

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  jobRole: string;
  message: string;
  resume: File | null;
}

interface ApplyResponse {
  success?: boolean;
  message?: string;
  [key: string]: any;
}

export default function JobApplyPage() {
  const { slug } = useParams()
  const [job, setJob] = useState<Job | null>(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    jobRole: "",
    message: "",
    resume: null
  })

 useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true)
        // Use the correct API endpoint
        const res = await api.get(`/careers/${slug}`)
        
        // Log the response to see what we're getting
        console.log("Job data received:", res.data)
        
        // Handle different response structures
        const jobData = res.data?.data || res.data
        
        setJob(jobData)
        // Pre-fill job role from the job data (try different possible field names)
        setFormData(prev => ({ 
          ...prev, 
          jobRole: jobData?.title || jobData?.role || "" 
        }))
      } catch (err) {
        console.error("Failed to load job", err)
        toast.error("Failed to load job details")
      } finally {
        setLoading(false)
      }
    }

    if (slug) fetchJob()
  }, [slug])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Validate file size (5MB limit)
      if (selectedFile.size > 5 * 1024 * 1024) {
        toast.error("File size should be less than 5MB");
        e.target.value = ''; // Clear the input
        return;
      }
      
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(selectedFile.type)) {
        toast.error("Please upload only PDF or DOC files");
        e.target.value = ''; // Clear the input
        return;
      }
      
      setFormData(prev => ({ ...prev, resume: selectedFile }));
    }
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // Validate required fields
  //   if (!formData.fullName.trim()) {
  //     return toast.error("Please enter your full name");
  //   }
  //   if (!formData.email.trim()) {
  //     return toast.error("Please enter your email");
  //   }
  //   if (!formData.phoneNumber.trim()) {
  //     return toast.error("Please enter your phone number");
  //   }
  //   if (!formData.resume) {
  //     return toast.error("Please upload your resume before submitting.");
  //   }

  //   // Email validation
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(formData.email)) {
  //     return toast.error("Please enter a valid email address");
  //   }

  //   // Phone validation (basic)
  //   const phoneRegex = /^[\d\s\+\-\(\)]{10,}$/;
  //   if (!phoneRegex.test(formData.phoneNumber)) {
  //     return toast.error("Please enter a valid phone number");
  //   }

  //   try {
  //     setSubmitting(true);
  //     const formDataToSend = new FormData();
      
  //     // Append all form fields
  //     formDataToSend.append("fullName", formData.fullName.trim());
  //     formDataToSend.append("email", formData.email.trim());
  //     formDataToSend.append("phoneNumber", formData.phoneNumber.trim());
  //     formDataToSend.append("jobRole", formData.jobRole);
  //     formDataToSend.append("message", formData.message.trim());
  //     formDataToSend.append("files", formData.resume);

  //     // Use the correct API endpoint
  //     const res = await axios.post<ApplyResponse>(
  //       `${process.env.NEXT_PUBLIC_API_URL}/careers/apply`,
  //       formDataToSend,
  //       {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       }
  //     );

  //     // Check response status and data structure
  //     if (res.status === 200 || res.status === 201 || res.data?.success) {
  //       toast.success("Application submitted successfully!");
        
  //       // Reset form
  //       setFormData({
  //         fullName: "",
  //         email: "",
  //         phoneNumber: "",
  //         jobRole: job?.title || "",
  //         message: "",
  //         resume: null
  //       });
        
  //       // Reset file input by clearing the input value
  //       const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
  //       if (fileInput) fileInput.value = '';
        
  //     } else {
  //       toast.error(res.data?.message || "Something went wrong.");
  //     }
  //   } catch (err) {
  //     console.error("Submission error:", err);
      
  //     // Better error handling
  //     if (axios.isAxiosError(err)) {
  //       const errorMessage = err.response?.data?.message || err.message;
  //       toast.error(`Submission failed: ${errorMessage}`);
  //     } else {
  //       toast.error("Submission failed. Please try again.");
  //     }
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };


  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Validate required fields
  if (!formData.fullName.trim()) {
    return toast.error("Please enter your full name");
  }
  if (!formData.email.trim()) {
    return toast.error("Please enter your email");
  }
  if (!formData.phoneNumber.trim()) {
    return toast.error("Please enter your phone number");
  }
  if (!formData.jobRole.trim()) {
    return toast.error("Job role is required");
  }
  if (!formData.resume) {
    return toast.error("Please upload your resume before submitting.");
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return toast.error("Please enter a valid email address");
  }

  // Phone validation (basic)
  const phoneRegex = /^[\d\s\+\-\(\)]{10,}$/;
  if (!phoneRegex.test(formData.phoneNumber)) {
    return toast.error("Please enter a valid phone number");
  }

  try {
    setSubmitting(true);
    const formDataToSend = new FormData();
    
    // Append all form fields matching backend expectations
    formDataToSend.append("fullName", formData.fullName.trim());
    formDataToSend.append("email", formData.email.trim());
    formDataToSend.append("phoneNumber", formData.phoneNumber.trim()); // Make sure this matches
    formDataToSend.append("jobRole", formData.jobRole);
    formDataToSend.append("message", formData.message.trim());
    formDataToSend.append("files", formData.resume); 

    // Use the correct API endpoint with slug
    const res = await axios.post<ApplyResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}/careers/apply/${slug}`, // Fixed URL
      formDataToSend,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    // Check response status and data structure
    if (res.status === 200 || res.status === 201 || res.data?.success) {
      toast.success("Application submitted successfully!");
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        jobRole: job?.title || "",
        message: "",
        resume: null
      });
      
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
    } else {
      toast.error(res.data?.message || "Something went wrong.");
    }
  } catch (err) {
    console.error("Submission error:", err);
    
    // Better error handling
    if (axios.isAxiosError(err)) {
      const errorMessage = err.response?.data?.message || err.message;
      toast.error(`Submission failed: ${errorMessage}`);
    } else {
      toast.error("Submission failed. Please try again.");
    }
  } finally {
    setSubmitting(false);
  }
};
   if (loading) {
    return (
      <div className="min-h-screen bg-[#080C16] flex items-center justify-center text-white font-poppins">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#5593F7] border-t-transparent rounded-full animate-spin"></div>
          <div className="text-[#7588A3]">Loading job details...</div>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-[#080C16] flex items-center justify-center text-white font-poppins">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <div className="text-[#7588A3] text-xl mb-2">Job not found</div>
          <p className="text-[#7588A3]/60 text-sm">The job you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="relative w-full bg-[#080C16] font-inter antialiased selection:bg-[#5593F7]/20 selection:text-white overflow-x-hidden min-h-screen">
      {/* Glow effects (same as before) */}
      <div className="pointer-events-none fixed -top-[-7%] -left-30 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(85,147,247,0.28)_0%,rgba(85,147,247,0.0)_70%)] blur-[140px] hidden md:block" />
      <div className="pointer-events-none fixed md:top-[10%] lg:top-0 -right-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(196,125,232,0.20)_0%,rgba(196,125,232,0.0)_70%)] blur-[140px] hidden md:block" />
      
      {/* Subtle grid */}
      <div className="pointer-events-none fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0icmdiYSg4NSwxNDcsMjQ3LDAuMDIpIi8+PC9zdmc+')] opacity-20" />

      {/* Main container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pt-28 sm:pt-20 md:pt-32 pb-16">
        
        {/* Header with job title */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#5593F7] to-[#C47DE8]" />
            <span className="font-marcellus text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#7588A3]">Career opportunity</span>
          </div>
          <h1 className="font-playfairDisplay text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-white max-w-4xl">
            Apply for
            <span className="block mt-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
              {job.title || job.role}
            </span>
          </h1>
        </div>

        {/* Layout grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT PANEL - Job Details */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Quick info cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-white/5 bg-white/[0.02] rounded-xl p-4">
                <Briefcase size={16} className="text-[#5593F7] mb-2" />
                <p className="font-marcellus text-xs uppercase tracking-wider text-[#7588A3] mb-1">Job Type</p>
                <p className="font-poppins text-sm text-white">{job.type || job.workTime || "Full-time"}</p>
              </div>
              <div className="border border-white/5 bg-white/[0.02] rounded-xl p-4">
                <MapPin size={16} className="text-[#C47DE8] mb-2" />
                <p className="font-marcellus text-xs uppercase tracking-wider text-[#7588A3] mb-1">Location</p>
                <p className="font-poppins text-sm text-white">{job.location || "Pune"}</p>
              </div>
            </div>

            {/* Team/Department */}
            {job.team && (
              <div className="border border-white/5 bg-white/[0.02] rounded-2xl p-6">
                <h3 className="font-playfairDisplay text-xl text-white mb-4 flex items-center gap-2">
                  <Tag size={16} className="text-[#5593F7]" />
                  Department
                </h3>
                <p className="font-poppins text-sm text-white/80">{job.team}</p>
              </div>
            )}

            {/* Job Requirements */}
            <div className="border border-white/5 bg-white/[0.02] rounded-2xl p-6">
              <h3 className="font-playfairDisplay text-xl text-white mb-4 flex items-center gap-2">
                <Tag size={16} className="text-[#5593F7]" />
                Requirements
              </h3>
              
              <div className="space-y-4">
                {job.experience && (
                  <div>
                    <p className="font-marcellus text-xs uppercase tracking-wider text-[#7588A3] mb-2">Experience</p>
                    <p className="font-poppins text-sm text-white/80">{job.experience}</p>
                  </div>
                )}
                
                {job.requirements && job.requirements.length > 0 && (
                  <div>
                    <p className="font-marcellus text-xs uppercase tracking-wider text-[#7588A3] mb-2">Skills Required</p>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req: string, i: number) => (
                        <span key={i} className="font-poppins text-xs px-3 py-1.5 border border-white/5 bg-white/[0.02] rounded-full text-[#7588A3]">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Job Description */}
            <div className="border border-white/5 bg-white/[0.02] rounded-2xl p-6">
              <h3 className="font-playfairDisplay text-xl text-white mb-4">Job Description</h3>
              <div 
                className="font-poppins text-sm text-[#7588A3] leading-relaxed prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: job.description || "No description provided." }}
              />
            </div>

            {/* Salary info if available */}
            {job.salaryRange && (
              <div className="border border-white/5 bg-white/[0.02] rounded-2xl p-6">
                <h3 className="font-playfairDisplay text-xl text-white mb-4">Salary Range</h3>
                <p className="font-poppins text-sm text-white/80">{job.salaryRange}</p>
              </div>
            )}

            {/* Subtle meta */}
            <div className="border-t border-white/5 pt-4 mt-4">
              <p className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#7588A3]/30">
                posted · {job.postedAt ? new Date(job.postedAt).toLocaleDateString() : "recently"} · ref {job.id || job._id?.slice(-6)}
              </p>
            </div>
          </div>

          {/* RIGHT PANEL - Application Form */}
          <div className="lg:col-span-8">
            <div className="border border-white/5 bg-white/[0.02] rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm">
              
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-[2px] bg-gradient-to-r from-[#5593F7] to-[#C47DE8]" />
                <span className="font-marcellus text-xs uppercase tracking-[0.25em] text-[#7588A3]">Submit your application</span>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="font-marcellus text-xs uppercase tracking-wider text-[#7588A3] block mb-2">
                    Full Name <span className="text-[#5593F7]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full bg-[#080C16] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#7588A3]/50 focus:outline-none focus:border-[#5593F7]/40 transition-colors font-poppins"
                    required
                    disabled={submitting}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-marcellus text-xs uppercase tracking-wider text-[#7588A3] block mb-2">
                    Email <span className="text-[#5593F7]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full bg-[#080C16] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#7588A3]/50 focus:outline-none focus:border-[#5593F7]/40 transition-colors font-poppins"
                    required
                    disabled={submitting}
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="font-marcellus text-xs uppercase tracking-wider text-[#7588A3] block mb-2">
                    Phone Number <span className="text-[#5593F7]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#080C16] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#7588A3]/50 focus:outline-none focus:border-[#5593F7]/40 transition-colors font-poppins"
                    required
                    disabled={submitting}
                  />
                </div>

                {/* Job Role (pre-filled, editable) */}
                <div>
                  <label className="font-marcellus text-xs uppercase tracking-wider text-[#7588A3] block mb-2">
                    Job Role <span className="text-[#5593F7]">*</span>
                  </label>
                  <input
                    type="text"
                    name="jobRole"
                    value={formData.jobRole}
                    onChange={handleInputChange}
                    className="w-full bg-[#080C16] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#7588A3]/50 focus:outline-none focus:border-[#5593F7]/40 transition-colors font-poppins"
                    required
                    disabled={submitting}
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="font-marcellus text-xs uppercase tracking-wider text-[#7588A3] block mb-2">
                    Resume / CV <span className="text-[#5593F7]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 disabled:cursor-not-allowed"
                      required
                      disabled={submitting}
                    />
                    <div className={`w-full bg-[#080C16] border border-white/10 px-4 py-3 text-sm text-[#7588A3] flex items-center gap-2 ${submitting ? 'opacity-50' : ''}`}>
                      <Upload size={16} className="text-[#5593F7]" />
                      <span className="truncate">
                        {formData.resume ? formData.resume.name : "Upload PDF or DOC"}
                      </span>
                    </div>
                  </div>
                  <p className="font-mono text-[8px] text-[#7588A3]/30 mt-1">Accepted formats: .pdf, .doc, .docx (max 5MB)</p>
                </div>

                {/* Message / Cover Letter */}
                <div>
                  <label className="font-marcellus text-xs uppercase tracking-wider text-[#7588A3] block mb-2">
                    Message / Cover Letter <span className="text-white/30">(optional)</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us why you're interested in this role..."
                    className="w-full bg-[#080C16] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#7588A3]/50 focus:outline-none focus:border-[#5593F7]/40 transition-colors font-poppins resize-none"
                    disabled={submitting}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#5593F7] to-[#C47DE8] text-white font-marcellus text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:opacity-90 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 w-full sm:w-auto"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {submitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>
                  
                  <p className="font-mono text-[8px] text-[#7588A3]/30 mt-4">
                    * Required fields · Your data is handled according to our privacy policy
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer line */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex justify-between items-center">
            <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#7588A3]/30">
              Satson Innovation · Careers
            </span>
            <span className="font-mono text-[8px] text-[#7588A3]/30">
              est. 2021
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}