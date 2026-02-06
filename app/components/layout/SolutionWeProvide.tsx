/* eslint-disable react-hooks/purity */

// "use client";


// import { LucideIcon } from "lucide-react";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import Image from "next/image";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   Brain,
//   Code2,
//   BarChart3,
//   Palette,
//   TrendingUp,
// } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// export default function SolutionWeProvide() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const headingRef = useRef<HTMLDivElement>(null);
//   const gridRef = useRef<HTMLDivElement>(null);
//   const codePanelRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<HTMLDivElement[]>([]);
//   const cubeRef = useRef<HTMLDivElement>(null);
//   const glowRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Typewriter effect for code
//     const el = document.getElementById("code-pre");
//     if (!el) return;
//     const text = el.innerHTML || "";
//     el.innerHTML = "";
    
//     const obj = { i: 0 };
    
//     gsap.to(obj, {
//       i: text.length,
//       duration: text.length * 0.015,
//       ease: "none",
//       repeat: -1,
//       repeatDelay: 1,
//       onUpdate: () => {
//         el.innerHTML = text.slice(0, Math.floor(obj.i)) + "|";
//       },
//       onRepeat: () => {
//         obj.i = 0;
//         el.innerHTML = "";
//       },
//       onComplete: () => {
//         el.innerHTML = text;
//       }
//     });
    
//     el.addEventListener("mouseenter", () => {
//       obj.i = 0;
//       el.innerHTML = "";
//       gsap.to(obj, {
//         i: text.length,
//         duration: text.length * 0.04,
//         ease: "none",
//         onUpdate: () => {
//           el.innerHTML = text.slice(0, Math.floor(obj.i)) + "|";
//         },
//         onComplete: () => {
//           el.innerHTML = text;
//         }
//       });
//     });
    
//     // Premium entrance animation
//     const ctx = gsap.context(() => {
//       // Create a master timeline for the entire section entrance
//       const masterTL = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           end: "top 20%",
//           toggleActions: "play none none reverse",
//         }
//       });
      
//       // Create particle effect for the heading
//       const headingParticles = gsap.utils.toArray(".heading-particle");
//       headingParticles.forEach((particle: any) => {
//         gsap.set(particle, {
//           opacity: 0,
//           y: -20,
//           x: gsap.utils.random(-50, 50),
//         });
//       });
      
//       // Section background glow up effect
//       masterTL.fromTo(glowRef.current,
//         {
//           scale: 0.3,
//           opacity: 0,
//         },
//         {
//           scale: 1,
//           opacity: 1,
//           duration: 1.2,
//           ease: "power3.out",
//         }
//       );
      
//       // Heading reveal with particles
//       masterTL.fromTo(headingRef.current,
//         {
//           opacity: 0,
//           y: 50,
//           scale: 0.9,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 1,
//           ease: "back.out(1.7)",
//           onStart: () => {
//             // Particle burst animation
//             gsap.to(headingParticles, {
//               opacity: 1,
//               y: 0,
//               x: 0,
//               duration: 0.6,
//               stagger: 0.02,
//               ease: "power3.out",
//             });
//           }
//         },
//         "-=0.5"
//       );
      
//       // Code panel 3D flip entrance
//       masterTL.fromTo(codePanelRef.current,
//         {
//           rotationY: 90,
//           opacity: 0,
//           scale: 0.8,
//           transformOrigin: "center center",
//         },
//         {
//           rotationY: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 1.2,
//           ease: "power3.out",
//         },
//         "-=0.3"
//       );
      
//       // Cube floating entrance
//       masterTL.fromTo(cubeRef.current,
//         {
//           rotation: 180,
//           scale: 0,
//           opacity: 0,
//           y: 100,
//         },
//         {
//           rotation: 0,
//           scale: 1,
//           opacity: 1,
//           y: 0,
//           duration: 1.2,
//           ease: "elastic.out(1, 0.5)",
//         },
//         "-=0.8"
//       );
      
//       // Grid cards staggered entrance with floating effect
//       cardsRef.current.forEach((card, i) => {
//         if (card) {
//           const delay = i * 0.15;
//           const yOffset = gsap.utils.random(30, 60);
//           const rotation = gsap.utils.random(-5, 5);
          
//           gsap.fromTo(card,
//             {
//               opacity: 0,
//               y: yOffset,
//               rotation: rotation,
//               scale: 0.85,
//             },
//             {
//               opacity: 1,
//               y: 0,
//               rotation: 0,
//               scale: 1,
//               duration: 0.8,
//               ease: "back.out(1.7)",
//               scrollTrigger: {
//                 trigger: card,
//                 start: "top 85%",
//                 end: "top 50%",
//                 toggleActions: "play none none reverse",
//               }
//             }
//           );
          
