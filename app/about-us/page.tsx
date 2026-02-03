import TeamImageGrid from "../components/shared/TeamImageGrid"

export default function AboutUs() {



  return (
    <section className="relative overflow-hidden bg-Base px-4 pt-20 sm:pt-28 pb-16">

  {/* Background glows */}
  <div className="pointer-events-none absolute -top-[-7%] -left-30 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.35)_0%,rgba(122,59,255,0.0)_70%)] blur-[120px] hidden md:block" />
  <div className="pointer-events-none absolute md:top-[10%] lg:top-0 -right-40 w-[505px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(122,59,255,0.25)_0%,rgba(122,59,255,0.0)_70%)] blur-[120px] hidden md:block" />

  {/* HEADER (always first) */}
  <div className="relative z-10 max-w-4xl mx-auto text-center mb-10 md:mb-20">
    <span className="inline-block mb-6 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-4 py-1 text-xs text-[#60A5FA]">
      About Us
    </span>

    <h2 className="text-3xl md:text-5xl font-playfairDisplay text-white">
      Who Are{" "}
      <span className="bg-gradient-to-r from-[#C47DE8] to-[#5593F7] bg-clip-text text-transparent">
        We
      </span>
    </h2>

    <p className="mt-6 max-w-[520px] mx-auto text-[14px] md:text-[20px] font-inter text-secondaryText leading-relaxed">
      Satson Innovation Pvt Ltd is a forward-thinking technology company
      dedicated to empowering businesses with cutting-edge digital
      solutions that drive growth and enable long-term success.
    </p>
  </div>

  {/* CONTENT GRID */}
  <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

    {/* IMAGE GRID – comes second on mobile, right on desktop */}
    <div className="order-2 lg:order-2">
      <TeamImageGrid />
    </div>

    {/* TEXT CONTENT – comes third on mobile, left on desktop */}
    <div className="space-y-10 order-3 lg:order-1">

      {/* About */}
      <div>
        <h3 className="text-[24px] font-marcellus font-medium text-[#A78BFA] mb-3">
          About Us
        </h3>
        <p className="text-[15px] text-secondaryText leading-relaxed">
          Satson Innovation is a digital-first startup focused on building
          practical, scalable solutions for growing businesses. We work at
          the intersection of design, development, and strategy to create
          digital products that are clear, functional, and built for
          real-world growth. Whether it’s a website, platform, or complete
          digital system, our goal is simple: help brands move faster,
          smarter, and with confidence.
        </p>
      </div>

      {/* Vision */}
      <div>
        <h3 className="text-[24px] font-medium text-[#A78BFA] mb-3">
          Our Vision
        </h3>
        <p className="text-[15px] text-secondaryText leading-relaxed">
          To create a future where businesses of all sizes can leverage
          innovation and technology to scale confidently, without
          complexity or limits.
        </p>
      </div>

      {/* Mission */}
      <div>
        <h3 className="text-[24px] font-marcellus text-[#A78BFA] mb-3">
          Our Mission
        </h3>
        <p className="text-[15px] text-secondaryText leading-relaxed">
          To help startups and businesses turn ideas into reliable digital
          products through thoughtful design, strong development, and a
          growth-focused mindset.
        </p>
      </div>
    </div>

  </div>
</section>

  )
}




