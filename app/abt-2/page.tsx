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
        <span className="font-marcellus text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#7588A3]">Satson Innovation Pvt. Ltd.</span>
      </div>
      <h1 className="font-playfairDisplay text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight text-white max-w-5xl">
        Smart Technology.
        <span className="block mt-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
          Intelligent Business.
        </span>
      </h1>
      <p className="font-poppins text-[#7588A3] text-base sm:text-lg md:text-xl max-w-2xl mt-8 sm:mt-10 leading-relaxed font-light">
        A technology innovation company specializing in AI-powered digital solutions 
        and smart business systems that help enterprises modernize, automate, and scale.
      </p>
    </div>

    {/* —— 1. NUCLEUS: positioning (updated with document content) —— */}
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

    {/* —— 2. SERVICES / CAPABILITIES (updated with complete catalog from document) —— */}
    <div className="mb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
        <div>
          <span className="font-marcellus text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#5593F7]/70">Services Catalog</span>
          <h2 className="font-playfairDisplay text-3xl sm:text-4xl md:text-5xl text-white mt-4 sm:mt-6 max-w-2xl">
            AI. Software.
            <span className="block bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
              Business Systems.
            </span>
          </h2>
        </div>
        <p className="font-poppins text-[#7588A3] text-sm sm:text-base max-w-xs mt-3 md:mt-0">
          POS, CRM, ERP, AI agents — we own the stack.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl sm:rounded-3xl overflow-hidden">
        {/* AI & Intelligent Solutions */}
        <div className="bg-[#080C16] p-6 sm:p-8 lg:p-10 border-b md:border-b-0 border-white/5">
          <h3 className="font-marcellus text-xs sm:text-sm tracking-wider text-white/90 mb-5 sm:mb-6 flex items-center gap-2">
            <span className="text-[#5593F7]">——</span> AI & INTELLIGENT SOLUTIONS
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-poppins text-[#5593F7]/80 text-xs uppercase tracking-wider mb-2">Custom AI Chatbots</p>
              <ul className="space-y-2">
                <li className="font-poppins text-[#7588A3] text-xs sm:text-sm flex items-start gap-2 ml-2">
                  <span className="text-[#C47DE8] text-[10px]">→</span> Conversational bots for web, support, sales, WhatsApp
                </li>
                <li className="font-poppins text-[#7588A3] text-xs sm:text-sm flex items-start gap-2 ml-2">
                  <span className="text-[#C47DE8] text-[10px]">→</span> Domain-specific language bots (legal, healthcare, e-commerce)
                </li>
              </ul>
            </div>
            <div>
              <p className="font-poppins text-[#5593F7]/80 text-xs uppercase tracking-wider mb-2">AI-Powered Applications</p>
              <ul className="space-y-2">
                <li className="font-poppins text-[#7588A3] text-xs sm:text-sm flex items-start gap-2 ml-2">
                  <span className="text-[#C47DE8] text-[10px]">→</span> Recommendation engines
                </li>
                <li className="font-poppins text-[#7588A3] text-xs sm:text-sm flex items-start gap-2 ml-2">
                  <span className="text-[#C47DE8] text-[10px]">→</span> NLP tools for review analysis
                </li>
                <li className="font-poppins text-[#7588A3] text-xs sm:text-sm flex items-start gap-2 ml-2">
                  <span className="text-[#C47DE8] text-[10px]">→</span> Predictive analytics
                </li>
              </ul>
            </div>
            <div>
              <p className="font-poppins text-[#5593F7]/80 text-xs uppercase tracking-wider mb-2">Business Intelligence</p>
              <ul className="space-y-2">
                <li className="font-poppins text-[#7588A3] text-xs sm:text-sm flex items-start gap-2 ml-2">
                  <span className="text-[#C47DE8] text-[10px]">→</span> Dashboards & reporting
                </li>
                <li className="font-poppins text-[#7588A3] text-xs sm:text-sm flex items-start gap-2 ml-2">
                  <span className="text-[#C47DE8] text-[10px]">→</span> Data analytics & visualization
                </li>
                <li className="font-poppins text-[#7588A3] text-xs sm:text-sm flex items-start gap-2 ml-2">
                  <span className="text-[#C47DE8] text-[10px]">→</span> Forecasting & insight engines
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Software & Web Development */}
        <div className="bg-[#080C16] p-6 sm:p-8 lg:p-10 border-b md:border-b-0 border-white/5 md:border-l md:border-r border-white/5">
          <h3 className="font-marcellus text-xs sm:text-sm tracking-wider text-white/90 mb-5 sm:mb-6 flex items-center gap-2">
            <span className="text-[#C47DE8]">——</span> SOFTWARE & WEB DEVELOPMENT
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-poppins text-[#C47DE8]/80 text-xs uppercase tracking-wider mb-2">Website Development</p>
              <ul className="space-y-2">
                <li className="font-poppins text-[#7588A3] text-xs sm:text-sm flex items-start gap-2 ml-2">
                  <span className="text-[#5593F7] text-[10px]">→</span> Static, dynamic & content-rich sites
                </li>
                <li className="font-poppins text-[#7588A3] text-xs sm:text-sm flex items-start gap-2 ml-2">
                  <span className="text-[#5593F7] text-[10px]">→</span> SEO-optimized and scalable
                </li>
              </ul>
            </div>
            <div>
              <p className="font-poppins text-[#C47DE8]/80 text-xs uppercase tracking-wider mb-2">Web Applications</p>
              <ul className="space-y-2">
                <li className="font-poppins text-[#7588A3] text-xs sm:text-sm flex items-start gap-2 ml-2">
                  <span className="text-[#5593F7] text-[10px]">→</span> SaaS portals
                </li>
                <li className="font-poppins text-[#7588A3] text-xs sm:text-sm flex items-start gap-2 ml-2">
                  <span className="text-[#5593F7] text-[10px]">→</span> Internal automation tools
                </li>
                <li className="font-poppins text-[#7588A3] text-xs sm:text-sm flex items-start gap-2 ml-2">
                  <span className="text-[#5593F7] text-[10px]">→</span> Customer engagement systems
                </li>
              </ul>
            </div>
            <div>
              <p className="font-poppins text-[#C47DE8]/80 text-xs uppercase tracking-wider mb-2">Mobile & UX</p>
              <ul className="space-y-2">
                <li className="font-poppins text-[#7588A3] text-xs sm:text-sm flex items-start gap-2 ml-2">
                  <span className="text-[#5593F7] text-[10px]">→</span> iOS & Android / Cross-platform
                </li>
                <li className="font-poppins text-[#7588A3] text-xs sm:text-sm flex items-start gap-2 ml-2">
                  <span className="text-[#5593F7] text-[10px]">→</span> UI/UX: usability-centered design
                </li>
                <li className="font-poppins text-[#7588A3] text-xs sm:text-sm flex items-start gap-2 ml-2">
                  <span className="text-[#5593F7] text-[10px]">→</span> Product design systems & prototypes
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Business Systems & Enterprise Software */}
        <div className="bg-[#080C16] p-6 sm:p-8 lg:p-10">
          <h3 className="font-marcellus text-xs sm:text-sm tracking-wider text-white/90 mb-5 sm:mb-6 flex items-center gap-2">
            <span className="text-[#5593F7]">——</span> BUSINESS SYSTEMS & ENTERPRISE
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-poppins text-[#5593F7]/80 text-xs uppercase tracking-wider mb-2">POS Systems</p>
              <p className="font-poppins text-[#7588A3] text-xs sm:text-sm ml-2 mb-3">
                Sales terminal solutions for retail & outlets
              </p>
            </div>
            <div>
              <p className="font-poppins text-[#C47DE8]/80 text-xs uppercase tracking-wider mb-2">CRM Solutions</p>
              <p className="font-poppins text-[#7588A3] text-xs sm:text-sm ml-2 mb-3">
                Customer relationship & engagement software
              </p>
            </div>
            <div>
              <p className="font-poppins text-[#5593F7]/80 text-xs uppercase tracking-wider mb-2">ERP Systems</p>
              <ul className="space-y-2">
                <li className="font-poppins text-[#7588A3] text-xs sm:text-sm flex items-start gap-2 ml-2">
                  <span className="text-[#C47DE8] text-[10px]">→</span> Inventory, accounting, HR & operations
                </li>
                <li className="font-poppins text-[#7588A3] text-xs sm:text-sm flex items-start gap-2 ml-2">
                  <span className="text-[#C47DE8] text-[10px]">→</span> Scalable ERP for SMEs & enterprise
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* —— 3. VERTICALS (updated with complete industry focus from document) —— */}
    <div className="mb-24 sm:mb-32">
      <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
        <Compass size={16} className="sm:w-[18px] sm:h-[18px] text-[#C47DE8]" strokeWidth={1.5} />
        <span className="font-marcellus text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#7588A3]">Industry focus</span>
      </div>
      
      {/* Industry verticals with context */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {[
          { industry: "Retail & E-Commerce", value: "AI personalization & smart systems improve sales" },
          { industry: "Hospitality & F&B", value: "POS, CRM, ERP improve service delivery & revenue" },
          { industry: "Healthcare & Wellness", value: "AI intake systems & dashboards streamline patient flow" },
          { industry: "Education & EdTech", value: "AI tutoring/chatbots enhance learning experience" },
          { industry: "Enterprise Software / B2B SaaS", value: "Custom systems and automation are core needs" },
          { industry: "Logistics & Supply Chain", value: "Intelligent tracking & analytics for operations" },
          { industry: "Professional Services", value: "Digital portals & analytics support productivity" },
          { industry: "FinTech", value: "Secure, intelligent financial systems" },
          { industry: "Manufacturing", value: "Operational intelligence & automation" }
        ].map((item, i) => (
          <div key={i} className="border border-white/5 bg-white/[0.02] rounded-xl p-4 hover:border-[#5593F7]/20 transition-colors">
            <h4 className="font-marcellus text-sm text-white/90 mb-1">{item.industry}</h4>
            <p className="font-poppins text-[10px] sm:text-xs text-[#7588A3] leading-relaxed">{item.value}</p>
          </div>
        ))}
      </div>
      
      {/* Mobile scroll fallback - chips */}
      <div className="relative md:hidden">
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#080C16] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#080C16] to-transparent pointer-events-none z-10" />
        <div className="overflow-x-auto overflow-y-visible pb-2 -mb-2 [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-2 w-max">
            {["Retail","Hospitality","Healthcare","EdTech","B2B SaaS","Logistics","Professional Services","FinTech","Manufacturing"].map((v, i) => (
              <span key={i} className="font-poppins text-xs px-3 py-1.5 border border-white/5 bg-white/[0.02] rounded-full text-[#7588A3] whitespace-nowrap flex-shrink-0">
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* —— 4. THE SATSON STORY (updated with founding year 2021 from document) —— */}
    <section className="mb-20 relative">
      <div className="absolute left-0 top-12 w-full h-px bg-gradient-to-r from-[#5593F7]/0 via-[#5593F7]/30 to-[#C47DE8]/0" />
      
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 relative">
        <div className="lg:col-span-7 space-y-8 lg:space-y-10">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="font-marcellus text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#7588A3]">—— Origin fragment</span>
            <span className="w-6 sm:w-8 h-[1px] bg-[#5593F7]/40" />
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 sm:space-y-3">
              <h2 className="font-playfairDisplay text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight">
                <span className="italic font-light text-[#7588A3]/60">2021</span>
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
                Today, our systems power businesses across 20+ countries — but the commit messages still sound human.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative mt-8 lg:mt-0">
          <div className="lg:sticky lg:top-32 space-y-8 lg:space-y-12">
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

            <div className="relative flex flex-col items-start lg:items-end">
              <div className="relative w-full max-w-[320px] lg:ml-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5593F7]/8 via-transparent to-[#C47DE8]/8 rounded-3xl blur-md" />
                <div className="relative bg-[#080C16] border border-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden backdrop-blur-sm
                              before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMjAgMjBoMjB2MjBIMjB6TTAgMGgyMHYyMEgweiIgZmlsbD0icmdiYSg4NSwxNDcsMjQ3LDAuMDIpIi8+PC9zdmc+')] opacity-20">
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
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
              
              <span className="font-mono text-[7px] sm:text-[8px] uppercase tracking-[0.4em] text-white/10 mt-4 sm:mt-6 mr-0 lg:mr-2 select-none">
                ──── Satson core ────
              </span>
            </div>
          </div>
        </div>
      </div>
      
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

    {/* —— 5. VISION / MISSION (updated with document positioning) —— */}
    <div className="mb-20 relative">
      <div className="absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-[#5593F7]/0 via-[#5593F7]/20 to-[#C47DE8]/0 hidden md:block" />
      
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 lg:gap-24 relative">
        
        {/* left — Vision */}
        <div className="relative group">
          <div className="absolute -inset-x-4 sm:-inset-x-6 -inset-y-4 bg-[#5593F7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
          <div className="relative space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-[#5593F7] to-[#5593F7]/20" />
              <span className="font-marcellus text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#7588A3]">—— 01</span>
            </div>
            
            <div className="space-y-5 sm:space-y-6">
              <h2 className="font-playfairDisplay text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight">
                <span className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent block text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-2 sm:mb-3">
                  north star
                </span>
                <span className="text-4xl sm:text-5xl md:text-6xl">
                  future-ready<br/>digital solutions.
                </span>
              </h2>
              
              <div className="max-w-md space-y-4 sm:space-y-5 pt-3 sm:pt-4">
                <p className="font-poppins text-[#7588A3] text-sm sm:text-base md:text-lg leading-relaxed">
                  To deliver smart, scalable, and future-ready digital solutions powered by AI, 
                  automation, and business intelligence — enabling businesses to digitize operations 
                  and make data-driven decisions.
                </p>
                
                <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4">
                  <div className="w-8 sm:w-10 h-px bg-[#5593F7]/40" />
                  <span className="font-marcellus text-[10px] sm:text-xs italic text-[#C47DE8]/70">
                    Technology amplifies human potential.
                  </span>
                </div>
                
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
              <span className="font-marcellus text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#7588A3]">—— 02</span>
            </div>
            
            <div className="space-y-5 sm:space-y-6 md:text-right lg:text-left">
              <h2 className="font-playfairDisplay text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight">
                <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent block text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-2 sm:mb-3">
                  daily truth
                </span>
                <span className="text-4xl sm:text-5xl md:text-6xl">
                  modernize,<br/>automate, scale.
                </span>
              </h2>
              
              <div className="max-w-md ml-0 md:ml-auto lg:ml-0 space-y-4 sm:space-y-5 pt-3 sm:pt-4">
                <p className="font-poppins text-[#7588A3] text-sm sm:text-base md:text-lg leading-relaxed">
                  We build AI-powered software and business systems that transform operations 
                  into modern, data-smart engines of growth. No fanfare. No friction. Just systems 
                  that automate, control, and scale companies.
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

    {/* —— 6. VALUES (updated with document positioning) —— */}
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
        {[
          {
            title: "AI-First Architecture",
            desc: "Every system we build is designed to learn, predict, and adapt. Intelligence isn't a feature — it's the foundation.",
            icon: <div className="w-6 h-6 text-[#5593F7]">⚡</div>
          },
          {
            title: "Scalable by Default",
            desc: "From SME to enterprise, our systems grow with you. No rewrites. No bottlenecks. Just endurance.",
            icon: <div className="w-6 h-6 text-[#C47DE8]">▲</div>
          },
          {
            title: "Data-Driven Decisions",
            desc: "Dashboards, analytics, forecasting — we turn operations into insight, and insight into advantage.",
            icon: <div className="w-6 h-6 text-[#5593F7]">◆</div>
          },
          {
            title: "Own the Stack",
            desc: "No black boxes. You see the commit history, you hear the debates. Shared ownership of every line.",
            icon: <div className="w-6 h-6 text-[#C47DE8]">⎔</div>
          },
          {
            title: "Customer-Obsessed",
            desc: "SMEs, enterprises, startups — we build for your specific gravity. Your win condition is our architecture.",
            icon: <div className="w-6 h-6 text-[#5593F7]">●</div>
          },
          {
            title: "Future-Ready",
            desc: "We don't chase trends. We build infrastructure that outlives roadmaps, paradigms, and hype cycles.",
            icon: <div className="w-6 h-6 text-[#C47DE8]">∞</div>
          }
        ].map((item, i) => (
          <div key={i} className="bg-[#080C16] p-6 sm:p-8 transition-all hover:bg-[#0B101E]">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="mt-1 shrink-0 text-lg">{item.icon}</div>
              <div>
                <h3 className="font-playfairDisplay text-base sm:text-lg text-white mb-1.5 sm:mb-2">{item.title}</h3>
                <p className="font-poppins text-[#7588A3] text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* —— 7. THE SATSON VIBE (updated with client focus from document) —— */}
    <div className="border-t border-white/5 pt-16 sm:pt-20 lg:pt-24 mb-24 sm:mb-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
          <span className="font-mono text-[8px] sm:text-[10px] uppercase tracking-[0.4em] text-[#5593F7]/50">—— 0x7E</span>
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-[#5593F7]/40 to-transparent" />
          <span className="font-marcellus text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#7588A3]">ideal clients</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <h2 className="font-playfairDisplay text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight">
              <span className="text-4xl sm:text-5xl md:text-6xl font-medium">
                who we
              </span>
              <span className="block bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl mt-1 sm:mt-2">
                build for.
              </span>
            </h2>
            
            <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
              <p className="font-poppins text-[#7588A3] text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                SMEs & startups looking for affordable, powerful tech. 
                Enterprises ready to automate and scale. 
                Tech companies needing custom AI modules.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {[
                "SMEs & Startups",
                "Mid-to-Large Enterprises",
                "Tech Companies",
                "Retail & E-Commerce",
                "Service & Professional Firms",
                "Healthcare & Wellness",
                "Logistics & Supply Chain",
                "B2B SaaS"
              ].map((client, i) => (
                <div key={i} className="border-l-2 border-[#5593F7]/20 pl-3 py-1">
                  <span className="font-marcellus text-xs sm:text-sm text-white/80">{client}</span>
                </div>
              ))}
            </div>
            
            <p className="font-poppins text-[#7588A3] text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-6 mt-4">
              We work with organizations that refuse to settle — from bootstrapped startups to 
              multinational enterprises. The common thread: a need for intelligence, automation, and endurance.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-start mt-16 sm:mt-20 lg:mt-24 border-t border-white/5 pt-6 sm:pt-8">
        <div className="flex items-center gap-3 sm:gap-4 font-mono text-[8px] sm:text-[9px] uppercase text-[#7588A3]/30 tracking-[0.4em]">
          <span>clients.20+</span>
          <span className="w-px h-2 sm:h-3 bg-white/10" />
          <span>countries.20+</span>
          <span className="w-px h-2 sm:h-3 bg-white/10" />
          <span>deployments.247</span>
        </div>
      </div>
    </div>

    {/* —— 8. COLOPHON / CLOSING (updated with official positioning) —— */}
    <div className="mb-16 sm:mb-20 lg:mb-24 relative">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5593F7]/30 to-transparent" />
      
      <div className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 grid lg:grid-cols-12 gap-8 lg:gap-12 relative">
        
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32 space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-[#5593F7] to-[#C47DE8]" />
              <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.4em] text-[#7588A3]/40">
                colophon
              </span>
            </div>
            
            <div className="space-y-2 sm:space-y-3 font-mono text-[8px] sm:text-[10px] text-[#7588A3]/30 uppercase tracking-wider">
              <p>Satson Innovation Pvt. Ltd.</p>
              <p>AI · Automation · Business Intelligence</p>
              <p>POS · CRM · ERP · Custom Software</p>
              <p>est. 2021 · 20+ countries</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 space-y-10 sm:space-y-12">
          
          <div className="space-y-8 sm:space-y-10">
            <div className="space-y-4 sm:space-y-6">
              <span className="font-marcellus text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#7588A3] block">
                —— Smart Technology. Intelligent Business.
              </span>
              
              <h2 className="font-playfairDisplay text-4xl sm:text-5xl md:text-7xl text-white leading-[1.1] tracking-tight max-w-3xl">
                <span className="text-5xl sm:text-6xl md:text-8xl font-light italic text-white/90">we</span>
                <span className="block text-4xl sm:text-5xl md:text-6xl mt-2 sm:mt-3">
                  engineer systems
                  <span className="block bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl mt-1 sm:mt-2">
                    that scale.
                  </span>
                </span>
              </h2>
            </div>

            <div className="max-w-xl space-y-6 sm:space-y-8">
              <p className="font-poppins text-[#7588A3] text-base sm:text-lg md:text-xl leading-relaxed">
                We don't build features. We build business systems that automate, control, and scale companies. 
                From AI chatbots to enterprise ERP — your stack, your intelligence, your growth.
              </p>
              
              <div className="flex items-center gap-4 sm:gap-6 pt-4 sm:pt-6 group cursor-pointer">
                <span className="font-marcellus text-xs sm:text-sm uppercase tracking-[0.2em] text-white/70 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#5593F7] group-hover:to-[#C47DE8] group-hover:bg-clip-text transition-all duration-300">
                  initiate conversation
                </span>
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] text-[#5593F7] opacity-70 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                <div className="h-px w-8 sm:w-12 bg-white/10 group-hover:bg-gradient-to-r group-hover:from-[#5593F7] group-hover:to-[#C47DE8] transition-all" />
              </div>
            </div>
          </div>

          <div className="pt-12 sm:pt-16 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-8">
            <div className="space-y-1 sm:space-y-2">
              <p className="font-playfairDisplay text-xl sm:text-2xl text-white/90 tracking-tight">
                Satson Innovation Pvt. Ltd.
              </p>
              <p className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.4em] text-[#7588A3]/40">
                ai · automation · bi
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