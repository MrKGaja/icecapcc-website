import React from 'react';
import Footer from '@/components/Footer';

export default function PicoPage() {
  return (
    <main className="bg-[#020202] min-h-screen text-white font-sans selection:bg-white/20">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        
        {/* Background Visuals */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-80">
          <div className="w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.3)_0%,rgba(124,58,237,0)_60%)] filter blur-[100px] absolute mix-blend-screen animate-pulse"></div>
          <div className="w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.4)_0%,rgba(37,99,235,0)_60%)] filter blur-[80px] absolute mix-blend-screen opacity-70" style={{ transform: 'translate(20%, -20%)' }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-block border border-white/10 rounded-full px-4 py-1 mb-8 backdrop-blur-md bg-white/5">
            <span className="text-xs font-semibold tracking-widest uppercase text-white/70">Pico: Sovereign Intelligence Ecosystem</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
            Every Emotion <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Matters.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 font-light mb-12 max-w-3xl leading-relaxed">
            The world's first local AI architecture that decodes emotional and cognitive loops while operating with complete data privacy.
          </p>
          
          <div className="flex gap-6">
            <button className="px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wide hover:bg-white/90 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Join the Waitlist
            </button>
            <button className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-sm tracking-wide hover:bg-white/10 transition-all backdrop-blur-md">
              Read the Whitepaper
            </button>
          </div>
        </div>
      </section>

      {/* 2. Core Features (The "Why Pico" Section) */}
      <section className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Engineering Intelligence.</h2>
          <p className="text-lg text-white/50">Built on three uncompromising pillars of sovereign design.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Sovereign Intelligence</h3>
            <p className="text-white/60 leading-relaxed font-light">
              100% local processing. No cloud data harvesting. Your model lives entirely on your device, ensuring true sovereignty over your thoughts.
            </p>
          </div>
          
          {/* Pillar 2 */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                <path d="M2 12h4l3-9 5 18 3-9h5" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Emotional Decoding</h3>
            <p className="text-white/60 leading-relaxed font-light">
              Advanced neural architectures specifically tuned to map and understand complex cognitive and emotional states in real-time.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Uncompromised Privacy</h3>
            <p className="text-white/60 leading-relaxed font-light">
              We engineered a system where your data mathematically cannot leave your device. Privacy isn't a feature; it's the foundation.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Technical Architecture (Visual Mockup) */}
      <section className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="w-full rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] relative p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 space-y-6 relative z-10">
            <div className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-2">The Architecture</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Decentralized processing at the edge.</h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              By utilizing the latest advancements in local LLM quantization and hardware acceleration, Pico processes complex contextual models with zero latency, entirely offline.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <span className="text-white/80">Local-only Vector Database</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                <span className="text-white/80">Neural Processing Unit (NPU) Optimized</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span className="text-white/80">End-to-end Ephemeral Memory</span>
              </li>
            </ul>
          </div>

          {/* Abstract Diagram Mockup */}
          <div className="flex-1 w-full h-[400px] relative flex items-center justify-center">
            {/* Outer Ring */}
            <div className="absolute w-[300px] h-[300px] rounded-full border border-white/5 border-dashed animate-[spin_30s_linear_infinite]"></div>
            {/* Middle Ring */}
            <div className="absolute w-[200px] h-[200px] rounded-full border border-blue-500/20 border-solid animate-[spin_20s_linear_infinite_reverse]"></div>
            
            {/* Center Core */}
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/40 to-purple-600/40 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(124,58,237,0.3)]">
              <div className="w-8 h-8 rounded-full bg-white/20 animate-ping"></div>
              <div className="absolute w-4 h-4 rounded-full bg-white"></div>
            </div>

            {/* Orbiting Elements */}
            <div className="absolute w-full h-full animate-[spin_15s_linear_infinite]">
              <div className="absolute top-1/2 left-0 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)] -translate-x-1.5 -translate-y-1.5"></div>
              <div className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.8)] -translate-x-2 -translate-y-2"></div>
            </div>
          </div>
          
        </div>
      </section>

      <Footer />
    </main>
  );
}
