"use client"
import {  ArrowRight, CheckCircle, Database, Lock, Workflow, Cloud, Layers, Server, Cpu, GitBranch, Code2 } from 'lucide-react'
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
                            <Code2 className="w-4 h-4" />
                            Web Application Development
                        </span>
                    </div>
                </Reveal>

                <div className="max-w-5xl ">
                    <Reveal width="100%" delay={0.1}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfairDisplay font-extrabold leading-[1.05] mb-8" style={{ color: '#FFFFFF' }}>
                            Powerful Web Apps Built for
                            <span className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent block md:inline">Scale & Speed</span>
                        </h1>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <p className="text-xl font-inter max-w-2xl mb-12 leading-relaxed" style={{ color: '#7588A3' }}>
                            From complex SaaS platforms to internal tools—we build web applications that solve real problems and grow with your business.
                        </p>
                    </Reveal>

                    <Reveal width="100%" delay={0.3}>
                        <div className="flex flex-col sm:flex-row gap-5 mb-20">
                            <button className="flex items-center justify-center gap-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] text-[#080C16] font-poppins font-bold py-4 px-10 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-[#5593F7]/20 hover:scale-105 active:scale-95">
                                Discuss Your Project <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="flex items-center justify-center bg-transparent border border-[#7588A3]/30 font-poppins font-bold py-4 px-10 rounded-xl hover:border-[#5593F7] transition-all active:scale-95" style={{ color: '#7588A3' }}>
                                See Case Studies
                            </button>
                        </div>
                    </Reveal>
                </div>
            </div>
            <div className="flex justify-center w-full border-t border-[#7588A3]/20" style={{ backgroundColor: '#080C16' }}>
                <StaggerContainer
                    className="mt-6 flex flex-wrap justify-center items-center gap-8 md:gap-10 w-fit pb-8"
                    delay={0.5}
                >
                    <StaggerItem className="text-center">
                        <div className="text-xl md:text-lg font-marcellus font-extrabold mb-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            React
                        </div>
                        <div className="text-xs font-inter tracking-widest font-medium uppercase" style={{ color: '#7588A3' }}>
                            Frontend
                        </div>
                    </StaggerItem>

                    <StaggerItem className="text-center">
                        <div className="text-xl md:text-lg font-marcellus font-extrabold mb-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            Node.js
                        </div>
                        <div className="text-xs font-inter tracking-widest font-medium uppercase" style={{ color: '#7588A3' }}>
                            Backend
                        </div>
                    </StaggerItem>

                    <StaggerItem className="text-center">
                        <div className="text-xl md:text-lg font-marcellus font-extrabold mb-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            PostgreSQL
                        </div>
                        <div className="text-xs font-inter tracking-widest font-medium uppercase" style={{ color: '#7588A3' }}>
                            Database
                        </div>
                    </StaggerItem>

                    <StaggerItem className="text-center">
                        <div className="text-xl md:text-lg font-marcellus font-extrabold mb-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            AWS/GCP
                        </div>
                        <div className="text-xs font-inter tracking-widest font-medium uppercase" style={{ color: '#7588A3' }}>
                            Cloud
                        </div>
                    </StaggerItem>

                    <StaggerItem className="text-center">
                        <div className="text-xl md:text-lg font-marcellus font-extrabold mb-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            Docker
                        </div>
                        <div className="text-xs font-inter tracking-widest font-medium uppercase" style={{ color: '#7588A3' }}>
                            DevOps
                        </div>
                    </StaggerItem>

                    <StaggerItem className="text-center">
                        <div className="text-xl md:text-lg font-marcellus font-extrabold mb-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            GraphQL
                        </div>
                        <div className="text-xs font-inter tracking-widest font-medium uppercase" style={{ color: '#7588A3' }}>
                            API
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
                            Engineering Excellence
                        </h2>
                        <p className="font-inter max-w-xl mx-auto text-lg" style={{ color: '#7588A3' }}>
                            We build applications with the same standards used by top tech companies.
                        </p>
                    </div>
                </Reveal>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Database, title: 'Scalable Architecture', text: 'Built to grow with your business. Handle 10 users or 10 million without breaking a sweat.' },
                        { icon: Lock, title: 'Enterprise Security', text: 'Bank-level security with encryption, authentication, and compliance built in.' },
                        { icon: Cloud, title: 'Cloud Native', text: 'Deployed on modern cloud infrastructure for maximum reliability and performance.' },
                        { icon: Workflow, title: 'API-First Design', text: 'Clean, documented APIs that integrate seamlessly with your existing systems.' }
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
                        <h2 className="text-xl md:text-2xl font-playfairDisplay font-bold mb-4" style={{ color: '#FFFFFF' }}>What We Build</h2>
                        <p className="text-lg font-inter" style={{ color: '#7588A3' }}>
                            From idea to production—we've delivered web apps across industries.
                        </p>
                    </div>
                </Reveal>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            icon: Layers,
                            title: 'SaaS Platforms',
                            text: 'Subscription-based software products with user management, billing, and analytics.'
                        },
                        {
                            icon: Server,
                            title: 'Internal Tools',
                            text: 'Custom dashboards and admin panels that streamline your team\'s workflow.'
                        },
                        {
                            icon: Cpu,
                            title: 'Customer Portals',
                            text: 'Self-service portals where customers can manage accounts and access services.'
                        },
                    ].map((item, i) => (
                        <StaggerItem key={i}>
                            <div className="h-full p-8 rounded-2xl border border-[#7588A3]/10 hover:border-[#5593F7]/50 transition-all duration-300" style={{ backgroundColor: '#080C16' }}>
                                <div className="w-14 h-14 rounded-xl border border-[#5593F7]/30 flex items-center justify-center mb-6 transition-all group-hover:bg-gradient-to-l group-hover:from-[#5593F7] group-hover:to-[#C47DE8] group-hover:border-transparent">
                                    <item.icon className="w-8 h-8 text-[#5593F7]" />
                                </div>
                                <h3 className="text-lg font-poppins font-bold mb-4" style={{ color: '#FFFFFF' }}>
                                    {item.title}
                                </h3>
                                <p className="font-inter text-sm leading-relaxed" style={{ color: '#7588A3' }}>
                                    {item.text}
                                </p>
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
                            <h2 className="text-2xl md:text-2xl font-playfairDisplay font-extrabold mb-6" style={{ color: '#FFFFFF' }}>
                                Agile Development That Actually Works
                            </h2>
                            <p className="font-inter mb-10 text-lg" style={{ color: '#7588A3' }}>
                                We follow proven methodologies to deliver your web app on time and on budget.
                            </p>
                        </Reveal>

                        <StaggerContainer className="grid sm:grid-cols-1 gap-5">
                            {[
                                'Weekly sprints with clear deliverables',
                                'Transparent communication via Slack/Teams',
                                'Regular demos and feedback sessions',
                                'Continuous deployment and testing',
                                'Comprehensive documentation',
                                'Post-launch support and maintenance'
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
                            <GitBranch className="w-24 h-24 text-[#5593F7]" />
                            <p className="text-2xl font-playfairDisplay font-bold text-center bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                                Code That Scales
                            </p>
                        </motion.div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}


/* ---------------- MAIN EXPORT ---------------- */
const Webapps = () => {
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

export default Webapps