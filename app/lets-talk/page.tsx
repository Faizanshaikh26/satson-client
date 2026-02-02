
// "use client"

// import { MessageCirclePlusIcon } from "lucide-react"

// export default function LetsTalk() {
//   return (
//     <main className="min-h-screen bg-Base relative overflow-hidden px-4 pt-20 sm:pt-28 pb-16">
      
//       {/* Background glows */}
//       <div className="pointer-events-none absolute top-[20%] -left-40 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.35)_0%,rgba(122,59,255,0.0)_70%)] blur-[120px] hidden md:block" />
//       <div className="pointer-events-none absolute top-[30px] -right-40 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.25)_0%,rgba(122,59,255,0.0)_70%)] blur-[120px] hidden md:block" />

//       {/* Header */}
//       <div className="relative z-10 text-center max-w-4xl mx-auto">
//            <span className="inline-block mb-6 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-4 py-1 text-xs text-[#60A5FA]">
//           Schedule a Call
//         </span>

//         <h1 className="text-4xl md:text-5xl font-playfairDisplay font-semibold text-white">
//           Let&apos;s{" "}
//           <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//             Talk
//           </span>
//         </h1>

//         <p className="mt-4 text-[18px] max-w-2xl mx-auto md:text-base text-secondaryText font-inter">
//           Get a free consultation and project estimate. No commitment, no
//           pressure — just honest advice on how to achieve your goals.
//         </p>
//       </div>

//       {/* Content Grid */}
//       <div className="relative z-10 mt-8 md:mt-16 grid max-w-7xl mx-auto grid-cols-1 lg:grid-cols-2 gap-8">

//         {/* LEFT: Date & Time */}
//         <div className="space-y-6">

//           {/* Select Date */}
//           <div className="rounded-xl border border-white/5 p-6">
//             <h3 className="mb-4 text-sm font-medium font-playfairDisplay text-white">
//               Select a Date
//             </h3>

//             <div className="grid grid-cols-4 gap-3">
//               {Array.from({ length: 12 }).map((_, i) => (
//                 <button
//                   key={i}
//                   className="rounded-lg border border-white/10 px-3 py-4 text-xs text-white/70 hover:bg-white/10"
//                 >
//                   <div className="text-[10px] text-secondaryText font-poppins">Thu</div>
//                   <div className="text-sm font-medium font-playfairDisplay">12</div>
//                   <div className="text-[10px] text-secondaryText font-inter">Jan</div>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Select Time */}
//           <div className="rounded-xl border border-white/5 p-6">
//             <h3 className="mb-4 text-sm font-medium text-white">
//               Select a Time
//             </h3>

//             <div className="grid grid-cols-3 gap-3">
//               {[
//                 "10:00 - 10:30AM",
//                 "10:30 - 11:00AM",
//                 "11:00 - 11:30AM",
//                 "12:00 - 12:30PM",
//                 "1:00 - 1:30PM",
//                 "2:00 - 2:30PM",
//                 "3:30 - 4:00PM",
//                 "4:00 - 4:30PM",
//                 "5:00 - 5:30PM",
//               ].map((time) => (
//                 <button
//                   key={time}
//                   className="rounded-lg border border-white/10  px-3 py-3 text-xs text-white/70 hover:bg-white/10"
//                 >
//                   {time}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: Form */}
//         <div className="rounded-xl border border-white/5 p-6">
//           <h3 className="mb-2 flex items-center gap-2 text-sm font-medium text-white">
//             <span className="text-[#60A5FA]">
                
//                 <MessageCirclePlusIcon size={20}/>

//                 </span> Get in Touch
//           </h3>
//           <p className="mb-6 text-[14px] text-white/50 font-poppins">
//             Fill out the form below and we&apos;ll get back to you within 24 hours.
//           </p>

//           <div className="grid grid-cols-2 gap-4 font-poppins">
//             <input placeholder="First Name *" className="input" />
//             <input placeholder="Last Name *" className="input" />
//             <input placeholder="Email *" className="input col-span-2" />
//             <input placeholder="Phone" className="input" />
//             <input placeholder="Company" className="input" />
//             <input placeholder="Service Interested In" className="input" />
//             <input placeholder="Budget Range" className="input" />
//             <textarea
//               placeholder="Tell us about your project *"
//               className="input col-span-2 h-28 resize-none"
//             />
//           </div>

