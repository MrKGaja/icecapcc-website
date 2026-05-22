"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

const PicoModel = dynamic(() => import('@/components/PicoModel'), { 
  ssr: false,
  loading: () => <div className="w-full h-full min-h-[500px] flex items-center justify-center text-[#b388ff] text-sm tracking-widest uppercase">Initializing Canvas...</div>
});
export default function PicoPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#111112] text-white selection:bg-[#ff2a85] selection:text-white font-sans overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#311b92] rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#1a237e] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="w-full pt-40 pb-16 flex flex-col items-center justify-center px-4 md:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              pico<span className="text-[#7c4dff]">.</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-400 font-light max-w-2xl mx-auto">
              every emotion matters.
            </p>
            <p className="text-md md:text-lg text-gray-500 max-w-xl mx-auto mt-8">
              Big shifts, tiny ripples, and everything in between. Meet pico—your quiet space to track, reflect, and understand what you're feeling today.
            </p>
            
            <div className="pt-12">
              <Link 
                href="#explore" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#311b92]/20 text-[#b388ff] border border-[#311b92]/50 hover:bg-[#311b92]/40 hover:scale-105 transition-all duration-300 font-medium"
              >
                Start Exploring
              </Link>
            </div>
          </motion.div>
          
          <div className="w-full max-w-5xl mt-12 h-[60vh] relative">
            <PicoModel />
          </div>
        </section>

        {/* The Empathy Block */}
        <section id="explore" className="py-32 px-4 md:px-20 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-8">Narrative Architecture Orchestrated by <Link href="https://oura.casa" target="_blank" rel="noopener noreferrer" className="text-[#b388ff] hover:text-white transition-colors duration-300 underline decoration-white/20 underline-offset-4">Oura.Casa</Link></h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              We often brush past the little things. But our days are made of pico-sized moments. A moment of doubt, a sudden burst of joy, a quiet wave of calm. 
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              Guided by the clinical storytelling and psychological framework of <Link href="https://oura.casa" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#b388ff] transition-colors duration-300 underline decoration-white/20 underline-offset-4">Oura.Casa</Link>, pico helps you capture these micro-emotions so you can isolate the signal from the noise and see the definitive structure of your well-being.
            </p>
          </motion.div>
        </section>

        {/* Feature Grid */}
        <section className="py-24 px-4 md:px-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative bg-[#1c1c1e]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-[#7c4dff]/50 transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#311b92] rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="text-4xl mb-6">🗓️</div>
              <h3 className="text-2xl font-medium mb-4 text-white">Log it in seconds.</h3>
              <p className="text-gray-400">
                No lengthy essays required. Just tap how you're feeling and move on, or linger and add context if you need to. Keep your timeline full of color.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative bg-[#1c1c1e]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-[#7c4dff]/50 transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#311b92] rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="text-4xl mb-6">🧠</div>
              <h3 className="text-2xl font-medium mb-4 text-white">The Blueprint.</h3>
              <p className="text-gray-400">
                See your emotional landscape. Map your Ancestral Instincts, Structural Map, and watch your feelings take shape over time.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative bg-[#1c1c1e]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-[#7c4dff]/50 transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#311b92] rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="text-4xl mb-6">🔒</div>
              <h3 className="text-2xl font-medium mb-4 text-white">For your eyes only.</h3>
              <p className="text-gray-400">
                Total privacy. Your thoughts and feelings belong to you. pico is a judgment-free zone locked securely on your device.
              </p>
            </motion.div>
          </div>
        </section>

        {/* UI Showcase / Aesthetic representation */}
        <section className="py-24 px-4 md:px-20 max-w-5xl mx-auto flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full rounded-[40px] bg-[#1c1c1e]/40 backdrop-blur-2xl border border-white/10 p-8 md:p-16 relative overflow-hidden"
            >
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#311b92] mix-blend-screen filter blur-[120px] opacity-30"></div>
              
              <h3 className="text-3xl font-semibold mb-12">Cognitive Ascendancy</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left relative z-10">
                 {/* Mock UI Element - Clean Gap */}
                 <div className="bg-[#1a1a1f] border border-[#5e35b1]/30 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                    <div className="text-[#b388ff] mb-4">❤️</div>
                    <div>
                      <div className="text-5xl font-bold mb-2">0</div>
                      <div className="text-white font-medium">Clean Gap</div>
                      <div className="text-[#b388ff] text-sm">Days in control</div>
                    </div>
                 </div>

                 {/* Mock UI Element - Emotional Load */}
                 <div className="bg-[#1a1a1f] border border-[#5e35b1]/30 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                    <div className="text-[#b388ff] mb-4">〰️</div>
                    <div>
                      <div className="text-5xl font-bold mb-2">0</div>
                      <div className="text-white font-medium">Emotional Load</div>
                      <div className="text-[#b388ff] text-sm">Active</div>
                    </div>
                 </div>
              </div>
            </motion.div>
        </section>

        {/* Footer CTA */}
        <section className="py-32 px-4 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Ready to listen to yourself?</h2>
            <p className="text-xl text-gray-400 mb-12">Join those who are making space for their emotions.</p>
            <Link 
              href="#" 
              className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#5e35b1] text-white hover:bg-[#4527a0] hover:shadow-[0_0_40px_rgba(94,53,177,0.4)] hover:scale-105 transition-all duration-300 font-semibold text-lg"
            >
              Make space for you
            </Link>
          </motion.div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