//           // Add continuous floating animation
//           gsap.to(card, {
//             y: gsap.utils.random(-5, 5),
//             rotation: gsap.utils.random(-1, 1),
//             duration: gsap.utils.random(2, 3),
//             repeat: -1,
//             yoyo: true,
//             ease: "sine.inOut",
//             delay: delay + 1,
//           });
//         }
//       });
      
//       // Code window lines reveal
//       const codeLines = gsap.utils.toArray(".code-line");
//       gsap.fromTo(codeLines,
//         {
//           opacity: 0,
//           x: -20,
//         },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 0.5,
//           stagger: 0.1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: codePanelRef.current,
//             start: "top 70%",
//             end: "top 40%",
//             toggleActions: "play none none reverse",
//           }
//         }
//       );
      
//       // Interactive hover effects for cards
//       cardsRef.current.forEach((card) => {
//         if (!card) return;
        
//         const icon = card.querySelector(".card-icon");
//         const content = card.querySelector(".card-content");
        
//         card.addEventListener("mouseenter", () => {
//           gsap.to(card, {
//             y: -8,
//             scale: 1.02,
//             duration: 0.3,
//             ease: "power2.out",
//           });
          
//           gsap.to(icon, {
//             rotation: 360,
//             scale: 1.1,
//             duration: 0.5,
//             ease: "back.out(1.7)",
//           });
          
//           // Glow effect
//           gsap.to(card, {
//             boxShadow: "0 20px 60px rgba(59, 130, 246, 0.3)",
//             duration: 0.3,
//           });
//         });
        
//         card.addEventListener("mouseleave", () => {
//           gsap.to(card, {
//             y: 0,
//             scale: 1,
//             boxShadow: "none",
//             duration: 0.3,
//             ease: "power2.inOut",
//           });
          
//           gsap.to(icon, {
//             rotation: 0,
//             scale: 1,
//             duration: 0.3,
//           });
//         });
//       });
//     }, sectionRef);
    
//     return () => ctx.revert();
//   }, []);
  
//   const addCardToRefs = (el: HTMLDivElement) => {
//     if (el && !cardsRef.current.includes(el)) {
//       cardsRef.current.push(el);
//     }
//   };

//   return (
//     <main 
//       ref={sectionRef}
//       className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-12 py-12 md:py-16 relative overflow-hidden"
//       style={{
//         background: "radial-gradient(circle at 50% 0%, rgba(17, 24, 39, 0.2) 0%, rgba(0, 0, 0, 1) 70%)",
//       }}
//     >
//       {/* Animated Gradient Glow */}
//       <div 
//         ref={glowRef}
//         className="absolute right-10 sm:right-20 top-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-br from-indigo-600/30 via-purple-500/20 to-blue-600/20 blur-[140px] rounded-full md:block hidden opacity-0"
//         style={{
//           animation: "pulse 8s ease-in-out infinite",
//         }}
//       />
      
//       {/* Particle effect for heading */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="heading-particle absolute w-[2px] h-[2px] bg-blue-400 rounded-full"
//             style={{
           
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//           />
//         ))}
//       </div>
      
//       {/* Heading */}
//       <div 
//         ref={headingRef}
//         className="text-center max-w-3xl mx-auto mb-12 md:mb-16 relative z-10 opacity-0"
//       >
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-playfairDisplay relative">
//           <span className="bg-gradient-to-r from-[#5593F7] via-[#9d7af0] to-[#C47DE8] bg-clip-text text-transparent animate-gradient bg-300">
//             AI
//           </span>{" "}
//           Solutions
//         </h1>
        
//         <div className="relative inline-block">
//           <p className="text-[#7588A3] text-[15px] sm:text-[16px] md:text-[18px] mt-4 font-inter relative z-10">
//             Stop dreaming about AI. Start using it. We build practical solutions that deliver ROI.
//           </p>
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent blur-xl opacity-0" id="text-glow" />
//         </div>
        
//         <a className="text-sm mt-4 inline-block text-accent-blue hover:underline relative group">
//           See all AI solutions →
//           <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#5593F7] to-[#C47DE8] group-hover:w-full transition-all duration-300" />
//         </a>
//       </div>
      