//           <p className="mt-4 text-[12px] text-secondaryText">
//             By submitting, you agree to our Privacy Policy. We’ll never share your data.
//           </p>
//         </div>
//       </div>

//       {/* Confirm Button */}
//       <div className="relative z-10 max-w-7xl mx-auto mt-10">
//         <button className="w-full rounded-lg    bg-gradient-to-r from-[#C243FE] to-[#9B34CB] py-4 text-sm font-medium text-white hover:opacity-90">
//           Confirm Booking
//         </button>
//       </div>

//       {/* Input utility */}
//       <style jsx global>{`
//         .input {
//           width: 100%;
//           border-radius: 0.5rem;
//           border: 1px solid rgba(255,255,255,0.1);
//           background: rgba(255,255,255,0.05);
//           padding: 0.75rem;
//           font-size: 0.75rem;
//           color: white;
//           outline: none;
//         }
//         .input::placeholder {
//           color: rgba(255,255,255,0.4);
          
//         }
//       `}</style>
//     </main>
//   )
// }



"use client"

import { MessageCirclePlusIcon } from "lucide-react"
import { useEffect, useState, useCallback, useMemo, ChangeEvent } from "react"
import toast from "react-hot-toast"
import api from "../_lib/axios"

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  service: string
  budget: string
  message: string
}

