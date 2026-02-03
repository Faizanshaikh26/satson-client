"use client";
import { LucideIcon } from "lucide-react";
import { useEffect } from "react";
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


  }, []);



  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-12 py-12 md:py-16 relative overflow-hidden">

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
              src="/assets/logo/CUBE Satson.svg"
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
