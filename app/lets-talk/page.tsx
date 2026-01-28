
"use client"

import { MessageCirclePlusIcon } from "lucide-react"

export default function LetsTalk() {
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
              {Array.from({ length: 12 }).map((_, i) => (
                <button
                  key={i}
                  className="rounded-lg border border-white/10 px-3 py-4 text-xs text-white/70 hover:bg-white/10"
                >
                  <div className="text-[10px] text-secondaryText font-poppins">Thu</div>
                  <div className="text-sm font-medium font-playfairDisplay">12</div>
                  <div className="text-[10px] text-secondaryText font-inter">Jan</div>
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
              {[
                "10:00 - 10:30AM",
                "10:30 - 11:00AM",
                "11:00 - 11:30AM",
                "12:00 - 12:30PM",
                "1:00 - 1:30PM",
                "2:00 - 2:30PM",
                "3:30 - 4:00PM",
                "4:00 - 4:30PM",
                "5:00 - 5:30PM",
              ].map((time) => (
                <button
                  key={time}
                  className="rounded-lg border border-white/10  px-3 py-3 text-xs text-white/70 hover:bg-white/10"
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
                
                <MessageCirclePlusIcon size={20}/>

                </span> Get in Touch
          </h3>
          <p className="mb-6 text-[14px] text-white/50 font-poppins">
            Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>

          <div className="grid grid-cols-2 gap-4 font-poppins">
            <input placeholder="First Name *" className="input" />
            <input placeholder="Last Name *" className="input" />
            <input placeholder="Email *" className="input col-span-2" />
            <input placeholder="Phone" className="input" />
            <input placeholder="Company" className="input" />
            <input placeholder="Service Interested In" className="input" />
            <input placeholder="Budget Range" className="input" />
            <textarea
              placeholder="Tell us about your project *"
              className="input col-span-2 h-28 resize-none"
            />
          </div>

          <p className="mt-4 text-[12px] text-secondaryText">
            By submitting, you agree to our Privacy Policy. We’ll never share your data.
          </p>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="relative z-10 max-w-7xl mx-auto mt-10">
        <button className="w-full rounded-lg    bg-gradient-to-r from-[#C243FE] to-[#9B34CB] py-4 text-sm font-medium text-white hover:opacity-90">
          Confirm Booking
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
        }
        .input::placeholder {
          color: rgba(255,255,255,0.4);
          
        }
      `}</style>
    </main>
  )
}
