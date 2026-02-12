// import TeamImageGrid from "../components/shared/TeamImageGrid"
// import type { Metadata } from "next"

// export const metadata: Metadata = {
//   title: "About Satson Innovation | AI Software Company",
//   description:
//     "Satson Innovation Pvt. Ltd. is an AI-powered digital transformation and enterprise software development company.",
// }

// export default function AboutUs() {



//   return (
//     <section className="relative overflow-hidden bg-Base px-4 pt-20 sm:pt-28 pb-16">

//   {/* Background glows */}
//   <div className="pointer-events-none absolute -top-[-7%] -left-30 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.35)_0%,rgba(122,59,255,0.0)_70%)] blur-[120px] hidden md:block" />
//   <div className="pointer-events-none absolute md:top-[10%] lg:top-0 -right-40 w-[505px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.25)_0%,rgba(122,59,255,0.0)_70%)] blur-[120px] hidden md:block" />

//   {/* HEADER (always first) */}
//   <div className="relative z-10 max-w-4xl mx-auto text-center mb-10 md:mb-20">
//     <span className="inline-block mb-6 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-4 py-1 text-xs text-[#60A5FA]">
//       About Us
//     </span>

//     <h2 className="text-3xl md:text-5xl font-playfairDisplay text-white">
//       Who Are{" "}
//       <span className="bg-gradient-to-r from-[#C47DE8] to-[#5593F7] bg-clip-text text-transparent">
//         We
//       </span>
//     </h2>

//     <p className="mt-6 max-w-[520px] mx-auto text-[14px] md:text-[20px] font-inter text-secondaryText leading-relaxed">
//       Satson Innovation Pvt Ltd is a forward-thinking technology company
//       dedicated to empowering businesses with cutting-edge digital
//       solutions that drive growth and enable long-term success.
//     </p>
//   </div>

//   {/* CONTENT GRID */}
//   <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

//     {/* IMAGE GRID – comes second on mobile, right on desktop */}
//     <div className="order-2 lg:order-2">
//       <TeamImageGrid />
//     </div>

//     {/* TEXT CONTENT – comes third on mobile, left on desktop */}
//     <div className="space-y-10 order-3 lg:order-1">

//       {/* About */}
//       <div>
//         <h3 className="text-[24px] font-marcellus font-medium text-[#A78BFA] mb-3">
//           About Us
//         </h3>
//         <p className="text-[15px] text-secondaryText leading-relaxed">
//           Satson Innovation is a digital-first startup focused on building
//           practical, scalable solutions for growing businesses. We work at
//           the intersection of design, development, and strategy to create
//           digital products that are clear, functional, and built for
//           real-world growth. Whether it’s a website, platform, or complete
//           digital system, our goal is simple: help brands move faster,
//           smarter, and with confidence.
//         </p>
//       </div>

//       {/* Vision */}
//       <div>
//         <h3 className="text-[24px] font-medium text-[#A78BFA] mb-3">
//           Our Vision
//         </h3>
//         <p className="text-[15px] text-secondaryText leading-relaxed">
//           To create a future where businesses of all sizes can leverage
//           innovation and technology to scale confidently, without
//           complexity or limits.
//         </p>
//       </div>

//       {/* Mission */}
//       <div>
//         <h3 className="text-[24px] font-marcellus text-[#A78BFA] mb-3">
//           Our Mission
//         </h3>
//         <p className="text-[15px] text-secondaryText leading-relaxed">
//           To help startups and businesses turn ideas into reliable digital
//           products through thoughtful design, strong development, and a
//           growth-focused mindset.
//         </p>
//       </div>
//     </div>

//   </div>
// </section>

//   )
// }






// import { ArrowRight, Eye, Rocket, Sparkles, Target } from "lucide-react"
// import type { Metadata } from "next"
// import { Lightbulb, Heart, ShieldCheck, Zap, Users, Globe } from 'lucide-react';



// export default function AboutUs() {
// const values = [
//     {
//       title: "Innovation First",
//       desc: "We don't follow trends—we create them. Every solution we build pushes the boundaries of what's possible.",
//       icon: <Lightbulb size={24} className="text-amber-500" />
//     },
//     {
//       title: "Client Obsession",
//       desc: "Your success is our success. We're not satisfied until you're absolutely thrilled with the results.",
//       icon: <Heart size={24} className="text-amber-500" />
//     },
//     {
//       title: "Integrity Always",
//       desc: "Transparency, honesty, and ethical practices are non-negotiable. We build trust, not just products.",
//       icon: <ShieldCheck size={24} className="text-amber-500" />
//     },
//     {
//       title: "Relentless Excellence",
//       desc: "Good enough is never enough. We obsess over details because we know excellence lives in the margins.",
//       icon: <Zap size={24} className="text-amber-500" />
//     },
//     {
//       title: "Collaborative Spirit",
//       desc: "We believe the best ideas emerge when diverse minds work together. Partnership over hierarchy.",
//       icon: <Users size={24} className="text-amber-500" />
//     },
//     {
//       title: "Global Impact",
//       desc: "We're not just building software—we're shaping how businesses worldwide leverage technology.",
//       icon: <Globe size={24} className="text-amber-500" />
//     }
//   ];


//   return (
//     <section className="relative overflow-hidden bg-Base px-4 pt-20 sm:pt-28 pb-16">

//   {/* Background glows */}
//   <div className="pointer-events-none absolute -top-[-7%] -left-30 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.35)_0%,rgba(122,59,255,0.0)_70%)] blur-[120px] hidden md:block" />
//   <div className="pointer-events-none absolute md:top-[10%] lg:top-0 -right-40 w-[505px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.25)_0%,rgba(122,59,255,0.0)_70%)] blur-[120px] hidden md:block" />

  
//   <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
//       {/* Background Radial Glow */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full" />
//       </div>

//       <div className="relative z-10 max-w-5xl space-y-8">
        
//         {/* The Badge */}
//         <div className="flex justify-center">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/5 text-amber-500 text-sm font-medium tracking-wide">
//             <Sparkles size={14} className="text-amber-500" />
//             The Satson Story
//           </div>
//         </div>

//         {/* Main Headline */}
//         <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
//           We Build the Future, <br />
//           <span className="text-amber-500">One Line of Code</span> at a Time
//         </h1>

//         {/* Subtext */}
//         <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed font-light">
//           We're not just another tech company. We're dreamers, builders, and 
//           relentless problem-solvers on a mission to transform how businesses 
//           harness the power of AI and digital innovation.
//         </p>

//       </div>
//     </div>



//     <div className=" text-white font-sans selection:bg-amber-500/30">
      
      

//       {/* 2. STORY SECTION (image_fbcb41.png) */}
//       <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div className="space-y-8">
//             <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Born from a Simple Belief</h2>
//             <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
//               <p>
//                 <span className="text-white font-semibold">Satson</span> was founded on a radical idea: that cutting-edge technology shouldn't be reserved for tech giants with deep pockets. Every business, regardless of size, deserves access to world-class digital solutions.
//               </p>
//               <p>
//                 What started as a small team of passionate developers has grown into a global force for digital transformation. But our core hasn't changed—we're still that scrappy group of innovators who believe technology should empower, not intimidate.
//               </p>
//               <p>
//                 Today, we partner with startups and enterprises across 20+ countries, turning their boldest visions into digital reality.
//               </p>
//             </div>
//           </div>

//           <div className="relative group">
//             {/* Layered card effect */}
//             <div className="absolute inset-0 bg-amber-500/20 rounded-[2rem] rotate-3 translate-x-4 translate-y-2 blur-sm group-hover:rotate-2 transition-transform underline-offset-8" />
//             <div className="relative bg-[#0d0d0d] border border-white/10 rounded-[2rem] p-12 aspect-square flex flex-col items-center justify-center text-center overflow-hidden">
//               {/* Concentric Glow Rings */}
//               <div className="absolute w-[250px] h-[250px] border border-amber-500/10 rounded-full animate-pulse" />
//               <div className="absolute w-[350px] h-[350px] border border-amber-500/5 rounded-full" />
              
//               <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-amber-500/20">
//                 <Rocket className="text-black fill-current" size={32} />
//               </div>
//               <h3 className="text-3xl font-bold mb-3 italic tracking-tight">"Dream Big, Build Bigger"</h3>
//               <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Our founding mantra</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. VISION & MISSION SECTION (image_fcbb85.png) */}
//       <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
//         <div className="text-center mb-16 space-y-4">
//           <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Where We're Headed</h2>
//           <p className="text-slate-400">Our north star guides every decision, every line of code, every client relationship.</p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Vision Card */}
//           <div className="bg-[#0d0d0d] border border-white/5 rounded-[2.5rem] p-10 flex flex-col h-full hover:border-amber-500/20 transition-all">
//             <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center mb-8">
//               <Eye className="text-black" size={28} />
//             </div>
//             <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
//             <p className="text-slate-400 text-lg leading-relaxed flex-grow">
//               To be the world's most trusted partner for AI-powered digital transformation—empowering businesses of all sizes to compete, innovate, and thrive in the digital age.
//             </p>
//             <div className="mt-12 pt-6 border-t border-white/5">
//               <p className="text-amber-500 italic font-medium">"A world where technology amplifies human potential, not replaces it."</p>
//             </div>
//           </div>

//           {/* Mission Card */}
//           <div className="bg-[#0d0d0d] border border-white/5 rounded-[2.5rem] p-10 flex flex-col h-full hover:border-amber-500/20 transition-all">
//             <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center mb-8">
//               <Target className="text-black" size={28} />
//             </div>
//             <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
//             <p className="text-slate-400 text-lg leading-relaxed flex-grow">
//               To deliver exceptional digital products that solve real problems, delight users, and drive measurable business growth—while making the journey enjoyable for everyone involved.
//             </p>
//             <div className="mt-12 pt-6 border-t border-white/5">
//               <p className="text-amber-500 italic font-medium">"Every project is a chance to make someone's life easier and better."</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>