//       <div className="max-w-7xl mx-auto relative">
//         {/* GRID */}
//         <div
//           ref={gridRef}
//           className="
//             grid 
//             grid-cols-1 
//             lg:grid-cols-6 
//             lg:grid-rows-9 
//             gap-4 
//             lg:h-[720px]
//           "
//         >
          
//           {/* CENTER CODE PANEL */}
//           <div
//             ref={codePanelRef}
//             className="
//               order-1 
//               lg:order-none
//               lg:col-span-4 
//               lg:row-span-6 
//               lg:col-start-3 
//               lg:row-start-1 
//               relative opacity-0
//             "
//           >
//             <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#0b1020] via-[#070b16] to-[#05060c] border border-white/10 overflow-hidden relative group hover:border-blue-500/50 transition-all duration-500">
              
//               {/* Animated gradient border */}
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/0 via-blue-500/20 to-purple-600/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              
//               {/* Window Bar */}
//               <div className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-4 border-b border-white/5 bg-white/5 relative z-10">
//                 <div className="flex gap-2">
//                   <span className="w-3 h-3 bg-red-500 rounded-full hover:scale-125 transition-transform" />
//                   <span className="w-3 h-3 bg-yellow-400 rounded-full hover:scale-125 transition-transform" />
//                   <span className="w-3 h-3 bg-green-400 rounded-full hover:scale-125 transition-transform" />
//                 </div>
//                 <span className="ml-4 text-xs sm:text-sm text-gray-400">
//                   satson-ai.ts
//                 </span>
//                 <div className="ml-auto flex items-center gap-2">
//                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//                   <span className="text-xs text-green-500">AI Online</span>
//                 </div>
//               </div>
              
//               {/* Code */}
//               <div className="p-4 pb-12 md:pb-0 sm:p-6 md:p-8 font-mono text-[10px] sm:text-sm leading-6 sm:leading-7 overflow-hidden h-[320px] sm:h-[320px] relative z-10">
//                 <pre
//                   id="code-pre"
//                   className="whitespace-pre-wrap text-[#3C83F6] h-full overflow-y-auto"
//                 >
//                   <span className="code-line text-[#3C83F6]/70">// AI-Powered Chatbot</span>{"\n"}
//                   <span className="code-line text-[#3C83F6]">const</span> ai = <span className="code-line text-[#3C83F6]">new</span>{" "}
//                   <span className="code-line text-[#3C83F6]">SatsonAI</span>({"{"}{"\n"}
//                   <span className="code-line">  model: <span className="text-[#4ADE80]">"gpt-4-turbo"</span>,</span>{"\n"}
//                   <span className="code-line">  context: <span className="text-[#4ADE80]">"yourBusiness"</span>,</span>{"\n"}
//                   <span className="code-line">{"}"}</span>);{"\n\n"}
//                   <span className="code-line text-[#3C83F6]">const</span> response ={" "}
//                   <span className="code-line text-[#3C83F6]">await</span> ai.chat({"\n"}
//                   <span className="code-line">  <span className="text-[#4ADE80]">"How can I help your customers?"</span></span>{"\n"}
//                   <span className="code-line">)</span>;{"\n\n"}
//                   <span className="code-line text-[#3C83F6]/70">// → Instant, intelligent responses</span>
//                 </pre>
                
//                 {/* Code glow effect */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent pointer-events-none" />
//               </div>
              
//               {/* Bottom Bar */}
//               <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 py-2 flex justify-between items-center border-t border-white/5 bg-white/5 z-10">
//                 <span className="text-xs text-gray-400 flex items-center gap-2">
//                   <span className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
//                   AI Solutions
//                 </span>
//                 <span className="flex items-center gap-2 text-xs text-[#4ADE80] animate-pulse">
//                   <span className="w-2 h-2 rounded-full bg-[#4ADE80]" />
//                   Live Preview
//                 </span>
//               </div>
              
//               {/* Inner Glow */}
//               <div className="absolute inset-0 bg-gradient-to-tr from-[#3C83F6]/10 via-transparent to-[#4ADE80]/10 pointer-events-none" />
//             </div>
            
//             {/* Floating Cube */}
//             <div ref={cubeRef} className="opacity-0">
//               <Image
//                 src="https://res.cloudinary.com/dj7xotphr/image/upload/v1770103363/CUBE_Satson_ut0gl0.svg"
//                 alt="AI Cube"
//                 width={260}
//                 height={260}
//                 priority
//                 className="
//                   absolute 
//                   -top-8 -right-4 
//                   sm:-top-12 sm:-right-8 
//                   md:-top-[530px] md:-right-10 
//                   w-32 sm:w-40 md:w-52
//                   animate-float
//                 "
//               />


              
//             </div>
//           </div>
          
