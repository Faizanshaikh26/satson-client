"use client"

import { Globe, ArrowRight, Zap, Shield, TrendingUp, Palette, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal, StaggerContainer, StaggerItem } from '@/app/components/shared//Reveal'
import { CountUp } from '@/app/components/shared/CountUp'

/* ---------------- HERO ---------------- */
const Hero = () => {
    return (
        <section className="relative pt-30 overflow-hidden bg-Base" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal width="100%">
                    <div className="mb-10">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5593F7]/30 bg-[#5593F7]/10 text-[#5593F7] text-xs font-poppins font-bold tracking-wider">
                            <Globe className="w-4 h-4" />
                            Website Development
                        </span>
                    </div>
                </Reveal>

                <div className="max-w-5xl ">
                    <Reveal width="100%" delay={0.1}>
                        <h1 className="text-4xl md:text-5xl lg:text-8xl font-playfairDisplay font-extrabold leading-[1.05] mb-8">
                            Websites That Don't Just Look Good—
                            <span className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent block md:inline"> They Convert</span>
                        </h1>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <p className="text-xl font-inter max-w-2xl mb-12 leading-relaxed" style={{ color: '#7588A3' }}>
                            Your website is often the first impression customers have of your business.
                            We build sites that captivate visitors and turn them into loyal customers.
                        </p>
                    </Reveal>

                    <Reveal width="100%" delay={0.3}>
                        <div className="flex flex-col sm:flex-row gap-5 mb-24">
                            <button className="flex items-center justify-center gap-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] text-[#080C16] font-poppins font-bold py-4 px-10 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-[#5593F7]/20 hover:scale-105 active:scale-95">
                                Get Free Consultation <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="flex items-center justify-center bg-transparent border border-[#7588A3]/30 font-poppins font-bold py-4 px-10 rounded-xl hover:border-[#5593F7] transition-all active:scale-95" style={{ color: '#7588A3' }}>
                                View Our Work
                            </button>
                        </div>
                    </Reveal>
                </div>

                <StaggerContainer
                    className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full max-w-7xl mx-auto border-t border-[#7588A3]/20 pt-16 pb-12"
                    delay={0.5}
                >
                    <StaggerItem className="text-center">
                        <div className="text-xl md:text-3xl font-marcellus font-extrabold mb-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            <CountUp end={200} suffix="+" />
                        </div>
                        <div className="text-sm font-inter tracking-widest font-medium" style={{ color: '#7588A3' }}>
                            Websites Launched
                        </div>
                    </StaggerItem>

                    <StaggerItem className="text-center">
                        <div className="text-xl md:text-3xl font-marcellus font-extrabold mb-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            <CountUp end={85} suffix="%" />
                        </div>
                        <div className="text-sm font-inter tracking-widest font-medium" style={{ color: '#7588A3' }}>
                            Repeat Clients
                        </div>
                    </StaggerItem>

                    <StaggerItem className="text-center">
                        <div className="text-4xl md:text-3xl font-marcellus font-extrabold mb-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            <CountUp end={400} suffix="%" />
                        </div>
                        <div className="text-sm font-inter tracking-widest font-medium" style={{ color: '#7588A3' }}>
                            Avg. Conversion Boost
                        </div>
                    </StaggerItem>

                    <StaggerItem className="text-center">
                        <div className="text-4xl md:text-3xl font-marcellus font-extrabold mb-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            &lt; <CountUp end={2} suffix="s" />
                        </div>
                        <div className="text-sm font-inter tracking-widest font-medium" style={{ color: '#7588A3' }}>
                            Load Time
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </div>
        </section>
    )
}

/* ---------------- WHY US ---------------- */
const WhyUs = () => {
    return (
        <section className="py-24 bg-Base">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal width="100%">
                    <div className="text-center mb-16">
                        <h2 className="text-lg md:text-lg font-playfairDisplay font-extrabold mb-4" >
                            Why Our Websites Stand Out
                        </h2>
                        <p className="font-inter max-w-xl mx-auto text-lg" style={{ color: '#7588A3' }}>
                            We don't just build websites—we engineer digital experiences that drive business results.
                        </p>
                    </div>
                </Reveal>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Zap, title: 'Lightning Fast', text: 'Optimized for speed with sub-2-second load times that keep visitors engaged.' },
                        { icon: Shield, title: 'Secure & Reliable', text: 'Built with security best practices. SSL, protection against common vulnerabilities' },
                        { icon: TrendingUp, title: 'SEO Optimized', text: 'Structured for search engines from day one. Get found by your ideal customers.' },
                        { icon: Palette, title: 'Stunning Design', text: 'Custom designs that capture your brand essence and stand out from competitors.' }
                    ].map((item, i) => (
                        <StaggerItem key={i}>
                            <div className="h-full p-8 rounded-2xl border border-[#7588A3]/10 hover:border-[#5593F7]/50 transition-all group hover:-translate-y-2 duration-300" style={{ backgroundColor: '#080C16' }}>
                                <div className="w-14 h-14 rounded-xl border border-[#5593F7]/30 flex items-center justify-center mb-6 transition-all">
                                    <item.icon className="w-8 h-8 text-[#5593F7]" />
                                </div>
                                <h3 className="text-lg font-poppins font-bold mb-4 text-white">{item.title}</h3>
                                <p className="font-inter text-sm leading-relaxed" style={{ color: '#7588A3' }}>{item.text}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}

/* ---------------- PROCESS ---------------- */
const Process = () => {
    return (
        <section className="py-24 bg-Base" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal width="100%">
                    <div className="mb-16">
                        <div className="w-20 h-1.5 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] mb-8 rounded-full" />
                        <h2 className="text-2xl md:text-2xl font-playfairDisplay font-bold mb-4 text-white">Our Process</h2>
                        <p className="text-lg font-inter" style={{ color: '#7588A3' }}>
                            A proven methodology that delivers exceptional results, every time.
                        </p>
                    </div>
                </Reveal>

                <StaggerContainer className="grid md:grid-cols-4 gap-8">
                    {[
                        { num: '01', title: 'Discovery', text: 'We dive deep into your business, audience, and goals to understand exactly what you need.' },
                        { num: '02', title: 'Design', text: 'Our designers create stunning mockups that capture your brand and convert visitors.' },
                        { num: '03', title: 'Development', text: 'We build your site with clean, modern code that\'s fast, secure, and scalable.' },
                        { num: '04', title: 'Launch & Support', text: 'We handle deployment and provide ongoing support to keep your site running smoothly.' }
                    ].map((step, i) => (
                        <StaggerItem key={i}>
                            <div className="border-t border-[#7588A3]/20 transition-colors pt-8">
                                <div className="text-6xl font-marcellus font-black mb-4 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                                    {step.num}
                                </div>
                                <h4 className="text-xl font-poppins font-bold mb-2 text-white">{step.title}</h4>
                                <p className="text-sm font-inter" style={{ color: '#7588A3' }}>{step.text}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}

/* ---------------- FEATURES ---------------- */
const Features = () => {
    return (
        <section className="py-10" style={{ backgroundColor: '#080C16' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <Reveal width="100%">
                            <h2 className="text-2xl md:text-2xl font-playfairDisplay font-extrabold mb-8 text-white" >
                                Everything You Need for a Successful Website
                            </h2>
                            <p className="font-inter mb-10 text-lg" style={{ color: '#7588A3' }}>
                                We handle every aspect of your website project so you can focus on running your business.
                            </p>
                        </Reveal>

                        <StaggerContainer className="grid sm:grid-cols-2 gap-5">
                            {[
                                'Custom responsive design',
                                'Mobile-first approach',
                                'Content management system',
                                'Analytics integration',
                                'Performance optimization',
                                'Ongoing maintenance'
                            ].map((f, i) => (
                                <StaggerItem key={i}>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="text-[#5593F7] w-6 h-6" />
                                        <span className="font-inter text-secondaryText" >{f}</span>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    <Reveal width="100%" delay={0.3}>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="aspect-square rounded-3xl bg-gradient-to-br from-[#5593F7]/10 to-[#C47DE8]/10 border border-[#7588A3]/20 flex flex-col items-center justify-center p-12 gap-4"
                        >
                            <Globe className="w-24 h-24 text-[#5593F7]" />
                            <p className="text-2xl font-playfairDisplay font-bold text-center bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                                Your Success Starts Here
                            </p>
                        </motion.div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

/* ---------------- CTA ---------------- */
const CTA = () => {
    return (
        <section className="py-32 text-center bg-Base relative overflow-hidden " >
            <div className="max-w-4xl mx-auto px-4">
                <Reveal width="100%">
                    <h2 className="text-2xl md:text-xl font-playfairDisplay font-extrabold mb-8 text-white">
                        Ready to Build Your Dream Website?
                    </h2>
                    <p className="text-lg font-inter mb-12" style={{ color: '#7588A3' }}>
                        Let's discuss your project and create something amazing together. No pressure, just a friendly conversation about your goals.
                    </p>
                </Reveal>

                <Reveal width="100%" delay={0.2}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] text-[#080C16] font-poppins font-bold py-4 px-10 rounded-xl hover:scale-105 transition-all shadow-xl">
                            Get Free Consultation <ArrowRight className="inline w-5 h-5 ml-2" />
                        </button>

                        <button className="flex items-center justify-center bg-transparent border border-[#7588A3]/30 font-poppins font-bold py-4 px-10 rounded-xl hover:border-[#5593F7] transition-all active:scale-95" style={{ color: '#7588A3' }}>
                            View Our Work
                        </button>
                    </div>
                </Reveal>

                <p className="text-sm text-center font-inter mt-6" style={{ color: '#7588A3' }}>
                    Or reach us directly: <a href="mailto:contact@shariwaa.com" className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent hover:underline">contact@shariwaa.com</a>
                </p>
            </div>
        </section>
    )
}

/* ---------------- MAIN EXPORT ---------------- */
const Websites = () => {
    return (
        <div>
            <Hero />
            <WhyUs />
            <Process />
            <Features />
            <CTA />
        </div>
    )
}

export default Websites