//  <section className=" py-24 px-6 md:px-20 max-w-7xl mx-auto">
//       {/* Header */}
//       <div className="text-center mb-16 space-y-4">
//         <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
//           The Values We Live By
//         </h2>
//         <p className="text-slate-400 max-w-2xl mx-auto">
//           These aren't just words on a wall—they're the principles that guide every decision we make.
//         </p>
//       </div>

//       {/* Values Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {values.map((item, index) => (
//           <div 
//             key={index} 
//             className="group relative bg-[#0d0d0d] border border-white/5 p-10 rounded-[2rem] transition-all duration-300 hover:border-amber-500/30 hover:bg-[#111111]"
//           >
//             {/* Subtle inner glow on hover */}
//             <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
            
//             <div className="relative z-10">
//               <div className="mb-6 inline-block">
//                 {item.icon}
//               </div>
//               <h3 className="text-xl font-bold text-white mb-4">
//                 {item.title}
//               </h3>
//               <p className="text-slate-400 leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
  

//   <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto text-center border-t border-white/5">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">The Satson Vibe</h2>
//         <p className="text-slate-400 mb-16">What's it really like to work with us? Here's a glimpse into our essence.</p>
        
//         <div className="grid md:grid-cols-3 gap-12 mb-20 text-center">
//           {[
//             { title: "We Genuinely Care", icon: <Heart size={24} />, desc: "Your project isn't just another ticket to us. We lose sleep thinking about how to make it better. Your wins feel like our wins." },
//             { title: "We're in This Together", icon: <Users size={24} />, desc: "No ivory towers here. We sit alongside you, listen deeply, push back when needed, and celebrate every milestone as a team." },
//             { title: "We Obsess Over Details", icon: <Sparkles size={24} />, desc: "The magic is in the margins. We notice what others miss—because we believe your users deserve nothing less than exceptional." }
//           ].map((vibe, i) => (
//             <div key={i} className="space-y-6 flex flex-col items-center">
//               <div className="w-16 h-16 bg-[#111111] border border-amber-500/20 rounded-2xl flex items-center justify-center text-amber-500">
//                 {vibe.icon}
//               </div>
//               <h3 className="text-2xl font-bold">{vibe.title}</h3>
//               <p className="text-slate-400 leading-relaxed">{vibe.desc}</p>
//             </div>
//           ))}
//         </div>

//         <div className="space-y-8">
//           <p className="text-xl text-slate-300">Ready to experience the Satson difference?</p>
//           <button className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-amber-500/10 active:scale-95">
//             Let's Build Something Amazing <ArrowRight size={20} />
//           </button>
//         </div>
// </section>
// </section>

//   )
// }

// "use client";

// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Lightbulb, Heart, ShieldCheck, Zap, Users, Globe, Sparkles, Rocket, Eye, Target, ArrowRight, Compass, Hexagon } from 'lucide-react';

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// export default function AboutUs() {
//   const sectionRefs = {
//     hero: useRef(null),
//     nucleus: useRef(null),
//     services: useRef(null),
//     verticals: useRef(null),
//     story: useRef(null),
//     vision: useRef(null),
//     values: useRef(null),
//     ethos: useRef(null),
//     colophon: useRef(null),
//   };

//   const values = [
//     {
//       title: "Innovation First",
//       desc: "We don't follow trends—we create them. Every solution we build pushes the boundaries of what's possible.",
//       icon: <Lightbulb size={20} className="text-[#5593F7]" strokeWidth={1.5} />
//     },
//     {
//       title: "Client Obsession",
//       desc: "Your success is our success. We're not satisfied until you're absolutely thrilled with the results.",
//       icon: <Heart size={20} className="text-[#5593F7]" strokeWidth={1.5} />
//     },
//     {
//       title: "Integrity Always",
//       desc: "Transparency, honesty, and ethical practices are non-negotiable. We build trust, not just products.",
//       icon: <ShieldCheck size={20} className="text-[#5593F7]" strokeWidth={1.5} />
//     },
//     {
//       title: "Relentless Excellence",
//       desc: "Good enough is never enough. We obsess over details because we know excellence lives in the margins.",
//       icon: <Zap size={20} className="text-[#5593F7]" strokeWidth={1.5} />
//     },
//     {
//       title: "Collaborative Spirit",
//       desc: "We believe the best ideas emerge when diverse minds work together. Partnership over hierarchy.",
//       icon: <Users size={20} className="text-[#5593F7]" strokeWidth={1.5} />
//     },
//     {
//       title: "Global Impact",
//       desc: "We're not just building software—we're shaping how businesses worldwide leverage technology.",
//       icon: <Globe size={20} className="text-[#5593F7]" strokeWidth={1.5} />
//     }
//   ];

//   useEffect(() => {
//     // Wait for DOM to be ready
//     const ctx = gsap.context(() => {
      
//       // —— HERO ANIMATION ——
//       gsap.from(sectionRefs.hero.current?.querySelectorAll('.hero-line'), {
//         y: 40,
//         opacity: 0,
//         duration: 1.2,
//         stagger: 0.15,
//         ease: 'power3.out',
//       });

//       // —— NUCLEUS ——
//       gsap.from(sectionRefs.nucleus.current?.querySelectorAll('.nucleus-content'), {
//         scrollTrigger: {
//           trigger: sectionRefs.nucleus.current,
//           start: 'top 80%',
//           end: 'bottom 20%',
//           toggleActions: 'play none none reverse',
//         },
//         y: 60,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.2,
//         ease: 'power2.out',
//       });

//       // —— SERVICES ——
//       gsap.from(sectionRefs.services.current?.querySelectorAll('.service-card'), {
//         scrollTrigger: {
//           trigger: sectionRefs.services.current,
//           start: 'top 80%',
//           end: 'bottom 20%',
//           toggleActions: 'play none none reverse',
//         },
//         y: 40,
//         opacity: 0,
//         duration: 0.8,
//         stagger: 0.1,
//         ease: 'power2.out',
//       });

//       // —— VERTICALS ——
//       gsap.from(sectionRefs.verticals.current?.querySelectorAll('.vertical-tag'), {
//         scrollTrigger: {
//           trigger: sectionRefs.verticals.current,
//           start: 'top 85%',
//           end: 'bottom 20%',
//           toggleActions: 'play none none reverse',
//         },
//         scale: 0.9,
//         opacity: 0,
//         duration: 0.6,
//         stagger: 0.03,
//         ease: 'back.out(1.2)',
//       });

//       // —— STORY ——
//       gsap.from(sectionRefs.story.current?.querySelectorAll('.story-line'), {
//         scrollTrigger: {
//           trigger: sectionRefs.story.current,
//           start: 'top 80%',
//           end: 'bottom 20%',
//           toggleActions: 'play none none reverse',
//         },
//         x: -30,
//         opacity: 0,
//         duration: 0.9,
//         stagger: 0.12,
//         ease: 'power2.out',
//       });

//       gsap.from(sectionRefs.story.current?.querySelectorAll('.story-badge'), {
//         scrollTrigger: {
//           trigger: sectionRefs.story.current,
//           start: 'top 70%',
//           end: 'bottom 20%',
//           toggleActions: 'play none none reverse',
//         },
//         scale: 0.8,
//         opacity: 0,
//         duration: 1,
//         ease: 'elastic.out(1, 0.4)',
//       });

//       // —— VISION & MISSION ——
//       gsap.from(sectionRefs.vision.current?.querySelectorAll('.vision-card'), {
//         scrollTrigger: {
//           trigger: sectionRefs.vision.current,
//           start: 'top 80%',
//           end: 'bottom 20%',
//           toggleActions: 'play none none reverse',
//         },
//         y: 50,
//         opacity: 0,
//         duration: 0.9,
//         stagger: 0.15,
//         ease: 'power2.out',
//       });

//       // —— VALUES ——
//       gsap.from(sectionRefs.values.current?.querySelectorAll('.value-item'), {
//         scrollTrigger: {
//           trigger: sectionRefs.values.current,
//           start: 'top 80%',
//           end: 'bottom 20%',
//           toggleActions: 'play none none reverse',
//         },
//         y: 30,
//         opacity: 0,
//         duration: 0.7,
//         stagger: 0.05,
//         ease: 'power2.out',
//       });

//       // —— ETHOS ——
//       gsap.from(sectionRefs.ethos.current?.querySelectorAll('.ethos-line'), {
//         scrollTrigger: {
//           trigger: sectionRefs.ethos.current,
//           start: 'top 80%',
//           end: 'bottom 20%',
//           toggleActions: 'play none none reverse',
//         },
//         y: 40,
//         opacity: 0,
//         duration: 0.8,
//         stagger: 0.1,
//         ease: 'power2.out',
//       });

//       // —— COLOPHON ——
//       gsap.from(sectionRefs.colophon.current?.querySelectorAll('.colophon-line'), {
//         scrollTrigger: {
//           trigger: sectionRefs.colophon.current,
//           start: 'top 85%',
//           end: 'bottom 20%',
//           toggleActions: 'play none none reverse',
//         },
//         y: 30,
//         opacity: 0,
//         duration: 0.8,
//         stagger: 0.1,
//         ease: 'power2.out',
//       });

//       // —— GLOW PULSE ——
//       gsap.to('.glow-left', {
//         scale: 1.1,
//         opacity: 0.4,
//         duration: 4,
//         repeat: -1,
//         yoyo: true,
//         ease: 'sine.inOut',
//       });

//       gsap.to('.glow-right', {
//         scale: 1.15,
//         opacity: 0.3,
//         duration: 5,
//         repeat: -1,
//         yoyo: true,
//         ease: 'sine.inOut',
//         delay: 0.5,
//       });

