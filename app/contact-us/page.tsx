// "use client"

// import {
//   Phone,
//   Mail,
//   MessageCircle,
//   Calendar,
//   MapPin,
//   Clock,
// } from "lucide-react"

// export default function ContactPage() {
//   return (
//     <section className="min-h-screen bg-Base px-6 py-34 text-white">


//       <div className="pointer-events-none absolute top-[6%] -left-40 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.35)_0%,rgba(122,59,255,0.0)_70%)] blur-[140px] hidden md:block " />
//       <div className="pointer-events-none absolute top-[6%] -right-40 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.25)_0%,rgba(122,59,255,0.0)_70%)] blur-[140px] md:block hidden" />
//       <div className="max-w-4xl mx-auto text-center mb-20">

//         <span className="inline-block mb-6 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-4 py-1 text-xs text-[#60A5FA]">
//           Our Services
//         </span>

//         <h2 className="text-4xl md:text-6xl font-marcellus text-white">

//           Let&apos;s Build {" "}

//           <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//             AI-Powered
//           </span>


//         </h2>

//         <p className="mt-4 text-[20px] text-secondaryText max-w-2xl font-inter mx-auto">
//           Get a free consultation and project estimate. No commitment, no pressure — just honest advice on how to achieve your goals.
//         </p>
//       </div>


//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

//         {/* LEFT – FORM */}
//         <div className="lg:col-span-2 rounded-2xl bg-[#0E1421] border border-white/10 p-8 z-50">
//           <h2 className="text-2xl font-semibold mb-2">
//             Tell Us About Your Project
//           </h2>
//           <p className="text-sm text-[#9D957B] mb-8">
//             The more details you share, the better we can prepare for our
//             conversation.
//           </p>

//           {/* BASIC INFO */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//             {["Name *", "Phone number *", "Email *", "Company/Organisation"].map(
//               (label) => (
//                 <div key={label}>
//                   <label className="text-sm text-gray-400">{label}</label>
//                   <input
//                     className="mt-2 w-full rounded-lg bg-[#010818] border border-white/10 px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500"
//                     placeholder={label}
//                   />
//                 </div>
//               )
//             )}
//           </div>

//           {/* PROJECT TYPE */}
//           <Section title="What type of project are you looking for? *">
//             {[
//               "Website",
//               "Web Application",
//               "Mobile App",
//               "AI Solution",
//               "Branding & Design",
//               "Digital Marketing",
//               "MVP Development",
//               "Other / Multiple",
//             ].map((item) => (
//               <Option key={item} label={item} />
//             ))}
//           </Section>

//           {/* BUDGET */}
//           <Section title="What's your estimated budget? *">
//             {[
//               "Under $5,000",
//               "$5,000 - $15,000",
//               "$15,000 - $50,000",
//               "$50,000 - $100,000",
//               "$100,000+",
//               "Not sure yet",
//             ].map((item) => (
//               <Option key={item} label={item} />
//             ))}
//           </Section>

//           {/* TIMELINE */}
//           <Section title="When do you need this completed? *">
//             {["ASAP", "1 Month", "2-3 Months", "3-6 Months", "Flexible"].map(
//               (item) => (
//                 <Option key={item} label={item} />
//               )
//             )}
//           </Section>

//           {/* MESSAGE */}
//           <div className="mt-8">
//             <label className="text-sm text-secondaryText">
//               Tell us about your project *
//             </label>
//             <textarea
//               rows={5}
//               className="mt-2 w-full rounded-lg bg-[#010818] border border-white/10 px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500"
//               placeholder="Describe your goals, challenges, and expectations..."
//             />
//           </div>

//           {/* SUBMIT */}
//           <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 py-3 text-sm font-medium flex items-center justify-center gap-2">
//             Send Message
//           </button>
//         </div>

//         {/* RIGHT – CONTACT INFO */}
//         <div className="space-y-6 z-50">

//           {/* Direct Contact */}
//           <div className="rounded-2xl bg-[#0E1421] border border-white/10 p-6 ">
//             <h3 className="text-lg font-semibold mb-4">
//               Prefer to reach out directly?
//             </h3>

