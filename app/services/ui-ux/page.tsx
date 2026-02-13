"use client"

import {  ArrowRight,   Palette, CheckCircle, Star, Eye,  Layers,  MousePointer, PenTool, Lightbulb } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal, StaggerContainer, StaggerItem } from '../../components/shared/Reveal'
import { CTA } from '../Cta'

/* ---------------- HERO ---------------- */
const Hero = () => {
    return (
         <section className="relative pt-32 overflow-hidden bg-Base" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal width="100%">
                    <div className="mb-10">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5593F7]/30 bg-[#5593F7]/10 text-[#5593F7] text-xs font-poppins font-bold tracking-wider">
                            <Palette className="w-4 h-4" />
                            UI/UX Design
                        </span>
                    </div>
                </Reveal>

                <div className="max-w-5xl ">
                    <Reveal width="100%" delay={0.1}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfairDisplay font-extrabold leading-[1.05] mb-8" style={{ color: '#FFFFFF' }}>
                            Design That Turns Visitors Into
                            <span className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent block md:inline"> Customers</span>
                        </h1>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <p className="text-xl font-inter max-w-2xl mb-12 leading-relaxed" style={{ color: '#7588A3' }}>
                            Great design isn't just about looking good—it's about creating experiences that feel effortless and drive measurable results for your business.
                        </p>
                    </Reveal>

                    <Reveal width="100%" delay={0.3}>
                        <div className="flex flex-col sm:flex-row gap-5 mb-24">
                            <button className="flex items-center justify-center gap-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] text-[#080C16] font-poppins font-bold py-4 px-10 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-[#5593F7]/20 hover:scale-105 active:scale-95">
                                Start Your Project <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="flex items-center justify-center bg-transparent border border-[#7588A3]/30 font-poppins font-bold py-4 px-10 rounded-xl hover:border-[#5593F7] transition-all active:scale-95" style={{ color: '#7588A3' }}>
                                View Portfolio
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
                            200%
                        </div>
                        <div className="text-sm font-inter tracking-widest font-medium" style={{ color: '#7588A3' }}>
                            Avg. Conversion Lift
                        </div>
                    </StaggerItem>

                    <StaggerItem className="text-center">
                        <div className="text-xl md:text-3xl font-marcellus font-extrabold mb-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            40%
                        </div>
                        <div className="text-sm font-inter tracking-widest font-medium" style={{ color: '#7588A3' }}>
                            Reduced Bounce Rate
                        </div>
                    </StaggerItem>

                    <StaggerItem className="text-center">
                        <div className="text-4xl md:text-3xl font-marcellus font-extrabold mb-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            60+
                        </div>
                        <div className="text-sm font-inter tracking-widest font-medium" style={{ color: '#7588A3' }}>
                            Projects Delivered
                        </div>
                    </StaggerItem>

                    <StaggerItem className="text-center">
                        <div className="text-4xl md:text-3xl font-marcellus font-extrabold mb-2 flex items-center justify-center gap-1 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            4.9
                            <Star className="w-5 h-5 fill-[#5593F7] text-[#5593F7]" />
                        </div>
                        <div className="text-sm font-inter tracking-widest font-medium" style={{ color: '#7588A3' }}>
                            Client Rating
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
        <section className="py-24" style={{ backgroundColor: '#080C16' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal width="100%">
                    <div className="text-center mb-16">
                        <h2 className="text-lg md:text-lg font-playfairDisplay font-bold mb-4" style={{ color: '#FFFFFF' }}>
                            End-to-End Design Services
                        </h2>
                        <p className="font-inter max-w-xl mx-auto text-lg" style={{ color: '#7588A3' }}>
                            From initial research to final polish—we cover every aspect of the design journey.
                        </p>
                    </div>
                </Reveal>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: MousePointer, title: 'User Research', text: 'Deep dive into your users\' needs, behaviors, and pain points through interviews and testing.' },
                        { icon: Layers, title: 'Wireframing', text: 'Blueprint your product\'s structure and flow before any visual design begins.' },
                        { icon: PenTool, title: 'Visual Design', text: 'Stunning interfaces that reflect your brand and delight your users.' },
                        { icon: Eye, title: 'Usability Testing', text: 'Validate designs with real users to ensure intuitive, friction-free experiences.' }
                    ].map((item, i) => (
                        <StaggerItem key={i}>
                            <div className="h-full p-8 rounded-2xl border border-[#7588A3]/10 hover:border-[#5593F7]/50 transition-all group hover:-translate-y-2 duration-300" style={{ backgroundColor: '#080C16' }}>
                                <div className="w-14 h-14 rounded-xl border border-[#5593F7]/30 flex items-center justify-center mb-6 transition-all group-hover:bg-gradient-to-l group-hover:from-[#5593F7] group-hover:to-[#C47DE8] group-hover:border-transparent">
                                    <item.icon className="w-8 h-8 text-[#5593F7] group-hover:text-[#080C16]" />
                                </div>
                                <h3 className="text-lg font-poppins font-bold mb-4" style={{ color: '#FFFFFF' }}>{item.title}</h3>
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
        <section className="py-24" style={{ backgroundColor: '#080C16' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal width="100%">
                    <div className="mb-16">
                        <div className="w-20 h-1.5 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] mb-8 rounded-full" />
                        <h2 className="text-2xl md:text-2xl font-playfairDisplay font-bold mb-4" style={{ color: '#FFFFFF' }}>Our Design Process</h2>
                        <p className="text-lg font-inter" style={{ color: '#7588A3' }}>
                            A proven, user-centered approach that delivers results.
                        </p>
                    </div>
                </Reveal>

                <StaggerContainer className="grid md:grid-cols-4 gap-8">
                    {[
                        {
                            num: '01',
                            title: 'Discover',
                            text: 'We understand your business, users, and goals through research and workshops.',
                            points: ['User interviews', 'Competitor analysis', 'Stakeholder workshops']
                        },
                        {
                            num: '02',
                            title: 'Define',
                            text: 'We synthesize insights into clear personas, journeys, and design principles.',
                            points: ['User personas', 'Journey mapping', 'Problem framing']
                        },
                        {
                            num: '03',
                            title: 'Design',
                            text: 'We create beautiful, intuitive interfaces through iterative design cycles.',
                            points: ['Wireframing', 'UI design', 'Prototyping']
                        },
                        {
                            num: '04',
                            title: 'Deliver',
                            text: 'We hand off pixel-perfect designs with documentation for seamless development.',
                            points: ['Design handoff', 'Style guides', 'Developer support']
                        }
                    ].map((step, i) => (
                        <StaggerItem key={i}>
                            <div className="border-t border-[#7588A3]/20 pt-6">
                                <div className="text-6xl font-marcellus font-black mb-4 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                                    {step.num}
                                </div>

                                <h4 className="text-xl font-poppins font-bold mb-2" style={{ color: '#FFFFFF' }}>
                                    {step.title}
                                </h4>

                                <p className="text-sm font-inter mb-4" style={{ color: '#7588A3' }}>
                                    {step.text}
                                </p>

                                <ul>
                                    {step.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-xs font-inter" style={{ color: '#7588A3' }}>
                                            <span className="text-[#5593F7] mt-1">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
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
                            <h2 className="text-2xl md:text-2xl font-playfairDisplay font-extrabold mb-8" style={{ color: '#FFFFFF' }}>
                                Why Invest in Design?
                            </h2>
                            <p className="font-inter mb-10 text-lg" style={{ color: '#7588A3' }}>
                                Good design isn't a luxury—it's a business multiplier. Every dollar invested in UX design yields $100 in return.
                            </p>
                        </Reveal>

                        <StaggerContainer className="grid sm:grid-cols-1 gap-5">
                            {[
                                'First impressions form in 0.05 seconds',
                                '88% of users won\'t return after bad UX',
                                'Consistent design increases revenue by 33%',
                                'Mobile users 5x more likely to leave bad UX',
                                'Intuitive UI reduces support costs by 50%',
                                'Design-led companies outperform S&P by 228%'
                            ].map((f, i) => (
                                <StaggerItem key={i}>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="text-[#5593F7] w-6 h-6" />
                                        <span className="font-inter" style={{ color: '#FFFFFF' }}>{f}</span>
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
                            <Lightbulb className="w-24 h-24 text-[#5593F7]" />
                            <p className="text-2xl font-playfairDisplay font-bold text-center bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                                Design That Converts
                            </p>
                        </motion.div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}



/* ---------------- MAIN EXPORT ---------------- */
const UIUXDesign = () => {
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

export default UIUXDesign