//     }, sectionRefs);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <main className="relative w-full bg-[#080C16] font-inter antialiased selection:bg-[#5593F7]/20 selection:text-white overflow-x-hidden">
//       {/* —— CORE GLOW —— */}
//       <div className="glow-left pointer-events-none fixed -top-[-7%] -left-30 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(85,147,247,0.28)_0%,rgba(85,147,247,0.0)_70%)] blur-[140px] hidden md:block" />
//       <div className="glow-right pointer-events-none fixed md:top-[10%] lg:top-0 -right-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(196,125,232,0.20)_0%,rgba(196,125,232,0.0)_70%)] blur-[140px] hidden md:block" />
      
//       {/* —— subtle grid —— */}
//       <div className="pointer-events-none fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0icmdiYSg4NSwxNDcsMjQ3LDAuMDIpIi8+PC9zdmc+')] opacity-20" />

//       {/* —— main container —— */}
//       <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24 lg:py-32">
        
//         {/* —— HERO —— */}
//         <div ref={sectionRefs.hero} className="mb-24 sm:mb-28 md:mb-32">
//           <div className="hero-line flex items-center gap-2 mb-4 sm:mb-6">
//             <span className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-[#5593F7] to-[#C47DE8]" />
//             <span className="font-marcellus text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#7588A3]">Satson Innovation</span>
//           </div>
//           <h1 className="hero-line font-playfairDisplay text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.1] tracking-tight text-white max-w-5xl">
//             We build systems that 
//             <span className="block mt-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//               think, scale & endure.
//             </span>
//           </h1>
//           <p className="hero-line font-poppins text-[#7588A3] text-base sm:text-lg md:text-xl max-w-2xl mt-6 sm:mt-8 md:mt-10 leading-relaxed font-light">
//             AI-powered software, intelligent ERP, and digital infrastructure 
//             for enterprises that refuse to settle.
//           </p>
//         </div>

//         {/* —— 1. NUCLEUS —— */}
//         <div ref={sectionRefs.nucleus} className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 mb-20 md:mb-20">
//           <div className="nucleus-content">
//             <span className="font-marcellus text-[10px] uppercase tracking-[0.3em] text-[#5593F7]/70">The nucleus</span>
//             <h2 className="font-playfairDisplay text-3xl sm:text-4xl md:text-5xl text-white mt-4 sm:mt-6 mb-6 sm:mb-8 leading-tight">
//               Where AI meets 
//               <span className="block bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//                 operational gravity.
//               </span>
//             </h2>
//             <div className="space-y-4 sm:space-y-6 font-poppins text-[#7588A3] text-sm sm:text-base md:text-lg leading-relaxed">
//               <p>
//                 Satson Innovation sits at the intersection of AI solutions and digital transformation. 
//                 We don't build features — we engineer business systems that automate, control, and scale.
//               </p>
//               <p className="text-white/70 border-l-2 border-[#5593F7] pl-4 sm:pl-6 italic text-sm sm:text-base">
//                 "Smart Technology. Intelligent Business." is not a tagline. It's our architecture.
//               </p>
//             </div>
//           </div>
//           <div className="nucleus-content relative flex items-center justify-center lg:justify-end">
//             <div className="relative w-full max-w-md aspect-square">
//               <div className="absolute inset-0 rounded-full border border-[#5593F7]/10 animate-pulse" />
//               <div className="absolute inset-[15%] rounded-full border border-[#C47DE8]/10 animate-pulse" style={{ animationDelay: '1s' }} />
//               <div className="absolute inset-[30%] rounded-full border border-white/5" />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-[#5593F7]/20 to-[#C47DE8]/20 rounded-2xl backdrop-blur-sm flex items-center justify-center border border-white/5">
//                   <Hexagon size={36} className="text-[#5593F7] sm:w-10 sm:h-10 md:w-12 md:h-12" strokeWidth={1.2} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* —— 2. SERVICES —— */}
//         <div ref={sectionRefs.services} className="mb-20 md:mb-20">
//           <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
//             <div>
//               <span className="font-marcellus text-[10px] uppercase tracking-[0.3em] text-[#5593F7]/70">Instrumentation</span>
//               <h2 className="font-playfairDisplay text-3xl sm:text-4xl md:text-5xl text-white mt-4 sm:mt-6 max-w-2xl">
//                 Composable. Intelligent. 
//                 <span className="block bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//                   Bare‑metal code.
//                 </span>
//               </h2>
//             </div>
//             <p className="font-poppins text-[#7588A3] max-w-xs mt-4 md:mt-0 text-sm sm:text-base">
//               ERP, CRM, POS, AI agents — we own the stack.
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl sm:rounded-3xl overflow-hidden">
//             {[
//               { title: "AI & INTELLIGENCE", items: ["Custom chatbots (web, WhatsApp)", "Predictive analytics / BI", "NLP, recommendation engines"] },
//               { title: "BUSINESS SYSTEMS", items: ["POS / CRM / ERP", "Inventory, HR, operations", "Scalable for SME & enterprise"] },
//               { title: "DIGITAL INFRA", items: ["SaaS portals & web apps", "iOS / Android", "UX-driven design systems"] }
//             ].map((group, i) => (
//               <div key={i} className="service-card bg-[#080C16] p-6 sm:p-8 md:p-10 border-b sm:border-b-0 border-white/5 last:border-0">
//                 <h3 className="font-marcellus text-xs sm:text-sm tracking-wider text-white/90 mb-4 sm:mb-6">{group.title}</h3>
//                 <ul className="space-y-2 sm:space-y-3">
//                   {group.items.map((item, idx) => (
//                     <li key={idx} className="font-poppins text-[#7588A3] text-xs sm:text-sm flex items-start gap-2">
//                       <span className="text-[#5593F7] text-[10px] sm:text-xs">——</span> {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* —— 3. VERTICALS —— */}
//         <div ref={sectionRefs.verticals} className="mb-24 sm:mb-28 md:mb-32">
//           <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
//             <Compass size={16} className="text-[#C47DE8] sm:w-[18px] sm:h-[18px]" strokeWidth={1.5} />
//             <span className="font-marcellus text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#7588A3]">Sector density</span>
//           </div>
//           <div className="flex flex-wrap gap-2 sm:gap-3">
//             {["Retail & E‑Commerce","Healthcare","Hospitality","EdTech","B2B SaaS","Logistics","Professional Services","FinTech","Manufacturing"].map((v, i) => (
//               <span key={i} className="vertical-tag font-poppins text-xs sm:text-sm px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 border border-white/5 bg-white/[0.02] rounded-full text-[#7588A3] hover:border-[#5593F7]/30 transition-colors">
//                 {v}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* —— 4. STORY —— */}
//         <section ref={sectionRefs.story} className="mb-20 md:mb-20 relative">
//           <div className="absolute left-0 top-12 w-full h-px bg-gradient-to-r from-[#5593F7]/0 via-[#5593F7]/30 to-[#C47DE8]/0" />
          
//           <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 relative">
//             {/* left — narrative */}
//             <div className="lg:col-span-7 space-y-8 sm:space-y-10">
//               <div className="story-line flex items-center gap-3 sm:gap-4">
//                 <span className="font-marcellus text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#7588A3]">—— Origin fragment</span>
//                 <span className="w-6 sm:w-8 h-[1px] bg-[#5593F7]/40" />
//               </div>
              
//               <div className="space-y-6 sm:space-y-8">
//                 <div className="space-y-2 sm:space-y-3">
//                   <h2 className="story-line font-playfairDisplay text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight">
//                     <span className="italic font-light text-[#7588A3]/60">2019</span>
//                     <span className="block mt-2 text-5xl sm:text-6xl md:text-7xl bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//                       one room.
//                     </span>
//                   </h2>
//                   <h2 className="story-line font-playfairDisplay text-4xl sm:text-5xl md:text-6xl text-white/90 leading-[1.1] tracking-tight">
//                     six builders.
//                     <span className="block text-4xl sm:text-5xl md:text-6xl mt-2 text-white/70">no manifesto.</span>
//                   </h2>
//                 </div>

//                 <div className="story-line max-w-xl space-y-4 sm:space-y-5 font-poppins text-[#7588A3] text-sm sm:text-base md:text-lg leading-relaxed border-l border-[#5593F7]/20 pl-4 sm:pl-6 md:pl-8 ml-0 sm:ml-1">
//                   <p className="text-white/80 first-letter:text-2xl sm:first-letter:text-3xl first-letter:font-playfairDisplay first-letter:mr-1 first-letter:text-[#5593F7]">
//                     Just a conviction that enterprise-grade AI shouldn't require a billion-dollar cheque.
//                   </p>
//                   <p>
//                     We coded through 47 consecutive nights. The first client paid in coffee and conviction. 
//                     Today, our systems route inventory for three continents — but the commit messages still sound human.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* right — badge */}
//             <div className="lg:col-span-5 relative">
//               <div className="sticky top-32 space-y-8 sm:space-y-12">
//                 <div className="story-badge relative flex items-start justify-end">
//                   <div className="w-24 sm:w-32 h-px bg-gradient-to-l from-[#C47DE8] to-transparent mt-5 mr-3 sm:mr-4 hidden sm:block" />
//                   <div className="text-right">
//                     <span className="font-marcellus text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#5593F7]/60">continuous deployment</span>
//                     <div className="flex items-center gap-2 justify-end mt-2 sm:mt-3">
//                       <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#5593F7]/60" />
//                       <div className="w-12 sm:w-16 h-px bg-[#5593F7]/30" />
//                       <span className="font-mono text-[10px] sm:text-xs text-[#7588A3]">since 1.0.0</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="story-badge relative flex flex-col items-end">
//                   <div className="relative w-full max-w-[280px] sm:max-w-[320px] ml-auto">
//                     <div className="absolute inset-0 bg-gradient-to-br from-[#5593F7]/8 via-transparent to-[#C47DE8]/8 rounded-3xl blur-md" />
//                     <div className="relative bg-[#080C16] border border-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden backdrop-blur-sm
//                                   before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMjAgMjBoMjB2MjBIMjB6TTAgMGgyMHYyMEgweiIgZmlsbD0icmdiYSg4NSwxNDcsMjQ3LDAuMDIpIi8+PC9zdmc+')] opacity-20">
                      