//             <InfoItem icon={<Phone />} title="Call Us" value="+91 738 739 2708" />
//             <InfoItem
//               icon={<Mail />}
//               title="Email Us"
//               value="info@satsoninnovation.com"
//             />
//             <InfoItem
//               icon={<MessageCircle />}
//               title="WhatsApp"
//               value="+91 738 739 2708"
//             />
//             <InfoItem
//               icon={<Calendar />}
//               title="Schedule a Call"
//               value="Book a free consultation"
//             />
//           </div>

//           {/* OFFICE */}
//           <div className="rounded-2xl bg-[#0E1421] border border-white/10 p-6">
//             <h3 className="text-lg font-semibold mb-4">Visit Our Office</h3>

//             <div className="flex gap-3 text-sm  mb-4">
//               <MapPin size={50} className="" color="#3C83F6" />
//               <span className="text-[#9D957B] mt-2">
//                 Office No. 610, Surawtala Mark Plazzo, Hinjawadi, Pune,
//                 Pimpri-Chinchwad, Maharashtra 411057
//               </span>
//             </div>

//             <div className="flex gap-3 text-sm text-gray-400">
//               <Clock className="mt-1" color="#3C83F6" />
//               <span className="text-[#9D957B]">
//                 Mon-Fri: 09:30 AM – 06:30 PM IST <br />
//                 Sat: 10:00 AM – 06:00 PM IST <br />
//                 Sun: Closed
//               </span>
//             </div>

//             <button className="mt-6 w-full text-[#3C83F6] rounded-lg bg-[#07080f] py-3 text-sm border border-white/10">
//               View on Google Maps
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// /* ---------------- helpers ---------------- */

// function Section({
//   title,
//   children,
// }: {
//   title: string
//   children: React.ReactNode
// }) {
//   return (
//     <div className="mt-8">
//       <h4 className="text-sm font-inter  font-medium mb-4">{title}</h4>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{children}</div>
//     </div>
//   )
// }

// function Option({ label }: { label: string }) {
//   return (
//     <button className="rounded-xl bg-[#010818] border border-white/10 px-4 py-3 text-sm text-left hover:border-purple-500 transition">
//       {label}
//     </button>
//   )
// }

// function InfoItem({
//   icon,
//   title,
//   value,
// }: {
//   icon: React.ReactNode
//   title: string
//   value: string
// }) {
//   return (
//     <div className="flex items-center gap-4 bg-[#07080f] rounded-xl p-4 mb-3 border border-white/10">
//       <div className="text-purple-400">{icon}</div>
//       <div>
//         <p className="text-sm font-medium">{title}</p>
//         <p className="text-sm font-inter text-[#9D957B]">{value}</p>
//       </div>
//     </div>
//   )
// }



"use client"

import {
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  MapPin,
  Clock,
} from "lucide-react"

