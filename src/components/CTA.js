import React from 'react';

export default function CTA() {
  return (
    <section className="relative w-full h-[85vh] flex flex-col items-center justify-center bg-[#020202] z-20">
      <p className="text-white/40 text-lg md:text-3xl font-light tracking-widest mb-16 text-center px-4">
        We don't predict the future. <span className="text-white font-bold">We execute it.</span>
      </p>
      
      <div className="inline-block relative group cursor-none">
        <div className="absolute -inset-1 bg-white/20 rounded-sm blur opacity-0 hover:opacity-100 transition duration-500"></div>
        <button className="relative px-16 py-6 bg-white text-black text-sm font-black tracking-[0.3em] uppercase hover:bg-white/90 transition-colors">
          EXECUTE NOW
        </button>
      </div>
    </section>
  );
}