//                       <div className="relative z-10 flex flex-col items-center text-center">
//                         <div className="mb-5 sm:mb-7 relative">
//                           <div className="absolute inset-0 bg-[#5593F7]/10 blur-2xl rounded-full" />
//                           <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/5 flex items-center justify-center
//                                         bg-[radial-gradient(ellipse_at_center,_#5593F7_0%,_transparent_70%)] opacity-90">
//                             <span className="font-marcellus text-3xl sm:text-4xl tracking-tighter text-white/90">‘21</span>
//                           </div>
//                         </div>
                        
//                         <span className="font-playfairDisplay text-2xl sm:text-3xl italic text-white/90 leading-tight">
//                           “Dream Big, <br/>Build Bigger”
//                         </span>
                        
//                         <div className="my-5 sm:my-7 w-full flex items-center gap-2 sm:gap-3">
//                           <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#5593F7]/40 to-transparent" />
//                           <span className="font-marcellus text-[8px] sm:text-[10px] uppercase tracking-[0.3em] text-[#7588A3]">founding</span>
//                           <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C47DE8]/40 to-transparent" />
//                         </div>
                        
//                         <p className="font-poppins text-[10px] sm:text-xs text-[#7588A3] max-w-[180px] sm:max-w-[200px] mx-auto leading-relaxed">
//                           still shipping. still stubborn. <br/>no equity firms.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <span className="font-mono text-[6px] sm:text-[8px] uppercase tracking-[0.4em] text-white/10 mt-4 sm:mt-6 mr-2 select-none">
//                     ──── Satson core ────
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex justify-end mt-12 sm:mt-16 border-t border-white/5 pt-6 sm:pt-8">
//             <div className="flex flex-wrap items-center gap-4 sm:gap-8 md:gap-12 font-mono text-[8px] sm:text-[9px] md:text-[10px] uppercase text-[#7588A3]/50">
//               <span>2.4M+ lines • infrastructure</span>
//               <span className="w-px h-4 bg-white/10 hidden xs:block" />
//               <span>20+ countries • silent</span>
//               <span className="w-px h-4 bg-white/10 hidden sm:block" />
//               <span className="tracking-[0.4em]">est.2021</span>
//             </div>
//           </div>
//         </section>

//         {/* —— 5. VISION / MISSION —— */}
//         <div ref={sectionRefs.vision} className="mb-20 md:mb-20 relative">
//           <div className="absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-[#5593F7]/0 via-[#5593F7]/20 to-[#C47DE8]/0 hidden md:block" />
          
//           <div className="grid md:grid-cols-2 gap-16 md:gap-20 xl:gap-24 relative">
            
//             {/* left — Vision */}
//             <div className="vision-card relative group">
//               <div className="absolute -inset-x-4 sm:-inset-x-6 -inset-y-4 bg-[#5593F7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
//               <div className="relative space-y-6 sm:space-y-8">
//                 <div className="flex items-center gap-3">
//                   <span className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-[#5593F7] to-[#5593F7]/20" />
//                   <span className="font-marcellus text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#7588A3]">
//                     —— 01
//                   </span>
//                 </div>
                
//                 <div className="space-y-4 sm:space-y-6">
//                   <h2 className="font-playfairDisplay text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight">
//                     <span className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent block text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-2 sm:mb-3">
//                       north star
//                     </span>
//                     <span className="text-4xl sm:text-5xl md:text-6xl">
//                       invisible<br/>infrastructure.
//                     </span>
//                   </h2>
                  
//                   <div className="max-w-md space-y-4 sm:space-y-5 pt-2 sm:pt-4">
//                     <p className="font-poppins text-[#7588A3] text-sm sm:text-base md:text-lg leading-relaxed">
//                       To be the layer you never see — but always trust. 
//                       The logic beneath the interface. The intelligence that 
//                       doesn't announce itself.
//                     </p>
                    
//                     <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
//                       <div className="w-8 sm:w-10 h-px bg-[#5593F7]/40" />
//                       <span className="font-marcellus text-xs italic text-[#C47DE8]/70">
//                         Technology amplifies human potential.
//                       </span>
//                     </div>
                    
//                     <p className="font-mono text-[7px] sm:text-[8px] uppercase tracking-[0.4em] text-white/10 pt-4 sm:pt-6">
//                       vision :: unweighted
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* right — Mission */}
//             <div className="vision-card relative group">
//               <div className="absolute -inset-x-4 sm:-inset-x-6 -inset-y-4 bg-[#C47DE8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
//               <div className="relative space-y-6 sm:space-y-8">
//                 <div className="flex items-center gap-3 justify-start">
//                   <span className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-[#C47DE8] to-[#C47DE8]/20" />
//                   <span className="font-marcellus text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#7588A3]">
//                     —— 02
//                   </span>
//                 </div>
                
//                 <div className="space-y-4 sm:space-y-6">
//                   <h2 className="font-playfairDisplay text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight">
//                     <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent block text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-2 sm:mb-3">
//                       daily truth
//                     </span>
//                     <span className="text-4xl sm:text-5xl md:text-6xl">
//                       complexity,<br/>compressed.
//                     </span>
//                   </h2>
                  
//                   <div className="max-w-md space-y-4 sm:space-y-5 pt-2 sm:pt-4">
//                     <p className="font-poppins text-[#7588A3] text-sm sm:text-base md:text-lg leading-relaxed">
//                       Engineer systems that feel like intuition. 
//                       No fanfare. No friction. Just logic that 
//                       arrives before the question.
//                     </p>
                    
//                     <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
//                       <span className="font-marcellus text-xs italic text-[#5593F7]/70">
//                         Every project, a chance to elevate.
//                       </span>
//                       <div className="w-8 sm:w-10 h-px bg-gradient-to-l from-[#C47DE8] to-[#C47DE8]/20" />
//                     </div>
                    
//                     <p className="font-mono text-[7px] sm:text-[8px] uppercase tracking-[0.4em] text-white/10 pt-4 sm:pt-6">
//                       mission :: 0.01% latency
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex justify-center mt-16 sm:mt-20">
//             <div className="flex items-center gap-2 sm:gap-3">
//               <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#5593F7]/30" />
//               <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-[#7588A3]/30">
//                 v.m · 2026
//               </span>
//               <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#C47DE8]/30" />
//             </div>
//           </div>
//         </div>

//         {/* —— 6. VALUES —— */}
//         <div ref={sectionRefs.values} className="mb-20 md:mb-20">
//           <div className="max-w-2xl mb-12 sm:mb-16">
//             <span className="font-marcellus text-[10px] uppercase tracking-[0.3em] text-[#5593F7]/70">Principles</span>
//             <h2 className="font-playfairDisplay text-3xl sm:text-4xl md:text-5xl text-white mt-4 sm:mt-6 leading-tight">
//               We don't advertise values.
//               <span className="block bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
//                 We audit code against them.
//               </span>
//             </h2>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl sm:rounded-3xl overflow-hidden">
//             {values.map((item, i) => (
//               <div key={i} className="value-item bg-[#080C16] p-5 sm:p-6 md:p-8 transition-all hover:bg-[#0B101E]">
//                 <div className="flex items-start gap-3 sm:gap-4">
//                   <div className="mt-1 flex-shrink-0">{item.icon}</div>
//                   <div>
//                     <h3 className="font-playfairDisplay text-base sm:text-lg text-white mb-1 sm:mb-2">{item.title}</h3>
//                     <p className="font-poppins text-[#7588A3] text-xs sm:text-sm leading-relaxed">{item.desc}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* —— 7. ETHOS —— */}
//         <div ref={sectionRefs.ethos} className="border-t border-white/5 pt-20 sm:pt-24 mb-24 sm:mb-28 md:mb-32">
//           <div className="max-w-7xl mx-auto">
//             <div className="ethos-line flex items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
//               <span className="font-mono text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-[#5593F7]/50">
//                 —— 0x7E
//               </span>
//               <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-[#5593F7]/40 to-transparent" />
//               <span className="font-marcellus text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-[#7588A3]">
//                 operational ethos
//               </span>
//             </div>

//             <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              
//               {/* left column */}
//               <div className="lg:col-span-5 space-y-6 sm:space-y-8">
//                 <h2 className="ethos-line font-playfairDisplay text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight">
//                   <span className="text-4xl sm:text-5xl md:text-6xl font-medium">
//                     silent
//                   </span>
//                   <span className="block bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl mt-2">
//                     precision.
//                   </span>
//                 </h2>
                
//                 <div className="ethos-line space-y-3 sm:space-y-4 pt-2 sm:pt-4">
//                   <p className="font-poppins text-[#7588A3] text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
//                     We don't announce quality. We commit it. 
//                     The system either holds — or it doesn't.
//                   </p>
                  
//                   <div className="flex items-center gap-2 sm:gap-3 pt-2">
//                     <div className="w-8 sm:w-10 md:w-12 h-px bg-[#5593F7]/30" />
//                     <span className="font-marcellus text-xs italic text-[#C47DE8]/70">
//                       visible impact
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* right column */}
//               <div className="lg:col-span-6 lg:col-start-7 space-y-12 sm:space-y-14 md:space-y-16">
                