//           {/* CARD 1 */}
//           <div ref={addCardToRefs} className="order-2 lg:order-none lg:col-span-2 lg:row-span-3 opacity-0">
//             <AICard
//               Icon={Brain}
//               title="AI Strategy & Digital Consulting"
//               desc="Before building anything, we design intelligence."
//             />
//           </div>
          
//           {/* CARD 2 */}
//           <div ref={addCardToRefs} className="order-3 lg:order-none lg:col-span-2 lg:row-span-3 lg:col-start-1 lg:row-start-4 opacity-0">
//             <AICard
//               Icon={Code2}
//               title="AI-Powered Software Development"
//               desc="We build intelligent, scalable, enterprise-grade software."
//             />
//           </div>
          
//           {/* CARD 3 */}
//           <div ref={addCardToRefs} className="order-4 lg:order-none lg:col-span-2 lg:row-span-3 lg:col-start-1 lg:row-start-7 opacity-0">
//             <AICard
//               Icon={BarChart3}
//               title="AI Dashboards & Business Intelligence"
//               desc="We specialize in custom AI dashboards that think like a business brain."
//             />
//           </div>
          
//           {/* CARD 5 */}
//           <div ref={addCardToRefs} className="order-5 lg:order-none lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-7 opacity-0">
//             <AICard
//               Icon={Palette}
//               title="AI-Driven UI/UX & Product Design"
//               desc="Every site is built to turn visitors into customers. Persuasive design, optimized journeys, strategic CTAs."
//             />
//           </div>
          
//           {/* CARD 6 */}
//           <div ref={addCardToRefs} className="order-6 lg:order-none lg:col-span-2 lg:row-span-3 lg:col-start-5 lg:row-start-7 opacity-0">
//             <AICard
//               Icon={TrendingUp}
//               title="AI-Powered Digital Marketing & Growth"
//               desc="We don't run ads blindly."
//             />
//           </div>
          
//         </div>
//       </div>
      
      
//     </main>
//   );
// }

// /* ---------------- CARD COMPONENT ---------------- */

// function AICard({
//   Icon,
//   title,
//   desc,
//   link,
// }: {
//   Icon: LucideIcon;
//   title: string;
//   desc: string;
//   link?: string;
// }) {
//   return (
//     <div
//       className="h-full w-full rounded-2xl backdrop-blur-xl border border-white/10 p-5 sm:p-6 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 group card-content"
//       style={{
//         background: "linear-gradient(131.28deg, rgba(17, 24, 39, 0.8) 0%, rgba(11, 15, 25, 0.9) 100%)",
//       }}
//     >
//       {/* Animated gradient border on hover */}
//       <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/0 via-blue-500/20 to-purple-600/0 rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-500" />
      
//       <div className="relative z-10">
//         {/* ICON UI with hover effect */}
//         <div className="w-14 h-14 mb-4 rounded-xl flex items-center justify-center 
//                         bg-gradient-to-br from-[#0B1220] to-[#1E3A8A]/20 
//                         border border-white/10 group-hover:border-blue-500/50 
//                         transition-all duration-300 card-icon">
//           <Icon className="w-7 h-7 text-blue-400 group-hover:scale-110 transition-transform" />
//         </div>
        
//         <h3 className="text-white font-semibold leading-tight font-playfairDisplay text-[16px] sm:text-[20px] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
//           {title}
//         </h3>
        
//         <p className="text-[13px] sm:text-[15px] md:text-[16px] text-[#7588A3] mt-2 leading-relaxed font-inter group-hover:text-blue-100/70 transition-colors duration-300">
//           {desc}
//         </p>
//       </div>
      
//       {link && (
//         <span className="text-xs text-accent-blue mt-4 opacity-0 group-hover:opacity-100 transition duration-300 relative z-10">
//           {link}
//           <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 group-hover:w-full transition-all duration-300" />
//         </span>
//       )}
      
//       {/* Subtle glow effect */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-purple-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
//     </div>
//   );
// }





