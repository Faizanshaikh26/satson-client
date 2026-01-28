import { ArrowRightIcon, Play } from "lucide-react";
import Link from "next/link";

import { MdEmail } from "react-icons/md";

export default function BuildTogether() {
  return (
    <main className=" flex items-center justify-center py-6  md:py-20 px-4">
      
      {/* Wrapper */}
      <div className="relative w-full max-w-4xl">

        {/* Card */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#0B1220] to-[#070B14] px-4 md:px-8 py-6 md:py-12 text-center border border-white/5 ">

          {/* Heading */}
          <h1 className="text-[20px] md:text-5xl font-bold text-white font-playfairDisplay">
            Let&apos;s Build{" "}
            <span className=" bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
              Together
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5  max-w-2xl mx-auto text-[12px] md:text-[18px] md:text-base text-secondaryText leading-relaxed font-poppins">
            Get a free consultation and project estimate. No commitment,
            no pressure just honest advice on how to achieve your goals.
          </p>

          {/* Highlight line */}
          <p className="mt-1 md:mt-3 text-[14px] md:text-[16px] text-accent-blue font-poppins">
            Response within 24 hours guaranteed.
          </p>

          {/* Buttons */}
       <div className="mt-2 md:mt-6 flex md:flex-row md:flex-wrap gap-3 justify-center">




<Link href="/contact-us">



<button
  className="inline-flex items-center justify-center gap-2 rounded-md font-poppins
             bg-gradient-to-r from-[#C243FE] to-[#9B34CB]
             px-3 sm:px-5 py-2
             text-[10px] sm:text-sm font-medium text-black
             transition-all duration-200
             hover:opacity-90
             focus:outline-none focus:ring-2 focus:ring-purple-500/40"
>
  Get free consultation
  <ArrowRightIcon className="md:h-3.5 h-3 w-3 md:w-3.5" />
</button>


  </Link>


<Link href="/lets-talk">


<button
  className="inline-flex items-center justify-center gap-2 rounded-md font-poppins
             bg-white/5
             px-4 sm:px-5 py-2
             text-xs sm:text-sm font-medium text-white
             transition-all duration-200
             hover:bg-white/10
             focus:outline-none focus:ring-2 focus:ring-white/30"
>
  <Play className="h-3.5 w-3.5" />
  Schedule a Call
</button>


  </Link>

</div>


          {/* Email */}
          <div className="mt-6 md:mt-8 flex items-center justify-center gap-2 text-[16px] font-inter text-secondaryText">
            <span>
                <MdEmail size={20}/>
            </span>
            <span>info@satsoninnovation.com</span>
          </div>
        </div>

      

      </div>
    </main>
  )
}