//                 {/* principle 01 */}
//                 <div className="ethos-line group relative">
//                   <div className="absolute -left-4 sm:-left-6 md:-left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#5593F7]/0 via-[#5593F7]/30 to-transparent 
//                                 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//                   <div className="space-y-3 sm:space-y-4">
//                     <div className="flex items-center gap-3 sm:gap-4">
//                       <span className="font-mono text-[10px] sm:text-[11px] text-[#5593F7]/60 font-light">// 01</span>
//                       <span className="font-marcellus text-[9px] sm:text-xs uppercase tracking-[0.2em] text-white/40">
//                         attention model
//                       </span>
//                     </div>
//                     <h3 className="font-playfairDisplay text-2xl sm:text-3xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#5593F7] group-hover:to-[#C47DE8] group-hover:bg-clip-text transition-all duration-300">
//                       We genuinely care.
//                     </h3>
//                     <p className="font-poppins text-[#7588A3] text-sm sm:text-base max-w-lg leading-relaxed pl-4 sm:pl-6 md:pl-8 border-l border-white/5 group-hover:border-[#5593F7]/30 transition-colors">
//                       Your infrastructure doesn't sleep — neither does our attention. 
//                       Wins are shared, not billed. We celebrate when your latency drops.
//                     </p>
//                     <div className="h-px w-12 sm:w-16 bg-white/5 group-hover:bg-gradient-to-r group-hover:from-[#5593F7] group-hover:to-[#C47DE8] transition-all" />
//                   </div>
//                 </div>

//                 {/* principle 02 */}
//                 <div className="ethos-line group relative">
//                   <div className="absolute -left-4 sm:-left-6 md:-left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#C47DE8]/0 via-[#C47DE8]/30 to-transparent 
//                                 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//                   <div className="space-y-3 sm:space-y-4">
//                     <div className="flex items-center gap-3 sm:gap-4">
//                       <span className="font-mono text-[10px] sm:text-[11px] text-[#C47DE8]/60 font-light">// 02</span>
//                       <span className="font-marcellus text-[9px] sm:text-xs uppercase tracking-[0.2em] text-white/40">
//                         zero black boxes
//                       </span>
//                     </div>
//                     <h3 className="font-playfairDisplay text-2xl sm:text-3xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#5593F7] group-hover:to-[#C47DE8] group-hover:bg-clip-text transition-all duration-300">
//                       We sit beside you.
//                     </h3>
//                     <p className="font-poppins text-[#7588A3] text-sm sm:text-base max-w-lg leading-relaxed pl-4 sm:pl-6 md:pl-8 border-l border-white/5 group-hover:border-[#C47DE8]/30 transition-colors">
//                       You see the commit history. You hear the debates. 
//                       No vendor play — just shared ownership of the stack.
//                     </p>
//                     <div className="h-px w-12 sm:w-16 bg-white/5 group-hover:bg-gradient-to-r group-hover:from-[#5593F7] group-hover:to-[#C47DE8] transition-all" />
//                   </div>
//                 </div>

//                 {/* principle 03 */}
//                 <div className="ethos-line group relative">
//                   <div className="absolute -left-4 sm:-left-6 md:-left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#5593F7]/0 via-[#C47DE8]/30 to-transparent 
//                                 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//                   <div className="space-y-3 sm:space-y-4">
//                     <div className="flex items-center gap-3 sm:gap-4">
//                       <span className="font-mono text-[10px] sm:text-[11px] text-[#C47DE8]/60 font-light">// 03</span>
//                       <span className="font-marcellus text-[9px] sm:text-xs uppercase tracking-[0.2em] text-white/40">
//                         marginal gains
//                       </span>
//                     </div>
//                     <h3 className="font-playfairDisplay text-2xl sm:text-3xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#5593F7] group-hover:to-[#C47DE8] group-hover:bg-clip-text transition-all duration-300">
//                       We calibrate the marginal.
//                     </h3>
//                     <p className="font-poppins text-[#7588A3] text-sm sm:text-base max-w-lg leading-relaxed pl-4 sm:pl-6 md:pl-8 border-l border-white/5 group-hover:border-[#C47DE8]/30 transition-colors">
//                       The last 5% is where mediocrity dies. 
//                       We stay for the 99.99th percentile — and then we refactor.
//                     </p>
//                     <div className="h-px w-12 sm:w-16 bg-white/5 group-hover:bg-gradient-to-r group-hover:from-[#5593F7] group-hover:to-[#C47DE8] transition-all" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="ethos-line flex justify-start mt-20 sm:mt-24 border-t border-white/5 pt-6 sm:pt-8">
//             <div className="flex items-center gap-3 sm:gap-4 font-mono text-[8px] sm:text-[9px] uppercase text-[#7588A3]/30 tracking-[0.4em]">
//               <span>ethos.commit</span>
//               <span className="w-px h-3 bg-white/10" />
//               <span>7e3a1f</span>
//               <span className="w-px h-3 bg-white/10" />
//               <span>verified</span>
//             </div>
//           </div>
//         </div>

//         {/* —— 8. COLOPHON —— */}
//         <div ref={sectionRefs.colophon} className="mb-16 sm:mb-20 md:mb-24 relative">
//           <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5593F7]/30 to-transparent" />
          
//           <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 grid lg:grid-cols-12 gap-8 lg:gap-12 relative">
            
//             {/* left column */}
//             <div className="lg:col-span-4">
//               <div className="sticky top-32 space-y-6 sm:space-y-8">
//                 <div className="colophon-line flex items-center gap-2 sm:gap-3">
//                   <span className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-[#5593F7] to-[#C47DE8]" />
//                   <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.4em] text-[#7588A3]/40">
//                     colophon
//                   </span>
//                 </div>
                
//                 <div className="colophon-line space-y-2 sm:space-y-3 font-mono text-[8px] sm:text-[9px] md:text-[10px] text-[#7588A3]/30 uppercase tracking-wider">
//                   <p>version 2.6.1 · 2026</p>
//                   <p>stack: react · node · python</p>
//                   <p>latency p99: 47ms</p>
//                   <p>deploy: continuous</p>
//                 </div>
//               </div>
//             </div>

//             {/* right column */}
//             <div className="lg:col-span-7 lg:col-start-6 space-y-10 sm:space-y-12">
              
//               <div className="colophon-line space-y-8 sm:space-y-10">
//                 <div className="space-y-4 sm:space-y-6">
//                   <span className="font-marcellus text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#7588A3] block">
//                     —— systems, not slides
//                   </span>
                  
//                   <h2 className="font-playfairDisplay text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight max-w-3xl">
//                     <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light italic text-white/90">we</span>
//                     <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-6xl mt-2 sm:mt-3">
//                       don't chase 
//                       <span className="block bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl lg:text-7xl mt-2">
//                         trends.
//                       </span>
//                     </span>
//                   </h2>
//                 </div>

//                 <div className="colophon-line max-w-xl space-y-6 sm:space-y-8">
//                   <p className="font-poppins text-[#7588A3] text-base sm:text-lg md:text-xl leading-relaxed">
//                     We build infrastructure that outlives roadmaps. 
//                     Your stack should still be running when the next 
//                     paradigm arrives — and the one after that.
//                   </p>
                  
//                   <div className="flex items-center gap-4 sm:gap-6 pt-4 sm:pt-6 group cursor-pointer w-fit">
//                     <span className="font-marcellus text-xs sm:text-sm uppercase tracking-[0.2em] text-white/70 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#5593F7] group-hover:to-[#C47DE8] group-hover:bg-clip-text transition-all duration-300">
//                       initiate conversation
//                     </span>
//                     <ArrowRight size={16} className="text-[#5593F7] opacity-70 group-hover:opacity-100 group-hover:translate-x-2 transition-all sm:w-[18px] sm:h-[18px]" />
//                     <div className="h-px w-8 sm:w-10 md:w-12 bg-white/10 group-hover:bg-gradient-to-r group-hover:from-[#5593F7] group-hover:to-[#C47DE8] transition-all" />
//                   </div>
//                 </div>
//               </div>

//               <div className="colophon-line pt-12 sm:pt-14 md:pt-16 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-8">
//                 <div className="space-y-1 sm:space-y-2">
//                   <p className="font-playfairDisplay text-xl sm:text-2xl text-white/90 tracking-tight">
//                     Satson Innovation
//                   </p>
//                   <p className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.4em] text-[#7588A3]/40">
//                     ai · erp · intelligence
//                   </p>
//                 </div>
                
//                 <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 font-mono text-[7px] sm:text-[8px] md:text-[9px] uppercase text-[#7588A3]/30 tracking-[0.2em]">
//                   <span>pvt. ltd.</span>
//                   <span className="w-px h-3 sm:h-4 bg-white/10" />
//                   <span>est. 2021</span>
//                   <span className="w-px h-3 sm:h-4 bg-white/10" />
//                   <span>20+ countries</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none select-none">
//             <span className="font-playfairDisplay text-[8rem] sm:text-[10rem] md:text-[12rem] font-black text-white/5 tracking-tighter">
//               S
//             </span>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }



import { Lightbulb, Heart, ShieldCheck, Zap, Users, Globe, Sparkles, Rocket, Eye, Target, ArrowRight, Compass, Hexagon, Infinity, Cpu, Cloud, Lock } from 'lucide-react';
import { Metadata } from 'next';

// ------------------------------------------------

export const metadata: Metadata = {

  title: "About Satson Innovation | AI Software Company",
  description:
    "Satson Innovation Pvt. Ltd. is an AI-powered digital transformation and enterprise software development company.",
}