export default function ContactPage() {
  return (
    <section className="relative min-h-screen bg-Base px-4 sm:px-6 pt-24 sm:pt-32 pb-20 text-white">

    

      {/* Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-14 sm:mb-20">
        <span className="inline-block mb-6 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-4 py-1 text-xs text-[#60A5FA]">
          Contact Us
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-marcellus text-white">
          Let&apos;s Build{" "}
          <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
            AI-Powered
          </span>
        </h2>

        <p className="mt-4 text-[14px] sm:text-[16px] md:text-[20px] text-secondaryText max-w-2xl font-inter mx-auto">
          Get a free consultation and project estimate. No commitment, no pressure —
          just honest advice on how to achieve your goals.
        </p>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

        {/* LEFT – FORM */}
        <div className="lg:col-span-2 rounded-2xl bg-[#0E1421] border border-white/10 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            Tell Us About Your Project
          </h2>
          <p className="text-sm text-[#9D957B] mb-6 sm:mb-8">
            The more details you share, the better we can prepare for our
            conversation.
          </p>

          {/* Basic Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
            {["Name *", "Phone number *", "Email *", "Company/Organisation"].map(
              (label) => (
                <div key={label}>
                  <label className="text-sm text-gray-400">{label}</label>
                  <input
                    className="mt-2 w-full rounded-lg bg-[#010818] border border-white/10 px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500"
                    placeholder={label}
                  />
                </div>
              )
            )}
          </div>

          {/* Sections */}
          <Section title="What type of project are you looking for? *">
            {[
              "Website",
              "Web Application",
              "Mobile App",
              "AI Solution",
              "Branding & Design",
              "Digital Marketing",
              "MVP Development",
              "Other / Multiple",
            ].map((item) => (
              <Option key={item} label={item} />
            ))}
          </Section>

          <Section title="What's your estimated budget? *">
            {[
              "Under $5,000",
              "$5,000 - $15,000",
              "$15,000 - $50,000",
              "$50,000 - $100,000",
              "$100,000+",
              "Not sure yet",
            ].map((item) => (
              <Option key={item} label={item} />
            ))}
          </Section>

          <Section title="When do you need this completed? *">
            {["ASAP", "1 Month", "2-3 Months", "3-6 Months", "Flexible"].map(
              (item) => (
                <Option key={item} label={item} />
              )
            )}
          </Section>

          {/* Message */}
          <div className="mt-8">
            <label className="text-sm text-secondaryText">
              Tell us about your project *
            </label>
            <textarea
              rows={4}
              className="mt-2 w-full rounded-lg bg-[#010818] border border-white/10 px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500"
              placeholder="Describe your goals, challenges, and expectations..."
            />
          </div>

          <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 py-3 text-sm font-medium flex items-center justify-center gap-2">
            Send Message
          </button>
        </div>

        {/* RIGHT – CONTACT INFO */}
        <div className="space-y-6">

          <div className="rounded-2xl bg-[#0E1421] border border-white/10 p-6">
            <h3 className="text-lg font-semibold mb-4">
              Prefer to reach out directly?
            </h3>

            <InfoItem icon={<Phone size={18} />} title="Call Us" value="+91 738 739 2708" />
            <InfoItem icon={<Mail size={18} />} title="Email Us" value="info@satsoninnovation.com" />
            <InfoItem icon={<MessageCircle size={18} />} title="WhatsApp" value="+91 738 739 2708" />
            <InfoItem icon={<Calendar size={18} />} title="Schedule a Call" value="Book a free consultation" />
          </div>

          <div className="rounded-2xl bg-[#0E1421] border border-white/10 p-6">
            <h3 className="text-lg font-semibold mb-4">Visit Our Office</h3>

            <div className="flex gap-3 text-sm mb-4">
              <MapPin size={22} color="#3C83F6" />
              <span className="text-[#9D957B]">
                Office No. 610, Surawtala Mark Plazzo, Hinjawadi, Pune,
                Maharashtra 411057
              </span>
            </div>

            <div className="flex gap-3 text-sm">
              <Clock size={18} color="#3C83F6" />
              <span className="text-[#9D957B]">
                Mon-Fri: 09:30 – 18:30 IST<br />
                Sat: 10:00 – 18:00 IST<br />
                Sun: Closed
              </span>
            </div>

            <button className="mt-6 w-full text-[#3C83F6] rounded-lg bg-[#07080f] py-3 text-sm border border-white/10">
              View on Google Maps
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mt-8">
      <h4 className="text-sm font-inter font-medium mb-4">{title}</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {children}
      </div>
    </div>
  )
}

function Option({ label }: { label: string }) {
  return (
    <button className="rounded-xl bg-[#010818] border border-white/10 px-4 py-3 text-xs sm:text-sm text-left hover:border-purple-500 transition">
      {label}
    </button>
  )
}

function InfoItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode
  title: string
  value: string
}) {
  return (
    <div className="flex items-start gap-4 bg-[#07080f] rounded-xl p-4 mb-3 border border-white/10">
      <div className="text-purple-400 mt-1">{icon}</div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-sm font-inter text-[#9D957B] break-words">{value}</p>
      </div>
    </div>
  )
}
