"use client"


import { Reveal,  } from '@/app/components/shared//Reveal'
import { ArrowRight } from 'lucide-react'


export const CTA = () => {
    return (
        <section className="py-32 text-center relative overflow-hidden bg-gradient-to-br from-[#5593F7]/10 to-[#C47DE8]/10" style={{ backgroundColor: '#080C16' }}>
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
                    Or reach us directly: <a href="mailto:contact@shariwaa.com" className="bg-gradient-to-l from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent hover:underline">contact@satsoninnovations.com</a>
                </p>
            </div>
        </section>
    )
}