export default function AboutUs() {
  const values = [
    {
      title: "Innovation First",
      desc: "We don't follow trends—we create them. Every solution we build pushes the boundaries of what's possible.",
      icon: <Lightbulb size={20} className="text-[#5593F7]" strokeWidth={1.5} />
    },
    {
      title: "Client Obsession",
      desc: "Your success is our success. We're not satisfied until you're absolutely thrilled with the results.",
      icon: <Heart size={20} className="text-[#5593F7]" strokeWidth={1.5} />
    },
    {
      title: "Integrity Always",
      desc: "Transparency, honesty, and ethical practices are non-negotiable. We build trust, not just products.",
      icon: <ShieldCheck size={20} className="text-[#5593F7]" strokeWidth={1.5} />
    },
    {
      title: "Relentless Excellence",
      desc: "Good enough is never enough. We obsess over details because we know excellence lives in the margins.",
      icon: <Zap size={20} className="text-[#5593F7]" strokeWidth={1.5} />
    },
    {
      title: "Collaborative Spirit",
      desc: "We believe the best ideas emerge when diverse minds work together. Partnership over hierarchy.",
      icon: <Users size={20} className="text-[#5593F7]" strokeWidth={1.5} />
    },
    {
      title: "Global Impact",
      desc: "We're not just building software—we're shaping how businesses worldwide leverage technology.",
      icon: <Globe size={20} className="text-[#5593F7]" strokeWidth={1.5} />
    }
  ];

  return (

    
    <main className="relative w-full bg-[#080C16] font-inter antialiased selection:bg-[#5593F7]/20 selection:text-white overflow-x-hidden">
  {/* —— CORE GLOW (exact from spec, color adjusted to #5593F7 / #C47DE8) —— */}
  <div className="pointer-events-none fixed -top-[-7%] -left-30 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(85,147,247,0.28)_0%,rgba(85,147,247,0.0)_70%)] blur-[140px] hidden md:block" />
  <div className="pointer-events-none fixed md:top-[10%] lg:top-0 -right-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(196,125,232,0.20)_0%,rgba(196,125,232,0.0)_70%)] blur-[140px] hidden md:block" />
  
  {/* —— subtle grid —— */}
  <div className="pointer-events-none fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0icmdiYSg4NSwxNDcsMjQ3LDAuMDIpIi8+PC9zdmc+')] opacity-20" />

  {/* —— main container —— */}
  <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pt-28 sm:pt-20 md:pt-32">
    
    {/* —— header — marcellus, minimal —— */}
    <div className="mb-24 sm:mb-32 md:mb-32">
      <div className="flex items-center gap-2 mb-6">
        <span className="w-8 h-[2px] bg-gradient-to-r from-[#5593F7] to-[#C47DE8]" />
        <span className="font-marcellus text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#7588A3]">Satson Innovation</span>
      </div>
      <h1 className="font-playfairDisplay text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight text-white max-w-5xl">
        We build systems that 
        <span className="block mt-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
          think, scale & endure.
        </span>
      </h1>
      <p className="font-poppins text-[#7588A3] text-base sm:text-lg md:text-xl max-w-2xl mt-8 sm:mt-10 leading-relaxed font-light">
        AI-powered software, intelligent ERP, and digital infrastructure 
        for enterprises that refuse to settle.
      </p>
    </div>

    {/* —— 1. NUCLEUS: positioning —— */}
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 mb-20">
  <div className="order-2 lg:order-1">
    <span className="font-marcellus text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#5593F7]/70">The nucleus</span>
    <h2 className="font-playfairDisplay text-3xl sm:text-4xl md:text-5xl text-white mt-4 sm:mt-6 mb-6 sm:mb-8 leading-tight">
      Where AI meets 
      <span className="block bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
        operational gravity.
      </span>
    </h2>
    <div className="space-y-5 sm:space-y-6 font-poppins text-[#7588A3] text-sm sm:text-base md:text-lg leading-relaxed">
      <p>
        Satson Innovation sits at the intersection of AI solutions and digital transformation. 
        We don't build features — we engineer business systems that automate, control, and scale.
      </p>
      <p className="text-white/70 border-l-2 border-[#5593F7] pl-5 sm:pl-6 italic text-sm sm:text-base md:text-lg">
        "Smart Technology. Intelligent Business." is not a tagline. It's our architecture.
      </p>
    </div>
  </div>
  
  {/* —— right side: completely different, no circles —— */}
  <div className="order-1 lg:order-2 relative flex items-center justify-center mb-8 lg:mb-0">
    
    {/* OPTION 1: abstract architectural stack / layered planes */}
    <div className="relative w-full max-w-[280px] sm:max-w-md aspect-square flex items-center justify-center">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40">
        {/* base platform */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#5593F7]/40 to-[#C47DE8]/40 rounded-full blur-sm" />
        
        {/* vertical structure — like a graph / signal / infrastructure */}
        <div className="absolute bottom-2 left-1/2 w-0.5 h-24 bg-gradient-to-t from-[#5593F7] to-[#C47DE8] -translate-x-1/2 origin-bottom" />
        
        {/* floating planes — data layers */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-12 border border-[#5593F7]/40 bg-[#5593F7]/5 backdrop-blur-sm rounded-sm rotate-45 origin-bottom-right" />
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-20 h-12 border border-[#C47DE8]/40 bg-[#C47DE8]/5 backdrop-blur-sm rounded-sm -rotate-12 origin-bottom-left" />
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-24 h-10 border border-white/20 bg-white/5 backdrop-blur-sm rounded-sm rotate-12 origin-bottom-right" />
        
        {/* peak / signal */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#5593F7] rounded-full shadow-[0_0_15px_#5593F7]" />
      </div>
    </div>

   
    <div className="relative w-full max-w-[280px] sm:max-w-md aspect-square flex items-center justify-center">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="space-y-1 w-full">
            <div className="h-1.5 w-16 bg-gradient-to-r from-[#5593F7] to-transparent rounded-full" />
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#C47DE8] to-transparent rounded-full" />
            <div className="h-1.5 w-20 bg-gradient-to-r from-[#5593F7] to-transparent rounded-full ml-8" />
            <div className="h-1.5 w-28 bg-gradient-to-r from-[#C47DE8] to-transparent rounded-full" />
            <div className="h-1.5 w-16 bg-gradient-to-r from-[#5593F7] to-transparent rounded-full ml-12" />
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#C47DE8] to-transparent rounded-full ml-4" />
            <div className="h-1.5 w-20 bg-gradient-to-r from-[#5593F7] to-transparent rounded-full" />
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5593F7]/30 to-transparent" />
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#C47DE8]/30 to-transparent" />
        
        <span className="absolute -bottom-6 left-0 font-mono text-[8px] text-white/20">signal.intensity</span>
        <span className="absolute -top-6 right-0 font-mono text-[8px] text-white/20">47Hz</span>
      </div>
    </div>
  </div>
</div>

    {/* —— 2. SERVICES / CAPABILITIES —— */}
    <div className="mb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
        <div>
          <span className="font-marcellus text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#5593F7]/70">Instrumentation</span>
          <h2 className="font-playfairDisplay text-3xl sm:text-4xl md:text-5xl text-white mt-4 sm:mt-6 max-w-2xl">
            Composable. Intelligent. 
            <span className="block bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
              Bare‑metal code.
            </span>
          </h2>
        </div>
        <p className="font-poppins text-[#7588A3] text-sm sm:text-base max-w-xs mt-3 md:mt-0">
          ERP, CRM, POS, AI agents — we own the stack.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl sm:rounded-3xl overflow-hidden">
        {[
          { title: "AI & INTELLIGENCE", items: ["Custom chatbots (web, WhatsApp)", "Predictive analytics / BI", "NLP, recommendation engines"] },
          { title: "BUSINESS SYSTEMS", items: ["POS / CRM / ERP", "Inventory, HR, operations", "Scalable for SME & enterprise"] },
          { title: "DIGITAL INFRA", items: ["SaaS portals & web apps", "iOS / Android", "UX-driven design systems"] }
        ].map((group, i) => (
          <div key={i} className="bg-[#080C16] p-6 sm:p-8 lg:p-10 border-b md:border-b-0 border-white/5 last:border-0">
            <h3 className="font-marcellus text-xs sm:text-sm tracking-wider text-white/90 mb-5 sm:mb-6">{group.title}</h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {group.items.map((item, idx) => (
                <li key={idx} className="font-poppins text-[#7588A3] text-xs sm:text-sm flex items-start gap-2">
                  <span className="text-[#5593F7] text-[10px] sm:text-xs">——</span> 
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* —— 3. VERTICALS (compressed, minimal) —— */}
    <div className="mb-24 sm:mb-32">
  <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
    <Compass size={16} className="sm:w-[18px] sm:h-[18px] text-[#C47DE8]" strokeWidth={1.5} />
    <span className="font-marcellus text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#7588A3]">Sector density</span>
  </div>
  
  {/* Mobile: horizontal scroll | Desktop: normal wrap */}
  <div className="relative">
    {/* fade indicators for scroll context — subtle, barely there */}
    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#080C16] to-transparent pointer-events-none z-10 md:hidden" />
    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#080C16] to-transparent pointer-events-none z-10 md:hidden" />
    
    {/* scrollable container with hidden scrollbar */}
    <div className="overflow-x-auto overflow-y-visible pb-2 -mb-2 md:overflow-visible md:pb-0 md:-mb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="flex md:flex-wrap gap-1 sm:gap-3 w-max md:w-full">
        {["Retail & E‑Commerce","Healthcare","Hospitality","EdTech","B2B SaaS","Logistics","Professional Services","FinTech","Manufacturing"].map((v, i) => (
          <span key={i} className="font-poppins text-xs sm:text-sm px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 lg:py-2.5 border border-white/5 bg-white/[0.02] rounded-full text-[#7588A3] hover:border-[#5593F7]/30 transition-colors whitespace-nowrap flex-shrink-0">
            {v}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>

    {/* —— 4. THE SATSON STORY (reimagined, minimal, artifact-like) —— */}
    <section className="mb-20 relative">
      {/* thin horizontal timeline ruler — quiet anchor */}
      <div className="absolute left-0 top-12 w-full h-px bg-gradient-to-r from-[#5593F7]/0 via-[#5593F7]/30 to-[#C47DE8]/0" />
      
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 relative">
        {/* left — main narrative as compact artifact */}
        <div className="lg:col-span-7 space-y-8 lg:space-y-10">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="font-marcellus text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#7588A3]">—— Origin fragment</span>
            <span className="w-6 sm:w-8 h-[1px] bg-[#5593F7]/40" />
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 sm:space-y-3">
              <h2 className="font-playfairDisplay text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight">
                <span className="italic font-light text-[#7588A3]/60">2019</span>
                <span className="block mt-1 sm:mt-2 text-5xl sm:text-6xl md:text-7xl bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                  one room.
                </span>
              </h2>
              <h2 className="font-playfairDisplay text-4xl sm:text-5xl md:text-6xl text-white/90 leading-[1.1] tracking-tight">
                six builders.
                <span className="block text-4xl sm:text-5xl md:text-6xl mt-1 sm:mt-2 text-white/70">no manifesto.</span>
              </h2>
            </div>

            <div className="max-w-xl space-y-4 sm:space-y-5 font-poppins text-[#7588A3] text-sm sm:text-base md:text-lg leading-relaxed border-l border-[#5593F7]/20 pl-5 sm:pl-8 ml-0 sm:ml-1">
              <p className="text-white/80 first-letter:text-2xl sm:first-letter:text-3xl first-letter:font-playfairDisplay first-letter:mr-1 first-letter:text-[#5593F7]">
                Just a conviction that enterprise-grade AI shouldn't require a billion-dollar cheque.
              </p>
              <p>
                We coded through 47 consecutive nights. The first client paid in coffee and conviction. 
                Today, our systems route inventory for three continents — but the commit messages still sound human.
              </p>
            </div>
          </div>
        </div>

        {/* right — abstract data-memory / minimal timestamp block */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0">
          <div className="lg:sticky lg:top-32 space-y-8 lg:space-y-12">
            {/* subtle etched timeline marker */}
            <div className="relative flex items-start justify-start lg:justify-end">
              <div className="w-16 lg:w-32 h-px bg-gradient-to-l from-[#C47DE8] to-transparent mt-5 mr-3 lg:mr-4 hidden lg:block" />
              <div className="text-left lg:text-right">
                <span className="font-marcellus text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#5593F7]/60">continuous deployment</span>
                <div className="flex items-center gap-2 justify-start lg:justify-end mt-2 sm:mt-3">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#5593F7]/60" />
                  <div className="w-10 sm:w-16 h-px bg-[#5593F7]/30" />
                  <span className="font-mono text-[10px] sm:text-xs text-[#7588A3]">since 1.0.0</span>
                </div>
              </div>
            </div>

            {/* core — worn / cast metal badge */}
            <div className="relative flex flex-col items-start lg:items-end">
              <div className="relative w-full max-w-[320px] lg:ml-auto">
                {/* background patina — like aged steel */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5593F7]/8 via-transparent to-[#C47DE8]/8 rounded-3xl blur-md" />
                <div className="relative bg-[#080C16] border border-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden backdrop-blur-sm
                              before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMjAgMjBoMjB2MjBIMjB6TTAgMGgyMHYyMEgweiIgZmlsbD0icmdiYSg4NSwxNDcsMjQ3LDAuMDIpIi8+PC9zdmc+')] opacity-20">
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* eroded / stamped emblem */}
                    <div className="mb-5 sm:mb-7 relative">
                      <div className="absolute inset-0 bg-[#5593F7]/10 blur-2xl rounded-full" />
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/5 flex items-center justify-center
                                    bg-[radial-gradient(ellipse_at_center,_#5593F7_0%,_transparent_70%)] opacity-90">
                        <span className="font-marcellus text-3xl sm:text-4xl tracking-tighter text-white/90">‘21</span>
                      </div>
                    </div>
                    
                    <span className="font-playfairDisplay text-2xl sm:text-3xl italic text-white/90 leading-tight">
                      “Dream Big, <br/>Build Bigger”
                    </span>
                    
                    <div className="my-5 sm:my-7 w-full flex items-center gap-2 sm:gap-3">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#5593F7]/40 to-transparent" />
                      <span className="font-marcellus text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#7588A3]">founding</span>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C47DE8]/40 to-transparent" />
                    </div>
                    
                    <p className="font-poppins text-[10px] sm:text-xs text-[#7588A3] max-w-[200px] mx-auto leading-relaxed">
                      still shipping. still stubborn. <br/>no equity firms.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* ghost signature — almost erased */}
              <span className="font-mono text-[7px] sm:text-[8px] uppercase tracking-[0.4em] text-white/10 mt-4 sm:mt-6 mr-0 lg:mr-2 select-none">
                ──── Satson core ────
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* ultra-minimal footprint — line count / silent metrics */}
      <div className="flex justify-start lg:justify-end mt-12 sm:mt-16 border-t border-white/5 pt-6 sm:pt-8">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-12 font-mono text-[8px] sm:text-[10px] uppercase text-[#7588A3]/50">
          <span>2.4M+ lines • infrastructure</span>
          <span className="w-px h-3 sm:h-4 bg-white/10 hidden xs:inline" />
          <span>20+ countries • silent</span>
          <span className="w-px h-3 sm:h-4 bg-white/10 hidden sm:inline" />
          <span className="tracking-[0.4em]">est.2021</span>
        </div>
      </div>
    </section>

    {/* —— 5. VISION / MISSION (recast as silent thesis, no cards) —— */}
    <div className="mb-20 relative">
      {/* subtle vertical axis */}
      <div className="absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-[#5593F7]/0 via-[#5593F7]/20 to-[#C47DE8]/0 hidden md:block" />
      
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 lg:gap-24 relative">
        
        {/* left — Vision */}
        <div className="relative group">
          <div className="absolute -inset-x-4 sm:-inset-x-6 -inset-y-4 bg-[#5593F7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
          <div className="relative space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-[#5593F7] to-[#5593F7]/20" />
              <span className="font-marcellus text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#7588A3]">
                —— 01
              </span>
            </div>
            
            <div className="space-y-5 sm:space-y-6">
              <h2 className="font-playfairDisplay text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight">
                <span className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent block text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-2 sm:mb-3">
                  north star
                </span>
                <span className="text-4xl sm:text-5xl md:text-6xl">
                  invisible<br/>infrastructure.
                </span>
              </h2>
              
              <div className="max-w-md space-y-4 sm:space-y-5 pt-3 sm:pt-4">
                <p className="font-poppins text-[#7588A3] text-sm sm:text-base md:text-lg leading-relaxed">
                  To be the layer you never see — but always trust. 
                  The logic beneath the interface. The intelligence that 
                  doesn't announce itself.
                </p>
                
                {/* quiet divider */}
                <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4">
                  <div className="w-8 sm:w-10 h-px bg-[#5593F7]/40" />
                  <span className="font-marcellus text-[10px] sm:text-xs italic text-[#C47DE8]/70">
                    Technology amplifies human potential.
                  </span>
                </div>
                
                {/* barely visible anchor */}
                <p className="font-mono text-[7px] sm:text-[8px] uppercase tracking-[0.4em] text-white/10 pt-4 sm:pt-6">
                  vision :: unweighted
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* right — Mission */}
        <div className="relative group">
          <div className="absolute -inset-x-4 sm:-inset-x-6 -inset-y-4 bg-[#C47DE8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
          <div className="relative space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2 sm:gap-3 justify-start md:justify-end lg:justify-start">
              <span className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-[#C47DE8] to-[#C47DE8]/20" />
              <span className="font-marcellus text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#7588A3]">
                —— 02
              </span>
            </div>
            
            <div className="space-y-5 sm:space-y-6 md:text-right lg:text-left">
              <h2 className="font-playfairDisplay text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight">
                <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent block text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-2 sm:mb-3">
                  daily truth
                </span>
                <span className="text-4xl sm:text-5xl md:text-6xl">
                  complexity,<br/>compressed.
                </span>
              </h2>
              
              <div className="max-w-md ml-0 md:ml-auto lg:ml-0 space-y-4 sm:space-y-5 pt-3 sm:pt-4">
                <p className="font-poppins text-[#7588A3] text-sm sm:text-base md:text-lg leading-relaxed">
                  Engineer systems that feel like intuition. 
                  No fanfare. No friction. Just logic that 
                  arrives before the question.
                </p>
                
                <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 justify-start md:justify-end lg:justify-start">
                  <span className="font-marcellus text-[10px] sm:text-xs italic text-[#5593F7]/70">
                    Every project, a chance to elevate.
                  </span>
                  <div className="w-8 sm:w-10 h-px bg-gradient-to-l from-[#C47DE8] to-[#C47DE8]/20" />
                </div>
                
                <p className="font-mono text-[7px] sm:text-[8px] uppercase tracking-[0.4em] text-white/10 pt-4 sm:pt-6 text-left md:text-right lg:text-left">
                  mission :: 0.01% latency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* silent coordinate marker */}
      <div className="flex justify-center mt-16 sm:mt-20">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#5593F7]/30" />
          <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-[#7588A3]/30">
            v.m · 2026
          </span>
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#C47DE8]/30" />
        </div>
      </div>
    </div>

    {/* —— 6. VALUES —— */}
    <div className="mb-20">
      <div className="max-w-2xl mb-12 sm:mb-16">
        <span className="font-marcellus text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#5593F7]/70">Principles</span>
        <h2 className="font-playfairDisplay text-3xl sm:text-4xl md:text-5xl text-white mt-4 sm:mt-6 leading-tight">
          We don't advertise values.
          <span className="block bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
            We audit code against them.
          </span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl sm:rounded-3xl overflow-hidden">
        {values.map((item, i) => (
          <div key={i} className="bg-[#080C16] p-6 sm:p-8 transition-all hover:bg-[#0B101E]">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="mt-1 shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-playfairDisplay text-base sm:text-lg text-white mb-1.5 sm:mb-2">{item.title}</h3>
                <p className="font-poppins text-[#7588A3] text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* —— 7. THE SATSON VIBE —— */}
    <div className="border-t border-white/5 pt-16 sm:pt-20 lg:pt-24 mb-24 sm:mb-32">
      {/* minimal header — left-aligned, almost like a file header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
          <span className="font-mono text-[8px] sm:text-[10px] uppercase tracking-[0.4em] text-[#5593F7]/50">
            —— 0x7E
          </span>
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-[#5593F7]/40 to-transparent" />
          <span className="font-marcellus text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#7588A3]">
            operational ethos
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* left column — the statement, uncentered, unadorned */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <h2 className="font-playfairDisplay text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight">
              <span className="text-4xl sm:text-5xl md:text-6xl font-medium">
                silent
              </span>
              <span className="block bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl mt-1 sm:mt-2">
                precision.
              </span>
            </h2>
            
            <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
              <p className="font-poppins text-[#7588A3] text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                We don't announce quality. We commit it. 
                The system either holds — or it doesn't.
              </p>
              
              {/* etched divider */}
              <div className="flex items-center gap-2 sm:gap-3 pt-1 sm:pt-2">
                <div className="w-8 sm:w-12 h-px bg-[#5593F7]/30" />
                <span className="font-marcellus text-[10px] sm:text-xs italic text-[#C47DE8]/70">
                  visible impact
                </span>
              </div>
            </div>
          </div>

          {/* right column — three statements, stacked, weighted left, no icons */}
          <div className="lg:col-span-6 lg:col-start-7 space-y-12 sm:space-y-16">
            
            {/* principle 01 */}
            <div className="group relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#5593F7]/0 via-[#5593F7]/30 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#5593F7]/60 font-light">// 01</span>
                  <span className="font-marcellus text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/40">
                    attention model
                  </span>
                </div>
                <h3 className="font-playfairDisplay text-2xl sm:text-3xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#5593F7] group-hover:to-[#C47DE8] group-hover:bg-clip-text transition-all duration-300">
                  We genuinely care.
                </h3>
                <p className="font-poppins text-[#7588A3] text-sm sm:text-base max-w-lg leading-relaxed pl-5 sm:pl-8 border-l border-white/5 group-hover:border-[#5593F7]/30 transition-colors">
                  Your infrastructure doesn't sleep — neither does our attention. 
                  Wins are shared, not billed. We celebrate when your latency drops.
                </p>
                <div className="h-px w-12 sm:w-16 bg-white/5 group-hover:bg-gradient-to-r group-hover:from-[#5593F7] group-hover:to-[#C47DE8] transition-all" />
              </div>
            </div>

            {/* principle 02 */}
            <div className="group relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#C47DE8]/0 via-[#C47DE8]/30 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#C47DE8]/60 font-light">// 02</span>
                  <span className="font-marcellus text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/40">
                    zero black boxes
                  </span>
                </div>
                <h3 className="font-playfairDisplay text-2xl sm:text-3xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#5593F7] group-hover:to-[#C47DE8] group-hover:bg-clip-text transition-all duration-300">
                  We sit beside you.
                </h3>
                <p className="font-poppins text-[#7588A3] text-sm sm:text-base max-w-lg leading-relaxed pl-5 sm:pl-8 border-l border-white/5 group-hover:border-[#C47DE8]/30 transition-colors">
                  You see the commit history. You hear the debates. 
                  No vendor play — just shared ownership of the stack.
                </p>
                <div className="h-px w-12 sm:w-16 bg-white/5 group-hover:bg-gradient-to-r group-hover:from-[#5593F7] group-hover:to-[#C47DE8] transition-all" />
              </div>
            </div>

            {/* principle 03 */}
            <div className="group relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#5593F7]/0 via-[#C47DE8]/30 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#C47DE8]/60 font-light">// 03</span>
                  <span className="font-marcellus text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/40">
                    marginal gains
                  </span>
                </div>
                <h3 className="font-playfairDisplay text-2xl sm:text-3xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#5593F7] group-hover:to-[#C47DE8] group-hover:bg-clip-text transition-all duration-300">
                  We calibrate the marginal.
                </h3>
                <p className="font-poppins text-[#7588A3] text-sm sm:text-base max-w-lg leading-relaxed pl-5 sm:pl-8 border-l border-white/5 group-hover:border-[#C47DE8]/30 transition-colors">
                  The last 5% is where mediocrity dies. 
                  We stay for the 99.99th percentile — and then we refactor.
                </p>
                <div className="h-px w-12 sm:w-16 bg-white/5 group-hover:bg-gradient-to-r group-hover:from-[#5593F7] group-hover:to-[#C47DE8] transition-all" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom marker — almost invisible, like a build tag */}
      <div className="flex justify-start mt-16 sm:mt-20 lg:mt-24 border-t border-white/5 pt-6 sm:pt-8">
        <div className="flex items-center gap-3 sm:gap-4 font-mono text-[8px] sm:text-[9px] uppercase text-[#7588A3]/30 tracking-[0.4em]">
          <span>ethos.commit</span>
          <span className="w-px h-2 sm:h-3 bg-white/10" />
          <span>7e3a1f</span>
          <span className="w-px h-2 sm:h-3 bg-white/10" />
          <span>verified</span>
        </div>
      </div>
    </div>

    {/* —— 8. COLOPHON / CLOSING —— */}
    <div className="mb-16 sm:mb-20 lg:mb-24 relative">
      {/* thin horizon line — like a baseline */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5593F7]/30 to-transparent" />
      
      <div className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 grid lg:grid-cols-12 gap-8 lg:gap-12 relative">
        
        {/* left — empty space / intentional void */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32 space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-[#5593F7] to-[#C47DE8]" />
              <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.4em] text-[#7588A3]/40">
                colophon
              </span>
            </div>
            
            {/* minimal build plate — like a hardware revision label */}
            <div className="space-y-2 sm:space-y-3 font-mono text-[8px] sm:text-[10px] text-[#7588A3]/30 uppercase tracking-wider">
              <p>version 2.6.1 · 2026</p>
              <p>stack: react · node · python</p>
              <p>latency p99: 47ms</p>
              <p>deploy: continuous</p>
            </div>
          </div>
        </div>

        {/* right — main statement, aligned to baseline grid */}
        <div className="lg:col-span-7 lg:col-start-6 space-y-10 sm:space-y-12">
          
          {/* primary signature — no headline, just presence */}
          <div className="space-y-8 sm:space-y-10">
            <div className="space-y-4 sm:space-y-6">
              <span className="font-marcellus text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#7588A3] block">
                —— systems, not slides
              </span>
              
              <h2 className="font-playfairDisplay text-4xl sm:text-5xl md:text-7xl text-white leading-[1.1] tracking-tight max-w-3xl">
                <span className="text-5xl sm:text-6xl md:text-8xl font-light italic text-white/90">we</span>
                <span className="block text-4xl sm:text-5xl md:text-6xl mt-2 sm:mt-3">
                  don't chase 
                  <span className="block bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl mt-1 sm:mt-2">
                    trends.
                  </span>
                </span>
              </h2>
            </div>

            <div className="max-w-xl space-y-6 sm:space-y-8">
              <p className="font-poppins text-[#7588A3] text-base sm:text-lg md:text-xl leading-relaxed">
                We build infrastructure that outlives roadmaps. 
                Your stack should still be running when the next 
                paradigm arrives — and the one after that.
              </p>
              
              {/* quiet CTA — no button, just a text invitation */}
              <div className="flex items-center gap-4 sm:gap-6 pt-4 sm:pt-6 group cursor-pointer">
                <span className="font-marcellus text-xs sm:text-sm uppercase tracking-[0.2em] text-white/70 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#5593F7] group-hover:to-[#C47DE8] group-hover:bg-clip-text transition-all duration-300">
                  initiate conversation
                </span>
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] text-[#5593F7] opacity-70 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                <div className="h-px w-8 sm:w-12 bg-white/10 group-hover:bg-gradient-to-r group-hover:from-[#5593F7] group-hover:to-[#C47DE8] transition-all" />
              </div>
            </div>
          </div>

          {/* footer — compressed identity, no decorative line */}
          <div className="pt-12 sm:pt-16 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-8">
            <div className="space-y-1 sm:space-y-2">
              <p className="font-playfairDisplay text-xl sm:text-2xl text-white/90 tracking-tight">
                Satson Innovation
              </p>
              <p className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.4em] text-[#7588A3]/40">
                ai · erp · intelligence
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 font-mono text-[8px] sm:text-[9px] uppercase text-[#7588A3]/30 tracking-[0.2em]">
              <span>pvt. ltd.</span>
              <span className="w-px h-3 sm:h-4 bg-white/10" />
              <span>est. 2021</span>
              <span className="w-px h-3 sm:h-4 bg-white/10" />
              <span>20+ countries</span>
            </div>
          </div>
        </div>
      </div>

      {/* ultra-minimal watermark — barely there */}
      <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none select-none hidden sm:block">
        <span className="font-playfairDisplay text-[8rem] sm:text-[10rem] lg:text-[12rem] font-black text-white/5 tracking-tighter">
          S
        </span>
      </div>
    </div>
  </div>
</main>
  );

}