"use client";
import { LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

import {
  Brain,
  Code2,
  BarChart3,
  Palette,
  TrendingUp,
} from "lucide-react";


export default function SolutionWeProvide() {

  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = document.getElementById("code-pre");
  if (!el) return;

  const text = el.innerHTML || "";
  el.innerHTML = "";

  const obj = { i: 0 };

  gsap.to(obj, {
    i: text.length,
      duration: text.length * 0.015,
    ease: "none",
    repeat: -1,
    repeatDelay: 1,
    onUpdate: () => {
      el.innerHTML = text.slice(0, Math.floor(obj.i)) + "|";
    },
    onRepeat: () => {
      obj.i = 0;
      el.innerHTML = "";
    },
    onComplete: () => {
      el.innerHTML = text;
    }
  });

    el.addEventListener("mouseenter", () => {
      obj.i = 0;
      el.innerHTML = "";

      gsap.to(obj, {
        i: text.length,
        duration: text.length * 0.04,
        ease: "none",
        onUpdate: () => {
          el.innerHTML =
            text.slice(0, Math.floor(obj.i)) + "|";

        },

        onComplete: () => {
          el.innerHTML = text;
        }

      });
    });


    gsap.fromTo(
      sectionRef.current,
      { 
        y: "100vh",
        borderRadius: "100px 100px 0 0" // Rounded corners as it enters
      },
      {
        y: 0,
        borderRadius: "0px 0px 0 0",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // Start when the top of the container hits the bottom of the viewport
          end: "top top",    // End when the top of the container hits the top of the viewport
          scrub: true,       // Ties animation to scroll speed
          pin: false,
        },
      } )

// --- HANGER / OVERLAY ANIMATION ---
    // We target the section to slide up from the bottom of the viewport
    gsap.fromTo(
      sectionRef.current,
      { 
        y: "100vh",
        borderRadius: "100px 100px 0 0" // Rounded corners as it enters
      },
      {
        y: 0,
        borderRadius: "0px 0px 0 0",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // Start when the top of the container hits the bottom of the viewport
          end: "top top",    // End when the top of the container hits the top of the viewport
          scrub: true,       // Ties animation to scroll speed
          pin: false,
        },
      }
    );

    gsap.to("#hero-content", {
  scale: 0.9,
  opacity: 0.5,
  scrollTrigger: {
    trigger: containerRef.current,
    start: "top bottom",
    end: "top top",
    scrub: true,
  }
});


  }, []);



  return (

    <div ref={containerRef}>
    <main ref={sectionRef} className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-12 py-12 md:py-16 relative overflow-hidden">

      {/* Gradient Glow */}
      {/* <div className="absolute right-10 sm:right-20 top-20 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-indigo-600/40 blur-[160px] rounded-full  md:block hidden " /> */}

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-playfairDisplay">
          <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
            AI
          </span>{" "}
          Solutions
        </h1>

        <p className="text-[#7588A3] text-[15px] sm:text-[16px] md:text-[18px] mt-4 font-inter">
          Stop dreaming about AI. Start using it. We build practical solutions that deliver ROI.
        </p>

        <a className="text-sm mt-4 inline-block text-accent-blue hover:underline">
          See all AI solutions →
        </a>
      </div>

      <div className="max-w-7xl mx-auto">

        {/* GRID */}
        <div
          className="
            grid 
            grid-cols-1 
           
            lg:grid-cols-6 
            lg:grid-rows-9 
            gap-4 
            lg:h-[720px]
          "
        >

          {/* CENTER CODE PANEL – FIRST ON MOBILE */}
          <div
            className="
              order-1 
              lg:order-none
              lg:col-span-4 
              lg:row-span-6 
              lg:col-start-3 
              lg:row-start-1 
              relative
            "
          >
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#0b1020] via-[#070b16] to-[#05060c] border border-white/10  overflow-hidden relative">

              {/* Window Bar */}
              <div className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-4 border-b border-white/5 bg-white/5">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="w-3 h-3 bg-green-400 rounded-full" />
                <span className="ml-4 text-xs sm:text-sm text-gray-400">
                  satson-ai.ts
                </span>
              </div>

              {/* Code */}
            <div className="p-4 pb-12 md:pb-0 sm:p-6 md:p-8 font-mono text-[10px] sm:text-sm leading-6 sm:leading-7 overflow-hidden h-[320px] sm:h-[320px] ">

                <pre
  id="code-pre"
  className="whitespace-pre-wrap text-[#3C83F6] h-full overflow-y-auto"
>

  <span className="text-[#3C83F6]/70">// AI-Powered Chatbot</span>{"\n"}
  <span className="text-[#3C83F6]">const</span> ai = <span className="text-[#3C83F6]">new</span>{" "}
  <span className="text-[#3C83F6]">SatsonAI</span>({"{"}{"\n"}
  model: <span className="text-[#4ADE80]">"gpt-4-turbo"</span>,{"\n"}
  context: <span className="text-[#4ADE80]">"yourBusiness"</span>,{"\n"}
  {"}"});{"\n\n"}
  <span className="text-[#3C83F6]">const</span> response ={" "}
  <span className="text-[#3C83F6]">await</span> ai.chat({"\n"}
  <span className="text-[#4ADE80]">"How can I help your customers?"</span>{"\n"}
  );{"\n\n"}
  <span className="text-[#3C83F6]/70">// → Instant, intelligent responses</span>
</pre>

              </div>

              {/* Bottom Bar */}
              <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 py-2 flex justify-between items-center border-t border-white/5 bg-white/5">
                <span className="text-xs text-gray-400">AI Solutions</span>
                <span className="flex items-center gap-2 text-xs text-[#4ADE80]">
                  <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
                  Live Preview
                </span>
              </div>

              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3C83F6]/10 via-transparent to-[#4ADE80]/10 pointer-events-none" />
            </div>

            {/* Floating Cube */}
            <Image
              src="https://res.cloudinary.com/dj7xotphr/image/upload/v1770103363/CUBE_Satson_ut0gl0.svg"
              alt="AI Cube"
              width={260}
              height={260}
              priority
              className="
                absolute 
                -top-8 -right-4 
                sm:-top-12 sm:-right-8 
                md:-top-14 md:-right-10 
                w-32 sm:w-40 md:w-52
                "
            // drop-shadow-[0_0_60px_rgba(60,131,246,0.6)]
            />
          </div>

          {/* CARD 1 */}
          <div className="order-2 lg:order-none lg:col-span-2 lg:row-span-3">
            <AICard
               Icon={Brain}
              title="AI Strategy & Digital Consulting"
              desc="Before building anything, we design intelligence."
          
            />
          </div>

          {/* CARD 2 */}
          <div className="order-3 lg:order-none lg:col-span-2 lg:row-span-3 lg:col-start-1 lg:row-start-4">
            <AICard
               Icon={Code2}
              title="AI-Powered Software Development"
              desc="We build intelligent, scalable, enterprise-grade software."
            />
          </div>

          {/* CARD 3 */}
          <div className="order-4 lg:order-none lg:col-span-2 lg:row-span-3 lg:col-start-1 lg:row-start-7">
            <AICard
                Icon={BarChart3}
              title="AI Dashboards & Business Intelligence"
              desc="We specialize in custom AI dashboards that think like a business brain."
            />
          </div>

          {/* CARD 5 */}
          <div className="order-5 lg:order-none lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-7">
            <AICard
               Icon={Palette}
              title="AI-Driven UI/UX & Product Design"
              desc="Every site is built to turn visitors into customers. Persuasive design, optimized journeys, strategic CTAs."
            />
          </div>

          {/* CARD 6 */}
          <div className="order-6 lg:order-none lg:col-span-2 lg:row-span-3 lg:col-start-5 lg:row-start-7">
            <AICard
            Icon={TrendingUp}
              title="AI-Powered Digital Marketing & Growth"
              desc="We don’t run ads blindly."
            />
          </div>

        </div>
      </div>
    </main>
    </div>
  );
}