export default function LetsTalk() {
  const [dates, setDates] = useState<Date[]>([])
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })

  // Generate dates once on mount
  useEffect(() => {
    const today = new Date()
    const newDates: Date[] = []

    for (let i = 0; i < 12; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      newDates.push(date)
    }

    setDates(newDates)
  }, [])

  // Memoized time slots
  const timeSlots = useMemo(() => [
    "10:00 - 10:30AM",
    "10:30 - 11:00AM",
    "11:00 - 11:30AM",
    "12:00 - 12:30PM",
    "1:00 - 1:30PM",
    "2:00 - 2:30PM",
    "3:30 - 4:00PM",
    "4:00 - 4:30PM",
    "5:00 - 5:30PM",
  ], [])

  // Optimized handlers
  const handleChange = useCallback((key: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }))
  }, [])

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name in form) {
      handleChange(name as keyof FormData, value)
    }
  }, [form, handleChange])

  const handleSubmit = useCallback(async () => {
    if (!selectedDate || !selectedTime) {
      toast.error("Please select date and time")
      return
    }

    try {
      setLoading(true)
      await api.post("/booking", {
        selectedDate,
        selectedTime,
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        message: form.message,
      })
      toast.success("Booking confirmed 🚀")
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Booking failed")
    } finally {
      setLoading(false)
    }
  }, [selectedDate, selectedTime, form])

  // Pre-calculated date strings for performance
  const dateButtons = useMemo(() =>
    dates.map((d, i) => {
      const full = d.toISOString().split("T")[0]
      return {
        key: i,
        day: d.toLocaleDateString("en-US", { weekday: "short" }),
        date: d.getDate(),
        month: d.toLocaleDateString("en-US", { month: "short" }),
        full,
      }
    }), [dates]
  )

  return (
    <main className="min-h-screen bg-Base relative overflow-hidden px-4 pt-20 sm:pt-28 pb-16">

      {/* Background glows */}
      <div className="pointer-events-none absolute top-[20%] -left-40 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.35)_0%,rgba(122,59,255,0.0)_70%)] blur-[120px] hidden md:block" />
      <div className="pointer-events-none absolute top-[30px] -right-40 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.25)_0%,rgba(122,59,255,0.0)_70%)] blur-[120px] hidden md:block" />

      {/* Header */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <span className="inline-block mb-6 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-4 py-1 text-xs text-[#60A5FA]">
          Schedule a Call
        </span>

        <h1 className="text-4xl md:text-5xl font-playfairDisplay font-semibold text-white">
          Let&apos;s{" "}
          <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
            Talk
          </span>
        </h1>

        <p className="mt-4 text-[18px] max-w-2xl mx-auto md:text-base text-secondaryText font-inter">
          Get a free consultation and project estimate. No commitment, no
          pressure — just honest advice on how to achieve your goals.
        </p>
      </div>

      {/* Content Grid */}
      <div className="relative z-10 mt-8 md:mt-16 grid max-w-7xl mx-auto grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT: Date & Time */}
        <div className="space-y-6">
          {/* Select Date */}
          <div className="rounded-xl border border-white/5 p-6">
            <h3 className="mb-4 text-sm font-medium font-playfairDisplay text-white">
              Select a Date
            </h3>

            <div className="grid grid-cols-4 gap-3">
              {dateButtons.map(({ key, day, date, month, full }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedDate(full)}
                  className={`rounded-lg border px-3 py-4 text-xs transition-colors
                    ${selectedDate === full
                      ? "border-purple-500 bg-purple-500/10"
                      : "border-white/10 hover:border-white/20"}
                  `}
                >
                  <div className="text-[10px] text-secondaryText">{day}</div>
                  <div className="text-sm font-medium">{date}</div>
                  <div className="text-[10px] text-secondaryText">{month}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Select Time */}
          <div className="rounded-xl border border-white/5 p-6">
            <h3 className="mb-4 text-sm font-medium text-white">
              Select a Time
            </h3>

            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`rounded-lg border px-3 py-3 text-xs transition-colors
                    ${selectedTime === time
                      ? "border-purple-500 bg-purple-500/10"
                      : "border-white/10 hover:border-white/20"}
                  `}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="rounded-xl border border-white/5 p-6">
  <h3 className="mb-2 flex items-center gap-2 text-sm font-medium text-white">
    <span className="text-[#60A5FA]">
      <MessageCirclePlusIcon size={20} />
    </span>
    Get in Touch
  </h3>

  <p className="mb-6 text-[14px] font-poppins text-white/50">
    Fill out the form below and we&apos;ll get back to you within 24 hours.
  </p>

  {/* FORM GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-poppins">
    <input
      name="firstName"
      placeholder="First Name *"
      className="input w-full"
      value={form.firstName}
      onChange={handleInputChange}
    />

    <input
      name="lastName"
      placeholder="Last Name *"
      className="input w-full"
      value={form.lastName}
      onChange={handleInputChange}
    />

    <input
      name="email"
      type="email"
      placeholder="Email *"
      className="input w-full md:col-span-2"
      value={form.email}
      onChange={handleInputChange}
    />

    <input
      name="phone"
      type="tel"
      placeholder="Phone"
      className="input w-full"
      value={form.phone}
      onChange={handleInputChange}
    />

    <input
      name="company"
      placeholder="Company"
      className="input w-full"
      value={form.company}
      onChange={handleInputChange}
    />

    <input
      name="service"
      placeholder="Service Interested In"
      className="input w-full"
      value={form.service}
      onChange={handleInputChange}
    />

    <input
      name="budget"
      placeholder="Budget Range"
      className="input w-full"
      value={form.budget}
      onChange={handleInputChange}
    />

    <textarea
      name="message"
      placeholder="Tell us about your project *"
      className="input w-full h-28 resize-none md:col-span-2"
      value={form.message}
      onChange={handleInputChange}
    />
  </div>

  <p className="mt-4 text-[12px] text-secondaryText">
    By submitting, you agree to our Privacy Policy. We&apos;ll never share your data.
  </p>
</div>



      </div>

      {/* Confirm Button */}
      <div className="relative z-10 max-w-7xl mx-auto mt-10">
        <button
          type="button"
          disabled={loading || !selectedDate || !selectedTime}
          onClick={handleSubmit}
          className="w-full rounded-lg bg-gradient-to-r from-[#C243FE] to-[#9B34CB] py-4 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          {loading ? "Booking..." : "Confirm Booking"}
        </button>
      </div>

      {/* Input utility */}
      <style jsx global>{`
        .input {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          padding: 0.75rem;
          font-size: 0.75rem;
          color: white;
          outline: none;
          transition: border-color 0.2s;
        }
        .input:hover,
        .input:focus {
          border-color: rgba(255,255,255,0.3);
        }
        .input::placeholder {
          color: rgba(255,255,255,0.4);
        }
      `}</style>
    </main>
  )
}