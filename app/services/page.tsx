// "use client"



// export const services = [
//   {
//     title: "AI Strategy & Digital Consulting",
//     description:
//       "We help organizations identify where AI can drive efficiency, automation, and smarter decision-making.",
//     points: [
//       "AI Readiness Assessment",
//       "Automation Roadmap",
//       "Data Architecture Planning",
//       "AI Use-Case Identification",
//       "Product & Platform Strategy",
//     ],
//   },
//   {
//     title: "AI-Powered Software Development",
//     description: "We design and build scalable, AI-driven software solutions.",
//     points: [
//       "AI-Enabled Web Applications",
//       "AI-Driven Mobile Apps",
//       "Business Dashboards & Systems",
//       "Industry-Specific SaaS Platforms",
//       "Internal Automation Tools",
//     ],
//   },
//   {
//     title: "Intelligent Chatbots & Assistants",
//     description:
//       "Conversational AI solutions that improve customer experience and operations.",
//     points: [
//       "Customer Support Chatbots",
//       "Sales & Lead Qualification Bots",
//       "Internal Knowledge Assistants",
//       "Multilingual AI Assistants",
//       "CRM & Tool Integrations",
//     ],
//   },
//   {
//     title: "Data Engineering & Analytics",
//     description:
//       "Transform raw data into actionable insights using modern data pipelines.",
//     points: [
//       "Data Warehousing",
//       "Real-Time Analytics",
//       "Business Intelligence Dashboards",
//       "Predictive Analytics",
//       "Data Security & Governance",
//     ],
//   },
//   {
//     title: "Web & Platform Development",
//     description:
//       "High-performance digital platforms built for scale and conversion.",
//     points: [
//       "Marketing Websites",
//       "Admin Panels & Dashboards",
//       "Custom Web Platforms",
//       "Performance Optimization",
//       "SEO-Friendly Architecture",
//     ],
//   },
//   {
//     title: "Automation & Process Optimization",
//     description:
//       "Automate workflows to reduce cost, errors, and operational overhead.",
//     points: [
//       "Workflow Automation",
//       "CRM & ERP Automation",
//       "API Integrations",
//       "Internal Tooling",
//       "Process Optimization",
//     ],
//   },
// ]





// import { useEffect, useRef } from "react"
// import gsap from "gsap"


// export default function ServicesSection() {
//   const cardsRef = useRef<HTMLDivElement[]>([])

//   useEffect(() => {
//     cardsRef.current.forEach((card, index) => {
//       gsap.fromTo(
//         card,
//         {
//           opacity: 0,
//           y: 80,
//           rotateX: 15,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           rotateX: 0,
//           duration: 1.1,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 85%",
//           },
//           delay: index * 0.08,
//         }
//       )

//       // Hover parallax
//       const onEnter = () =>
//         gsap.to(card, {
//           y: -12,
//           scale: 1.03,
//           boxShadow: "0 40px 120px rgba(122,59,255,0.35)",
//           duration: 0.4,
//           ease: "power3.out",
//         })

//       const onLeave = () =>
//         gsap.to(card, {
//           y: 0,
//           scale: 1,
//           boxShadow: "0 0 60px rgba(122,59,255,0.15)",
//           duration: 0.4,
//           ease: "power3.out",
//         })

//       card.addEventListener("mouseenter", onEnter)
//       card.addEventListener("mouseleave", onLeave)

//       return () => {
//         card.removeEventListener("mouseenter", onEnter)
//         card.removeEventListener("mouseleave", onLeave)
//       }
//     })
//   }, [])

//   return (
//     <section className="relative bg-[#050814] px-6 py-28 overflow-hidden">
      
    //   {/* Background glow */}
    //   <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.35)_0%,rgba(122,59,255,0.0)_70%)] blur-[150px]" />

    //   {/* Header */}
    //   <div className="max-w-4xl mx-auto text-center mb-20">
    //     <span className="inline-block mb-6 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-4 py-1 text-xs text-[#60A5FA]">
    //       Our Services
    //     </span>

    //     <h2 className="text-4xl md:text-5xl font-serif text-white">
    //       <span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
    //         AI-Powered
    //       </span>{" "}
    //       Solutions
    //       <br />
    //       for Modern Business
    //     </h2>

    //     <p className="mt-6 text-white/60 max-w-2xl mx-auto">
    //       From intelligent chatbots to high-converting platforms — we build
    //       digital products that deliver real results.
    //     </p>
    //   </div>

//       {/* Cards Grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 place-items-center">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             ref={(el) => {
//               if (el) cardsRef.current[index] = el
//             }}
//             className="relative h-[450px] w-[400px] rounded-2xl border border-white/5 bg-gradient-to-b from-[#0B1220] to-[#070B14] p-8"
//             style={{
//               boxShadow: "0 0 60px rgba(122,59,255,0.15)",
//               transformStyle: "preserve-3d",
//             }}
//           >
//             {/* Icon */}
//             <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-[#1E293B] text-[#60A5FA]">
//               ↻
//             </div>

//             {/* Title */}
//             <h3 className="text-lg font-medium text-white mb-3 leading-snug">
//               {service.title}
//             </h3>

