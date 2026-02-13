"use client"
import { ArrowRight, CheckCircle, Star, Apple, FingerprintPattern, Bell, Wifi, Download, Smartphone } from 'lucide-react'
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
                            <Smartphone className="w-4 h-4" />
                            Mobile App Development
                        </span>
                    </div>
                </Reveal>

                <div className="max-w-5xl">
                    <Reveal width="100%" delay={0.1}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfairDisplay font-extrabold leading-[1.05] mb-8" style={{ color: '#FFFFFF' }}>
                            Mobile Apps Users
                            <span className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent block md:inline"> Actually Love</span>
                        </h1>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <p className="text-xl font-inter max-w-2xl mb-12 leading-relaxed" style={{ color: '#7588A3' }}>
                            90% of mobile time is spent in apps. We build the ones people keep coming back to—beautiful, fast, and impossible to put down.
                        </p>
                    </Reveal>

                    <Reveal width="100%" delay={0.3}>
                        <div className="flex flex-col sm:flex-row gap-5 mb-24">
                            <button className="flex items-center justify-center gap-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] text-[#080C16] font-poppins font-bold py-4 px-10 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-[#5593F7]/20 hover:scale-105 active:scale-95">
                                Get Free Consultation <ArrowRight className="w-5 h-5" />
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
                            50+
                        </div>
                        <div className="text-sm font-inter tracking-widest font-medium" style={{ color: '#7588A3' }}>
                            Apps Launched
                        </div>
                    </StaggerItem>
                    
                    <StaggerItem className="text-center">
                        <div className="text-4xl md:text-3xl font-marcellus font-extrabold mb-2 flex items-center justify-center gap-1 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            4.8
                            <Star className="w-5 h-5 fill-[#5593F7] text-[#5593F7]" />
                        </div>
                        <div className="text-sm font-inter tracking-widest font-medium" style={{ color: '#7588A3' }}>
                            Avg. App Rating
                        </div>
                    </StaggerItem>

                    <StaggerItem className="text-center">
                        <div className="text-xl md:text-3xl font-marcellus font-extrabold mb-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            1M+
                        </div>
                        <div className="text-sm font-inter tracking-widest font-medium" style={{ color: '#7588A3' }}>
                            Total Downloads
                        </div>
                    </StaggerItem>

                    <StaggerItem className="text-center">
                        <div className="text-4xl md:text-3xl font-marcellus font-extrabold mb-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            99.9%
                        </div>
                        <div className="text-sm font-inter tracking-widest font-medium" style={{ color: '#7588A3' }}>
                            Crash-Free Rate
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
                        <h2 className="text-xl md:text-xl font-playfairDisplay font-bold mb-4" style={{ color: '#FFFFFF' }}>
                            Feature-Rich Mobile Experiences
                        </h2>
                        <p className="font-inter max-w-xl mx-auto text-lg" style={{ color: '#7588A3' }}>
                            We leverage the full power of mobile devices to create unforgettable experiences.
                        </p>
                    </div>
                </Reveal>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Apple, title: 'iOS & Android', text: 'Native apps for both platforms, or cross-platform solutions with React Native.' },
                        { icon: FingerprintPattern, title: 'Biometric Security', text: 'Face ID, Touch ID, and secure authentication to protect user data.' },
                        { icon: Bell, title: 'Push Notifications', text: 'Keep users engaged with smart, personalized notifications.' },
                        { icon: Wifi, title: 'Offline Support', text: 'Apps that work seamlessly even without an internet connection.' }
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
                        <h2 className="text-2xl md:text-2xl font-playfairDisplay font-bold mb-4" style={{ color: '#FFFFFF' }}>Apps for Every Industry</h2>
                        <p className="text-lg font-inter" style={{ color: '#7588A3' }}>
                            We've built successful apps across consumer, enterprise, and marketplace categories.
                        </p>
                    </div>
                </Reveal>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: 'Consumer Apps',
                            text: 'B2C apps designed for engagement, retention, and user delight.',
                            tags: ['Social platforms', 'E-commerce', 'Entertainment', 'Fitness & Health']
                        },
                        {
                            title: 'Enterprise Apps',
                            text: 'B2B solutions that streamline operations and boost productivity.',
                            tags: ['Field service', 'Inventory management', 'CRM mobile', 'Workforce tools']
                        },
                        {
                            title: 'On-Demand Apps',
                            text: 'Marketplace and delivery apps connecting users with services.',
                            tags: ['Food delivery', 'Ride sharing', 'Service booking', 'Logistics']
                        },
                    ].map((item, i) => (
                        <StaggerItem key={i}>
                            <div className="h-full p-8 rounded-2xl border border-[#7588A3]/10 hover:border-[#5593F7]/50 transition-all duration-300" style={{ backgroundColor: '#080C16' }}>
                                <h3 className="text-lg font-poppins font-bold mb-3" style={{ color: '#FFFFFF' }}>
                                    {item.title}
                                </h3>

                                <p className="font-inter text-sm leading-relaxed mb-5" style={{ color: '#7588A3' }}>
                                    {item.text}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-4 py-1.5 text-xs font-poppins rounded-full bg-[#5593F7]/10 text-[#5593F7] border border-[#5593F7]/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
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
                                From Concept to App Store
                            </h2>
                            <p className="font-inter mb-10 text-lg" style={{ color: '#7588A3' }}>
                                We handle the entire journey—from initial concept to App Store and Play Store approval.
                            </p>
                        </Reveal>

                        <StaggerContainer className="grid sm:grid-cols-1 gap-5">
                            {[
                                'UI/UX design tailored for mobile',
                                'Native iOS and Android development',
                                'Cross-platform with React Native',
                                'Backend API development',
                                'App Store optimization (ASO)',
                                'Post-launch analytics and updates'
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
                            <Download className="w-24 h-24 text-[#5593F7]" />
                            <p className="text-2xl font-playfairDisplay font-bold text-center bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                                Ready for Launch
                            </p>
                        </motion.div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}



/* ---------------- MAIN EXPORT ---------------- */
const MobileApps = () => {
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

export default MobileApps