/* ---------------- CARD ---------------- */



function AICard({
  Icon,
  title,
  desc,
  link,
}: {
  Icon: LucideIcon;
  title: string;
  desc: string;
  link?: string;
}) {
  return (
    <div
      className="h-full w-full rounded-2xl backdrop-blur-xl border border-transparent p-5 sm:p-6 flex flex-col justify-between hover:border-indigo-500/40 transition group"
      style={{
        background: "linear-gradient(131.28deg, #111827 0%, #0B0F19 100%)",
      }}
    >
      <div>
        {/* ICON UI - SAME AS IMAGE */}
        <div className="w-14 h-14 mb-4 rounded-xl flex items-center justify-center 
                        bg-gradient-to-br from-[#0B1220] to-[#1E3A8A]/20 
                        0">
          <Icon className="w-7 h-7 text-blue-400" />
        </div>

        <h3 className="text-white font-semibold leading-tight font-playfairDisplay text-[16px] sm:text-[20px]">
          {title}
        </h3>

        <p className="text-[13px] sm:text-[15px] md:text-[16px] text-[#7588A3] mt-2 leading-relaxed font-inter">
          {desc}
        </p>
      </div>

      {link && (
        <span className="text-xs text-accent-blue mt-4 opacity-0 group-hover:opacity-100 transition">
          {link}
        </span>
      )}
    </div>
  );
}