//             {/* Description */}
//             <p className="text-sm text-white/60 mb-6 leading-relaxed">
//               {service.description}
//             </p>

//             {/* Divider */}
//             <div className="mb-5 h-px w-full bg-white/10" />

//             {/* Points */}
//             <ul className="space-y-3 text-sm text-white/60">
//               {service.points.map((point, i) => (
//                 <li key={i} className="flex items-start gap-3">
//                   <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" />
//                   <span>{point}</span>
//                 </li>
//               ))}
//             </ul>

//             {/* Bottom glow accent */}
//             <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 rounded-b-2xl bg-[radial-gradient(circle_at_bottom,rgba(122,59,255,0.25)_0%,rgba(122,59,255,0.0)_70%)]" />
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }





"use client"


import ServiceCard from "../components/shared/ServiceCard"

export const services = [
  {
    title: "AI Strategy & Digital Consulting",
    description:
      "We help organizations identify where AI can drive efficiency, and smarter decision-making.",
    points: [
      "AI Readiness Assessment",
      "Automation Roadmap",
      "Data Architecture Planning",
      "AI Use-Case Identification",
      "Product & Platform Strategy",
    ],
  },
  {
    title: "AI-Powered Software Development",
    description: "We design and build scalable, AI-driven software solutions.",
    points: [
      "AI-Enabled Web Applications",
      "AI-Driven Mobile Apps",
      "Business Dashboards & Systems",
      "Industry-Specific SaaS Platforms",
      "Internal Automation Tools",
    ],
  },
  {
    title: "Intelligent Chatbots & Assistants",
    description:
      "Conversational AI solutions that improve customer experience and operations.",
    points: [
      "Customer Support Chatbots",
      "Sales & Lead Qualification Bots",
      "Internal Knowledge Assistants",
      "Multilingual AI Assistants",
      "CRM & Tool Integrations",
    ],
  },
  {
    title: "Data Engineering & Analytics",
    description:
      "Transform raw data into actionable insights using modern data pipelines.",
    points: [
      "Data Warehousing",
      "Real-Time Analytics",
      "Business Intelligence Dashboards",
      "Predictive Analytics",
      "Data Security & Governance",
    ],
  },
  {
    title: "Web & Platform Development",
    description:
      "High-performance digital platforms built for scale and conversion.",
    points: [
      "Marketing Websites",
      "Admin Panels & Dashboards",
      "Custom Web Platforms",
      "Performance Optimization",
      "SEO-Friendly Architecture",
    ],
  },
  {
    title: "Automation & Process Optimization",
    description:
      "Automate workflows to reduce cost, errors, and operational overhead.",
    points: [
      "Workflow Automation",
      "CRM & ERP Automation",
      "API Integrations",
      "Internal Tooling",
      "Process Optimization",
    ],
  },
]



// export default function ServicesSection() {
//   return (
//     <section className="relative bg-Base px-6 py-34">

//  {/* Background glow */}
//       <div className="pointer-events-none absolute -top-40 -left-40 w-130 h-[520px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.35)_0%,rgba(122,59,255,0.0)_70%)] blur-[150px]" />

//       {/* Header */}
//       <div className="max-w-4xl mx-auto text-center mb-20">
//         <span className="inline-block mb-6 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-4 py-1 text-xs text-[#60A5FA]">
//           Our Services
//         </span>

//         <h2 className="text-4xl md:text-6xl font-marcellus text-white">
//           <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//             AI-Powered
//           </span>{" "}
//           Solutions
//           <br />
//           for Modern Business
//         </h2>

//         <p className="mt-4 text-[20px] text-secondaryText max-w-2xl font-inter mx-auto">
//           From intelligent chatbots to high-converting platforms — we build
//           digital products that deliver real results.
//         </p>
//       </div>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 place-items-center">
//         {services.map((service, i) => (
//           <ServiceCard key={i} service={service} />
//         ))}
//       </div>
//     </section>
//   )
// }



export default function ServicesSection() {
  return (
    <section className="relative bg-Base px-4 sm:px-6 pt-20 sm:pt-28 pb-16 overflow-hidden">

      {/* Background glow */}
      <div className="pointer-events-none absolute -top-[-7%] -left-30 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.35)_0%,rgba(122,59,255,0.0)_70%)] blur-[120px] hidden md:block" />
      <div className="pointer-events-none absolute md:top-[10%] lg:top-0 -right-40 w-[505px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.25)_0%,rgba(122,59,255,0.0)_70%)] blur-[120px] hidden md:block" />

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-20 px-2">
        <span className="inline-block mb-5 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-4 py-1 text-xs text-[#60A5FA]">
          Our Services
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-marcellus text-white leading-tight">
          <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
            AI-Powered
          </span>{" "}
          Solutions
          <br />
          for Modern Business
        </h2>

        <p className="mt-4 text-[15px] sm:text-[17px] md:text-[20px] text-secondaryText max-w-2xl font-inter mx-auto">
          From intelligent chatbots to high-converting platforms — we build
          digital products that deliver real results.
        </p>
      </div>

      {/* Grid */}
      <div className="
        max-w-7xl mx-auto
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-3
        gap-8 sm:gap-10 xl:gap-12
        place-items-center
      ">
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </div>
    </section>
  )
}
