import React from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | ICECAPCC',
};

export default function TermsConditions() {
  return (
    <main className="bg-[#020202] min-h-screen text-white font-sans selection:bg-white/20 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 text-sm uppercase tracking-widest font-medium group">
          <span className="transform group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Home
        </Link>
        
        <div className="relative">
          {/* Decorative blur */}
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-16 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">ICECAPCC Terms of Service</h1>
            <p className="text-white/40 text-sm tracking-widest uppercase mb-12">Effective Date: {new Date().toLocaleDateString()}</p>
            
            <div className="space-y-12 text-white/70 leading-relaxed font-light">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">1. Scope of Services</h2>
                <div className="space-y-4">
                  <p>By downloading, accessing, or using any software, mobile application, web application, or service developed and operated by ICECAPCC (collectively, the "Services" or "Apps"), you agree to be bound by these Terms of Service. This includes traditional SaaS platforms, Sovereign Intelligence Ecosystems (e.g., Pico), and decentralized P2P networks.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight flex items-center gap-3">
                  <span className="text-red-500">⚠</span> 2. Disclaimers: Not Medical Advice
                </h2>
                <div className="space-y-4">
                  <p className="uppercase tracking-widest text-xs font-semibold text-white/50">CRITICAL NOTICE REGARDING AI APPLICATIONS:</p>
                  
                  <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
                    <ul className="space-y-4 list-none">
                      <li className="flex gap-4"><span className="text-red-400 mt-1">✦</span> <div><strong className="text-white block mb-1">No Medical Advice</strong> Our AI acts as a psychological mirror and is NOT a licensed medical professional, therapist, or psychiatrist.</div></li>
                      <li className="flex gap-4"><span className="text-red-400 mt-1">✦</span> <div><strong className="text-white block mb-1">No Liability for AI Outputs</strong> Insights are generated computationally. ICECAPCC assumes zero liability for any decisions, emotional distress, or actions you take based on the output of the Services.</div></li>
                      <li className="flex gap-4"><span className="text-red-400 mt-1">✦</span> <div><strong className="text-white block mb-1">Emergency Situations</strong> If you are experiencing a mental health crisis, contact local emergency services immediately.</div></li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">3. User Responsibilities & Sovereign Data</h2>
                <div className="space-y-4">
                  <p>For our local-first and decentralized applications:</p>
                  <ul className="space-y-3 list-none bg-white/5 border border-white/10 rounded-2xl p-6">
                    <li className="flex gap-3"><span className="text-white/40 font-mono">01</span> <span><strong className="text-white">You Own Your Data:</strong> We utilize Zero-Knowledge architectures. You are entirely responsible for the security of your physical device.</span></li>
                    <li className="flex gap-3"><span className="text-white/40 font-mono">02</span> <span><strong className="text-white">Backup Keys:</strong> You are responsible for managing your End-to-End Encryption (E2EE) backup keys. If you lose access, ICECAPCC cannot restore your data.</span></li>
                    <li className="flex gap-3"><span className="text-white/40 font-mono">03</span> <span><strong className="text-white">Acceptable Use:</strong> You agree not to attempt to reverse-engineer, spoof, or inject malicious data into the P2P Swarm networks.</span></li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">4. Decentralized Network Liability</h2>
                <div className="space-y-4">
                  <p>Certain ICECAPCC Apps utilize WebRTC, Nostr relays, or local mesh flooding to synchronize anonymized heuristics between devices. ICECAPCC does not own or control the underlying decentralized nodes and cannot guarantee continuous uptime. By participating in global heuristic swarms, you grant the network a perpetual license to transmit strictly anonymized behavioral laws extracted from your device.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">5. Limitation of Liability</h2>
                <div className="space-y-4">
                  <p className="uppercase text-xs tracking-wider font-mono p-6 bg-black/50 border border-white/10 rounded-2xl text-white/50">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ICECAPCC BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES ARISING OUT OF OR RELATING TO THE USE OF THE SERVICES.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">6. Contact Us</h2>
                <div className="space-y-4">
                  <p>For legal inquiries or questions regarding these Terms, please contact us at:</p>
                  <div className="flex flex-col gap-2 p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="flex items-center gap-4"><span className="text-white/40 uppercase text-xs tracking-widest w-16">Email</span> <a href="mailto:legal@icecap.cc" className="text-white hover:text-purple-400 transition-colors">legal@icecap.cc</a></div>
                    <div className="flex items-center gap-4"><span className="text-white/40 uppercase text-xs tracking-widest w-16">Website</span> <span className="text-white">icecap.cc</span></div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
