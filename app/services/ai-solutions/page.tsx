"use client"
import { ArrowRight, CheckCircle, Sparkles, FileSearchCorner, Eye, MessageSquare, Bot, Brain } from 'lucide-react'
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
                            <Brain className="w-4 h-4" />
                            AI Solutions
                        </span>
                    </div>
                </Reveal>

                <div className="max-w-5xl ">
                    <Reveal width="100%" delay={0.1}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfairDisplay font-extrabold leading-[1.05] mb-8" style={{ color: '#FFFFFF' }}>
                            Add AI Superpowers to 
                            <span className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent block md:inline"> Your Business</span>
                        </h1>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <p className="text-xl font-inter max-w-2xl mb-12 leading-relaxed" style={{ color: '#7588A3' }}>
                            AI isn't science fiction anymore—it's your competitive advantage. We help you harness the power of artificial intelligence to automate, predict, and innovate.
                        </p>
                    </Reveal>

                    <Reveal width="100%" delay={0.3}>
                        <div className="flex flex-col sm:flex-row gap-5 mb-20">
                            <button className="flex items-center justify-center gap-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] text-[#080C16] font-poppins font-bold py-4 px-10 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-[#5593F7]/20 hover:scale-105 active:scale-95">
                                Explore AI Solutions <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="flex items-center justify-center bg-transparent border border-[#7588A3]/30 font-poppins font-bold py-4 px-10 rounded-xl hover:border-[#5593F7] transition-all active:scale-95" style={{ color: '#7588A3' }}>
                                See AI in Action
                            </button>
                        </div>
                    </Reveal>
                </div>
            </div>
            <div className="flex justify-center w-full border-t border-[#7588A3]/20" style={{ backgroundColor: '#080C16' }}>
                <StaggerContainer
                    className="mt-6 flex flex-wrap justify-center items-center gap-6 md:gap-10 w-fit pb-8"
                    delay={0.5}
                >
                    <StaggerItem className="text-center">
                        <div className="text-xl md:text-lg font-marcellus font-extrabold mb-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            OpenAI GPT-4
                        </div>
                    </StaggerItem>

                    <StaggerItem className="text-center">
                        <div className="text-xl md:text-lg font-marcellus font-extrabold mb-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            Claude
                        </div>
                    </StaggerItem>

                    <StaggerItem className="text-center">
                        <div className="text-xl md:text-lg font-marcellus font-extrabold mb-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            LangChain
                        </div>
                    </StaggerItem>

                    <StaggerItem className="text-center">
                        <div className="text-xl md:text-lg font-marcellus font-extrabold mb-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            Pinecone
                        </div>
                    </StaggerItem>

                    <StaggerItem className="text-center">
                        <div className="text-xl md:text-lg font-marcellus font-extrabold mb-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            TensorFlow
                        </div>
                    </StaggerItem>
                    
                    <StaggerItem className="text-center">
                        <div className="text-xl md:text-lg font-marcellus font-extrabold mb-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            PyTorch
                        </div>
                    </StaggerItem>

                    <StaggerItem className="text-center">
                        <div className="text-xl md:text-lg font-marcellus font-extrabold mb-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            Hugging Face
                        </div>
                    </StaggerItem>

                    <StaggerItem className="text-center">
                        <div className="text-xl md:text-lg font-marcellus font-extrabold mb-2 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                            AWS Bedrock
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
                            AI Solutions That Actually Work
                        </h2>
                        <p className="font-inter max-w-xl mx-auto text-lg" style={{ color: '#7588A3' }}>
                            We cut through the AI hype and deliver practical solutions that solve real business problems.
                        </p>
                    </div>
                </Reveal>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: MessageSquare, title: 'Custom AI Chatbots', text: 'Intelligent conversational agents trained on your data, providing 24/7 customer support.' },
                        { icon: Eye, title: 'Computer Vision', text: 'Image recognition, object detection, and visual analysis for your applications.' },
                        { icon: FileSearchCorner, title: 'Document Intelligence', text: 'Extract insights from documents, contracts, and unstructured data automatically.' },
                        { icon: Sparkles, title: 'Generative AI', text: 'Content generation, image creation, and creative AI solutions for your brand.' }
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
const features = [
    {
        title: "Customer Service Automation",
        text: "Reduce support tickets by 60% with AI chatbots that understand context and solve problems.",
        metric: "60%",
        metricLabel: "TICKET REDUCTION",
    },
    {
        title: "Business Intelligence",
        text: "Turn your data into actionable insights with AI-powered analytics and predictions.",
        metric: "3x",
        metricLabel: "FASTER INSIGHTS",
    },
    {
        title: "Process Automation",
        text: "Automate repetitive tasks and workflows to free your team for high-value work.",
        metric: "45%",
        metricLabel: "TIME SAVED",
    },
];

const Process = () => {
    return (
        <section className="py-24" style={{ backgroundColor: '#080C16' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal width="100%">
                    <div className="mb-16">
                        <div className="w-20 h-1.5 bg-gradient-to-l from-[#5593F7] to-[#C47DE8] mb-8 rounded-full" />
                        <h2 className="text-xl md:text-2xl font-playfairDisplay font-bold mb-4" style={{ color: '#FFFFFF' }}>Real Results for Real Businesses</h2>
                        <p className="text-lg font-inter" style={{ color: '#7588A3' }}>
                            See how AI is transforming businesses like yours.
                        </p>
                    </div>
                </Reveal>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((item, index) => (
                        <StaggerItem key={index}>
                            <div
                                className="h-full p-8 rounded-2xl border border-[#7588A3]/10 hover:border-[#5593F7]/50 transition-all duration-300"
                                style={{ backgroundColor: '#080C16' }}
                            >
                                <div className="grid grid-cols-[1fr_auto] gap-6 items-start mb-4">
                                    <div className="text-lg font-poppins font-bold" style={{ color: '#FFFFFF' }}>
                                        {item.title}
                                    </div>
                                    <div className="text-right">
                                        <div className="text-4xl font-marcellus font-extrabold bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                                            {item.metric}
                                        </div>
                                        <div className="text-xs font-inter tracking-widest mt-1" style={{ color: '#7588A3' }}>
                                            {item.metricLabel}
                                        </div>
                                    </div>
                                </div>
                                <p className="font-inter text-md leading-relaxed" style={{ color: '#7588A3' }}>
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
                                From Idea to AI-Powered Product
                            </h2>
                            <p className="font-inter mb-10 text-lg" style={{ color: '#7588A3' }}>
                                We handle the complexity so you can focus on the impact. Our process ensures successful AI implementation every time.
                            </p>
                        </Reveal>

                        <StaggerContainer className="grid sm:grid-cols-1 gap-5">
                            {[
                                'Discovery: Understand your data and opportunities',
                                'Strategy: Define the right AI approach for your goals',
                                'Development: Build and train custom AI models',
                                'Integration: Seamlessly connect AI to your systems',
                                'Testing: Rigorous validation and fine-tuning',
                                'Deployment: Launch with monitoring and support'
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
                            <Bot className="w-24 h-24 text-[#5593F7]" />
                            <p className="text-2xl font-playfairDisplay font-bold text-center bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">
                                Intelligence Built In
                            </p>
                        </motion.div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}



/* ---------------- MAIN EXPORT ---------------- */
const AISolutions = () => {
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

export default AISolutions