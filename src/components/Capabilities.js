'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const constructs = [
  {
    id: '01',
    title: 'Cognitive Architectures',
    desc: 'Mapping the latent patterns of human emotion and intellect to process profound abstraction into definitive, undeniable logic.',
    color: 'from-blue-500/20 to-purple-600/20'
  },
  {
    id: '02',
    title: 'Infrastructural Dominance',
    desc: 'Engineering the physical and digital bedrock of tomorrow. Building sovereign ecosystems that elevate existence.',
    color: 'from-emerald-500/20 to-cyan-600/20'
  },
  {
    id: '03',
    title: 'Narrative Engineering',
    desc: 'Shaping the perception of reality. Because the most advanced infrastructure is meaningless without the story that compels it.',
    color: 'from-orange-500/20 to-red-600/20'
  }
];

export default function Capabilities() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="work" className="relative w-full min-h-screen bg-black py-32 px-6 border-t border-white/5 z-20 overflow-hidden flex flex-col justify-center">
      
      {/* Dynamic Background based on Hover */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`absolute inset-0 bg-gradient-to-br ${constructs[hoveredIndex].color} blur-3xl opacity-30 pointer-events-none`}
          />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-white/30 mb-20 ml-4">
          The Constructs
        </h2>

        <div className="flex flex-col border-t border-white/10">
          {constructs.map((construct, index) => (
            <div 
              key={construct.id}
              className="group relative border-b border-white/10 py-12 md:py-20 cursor-none flex flex-col md:flex-row md:items-center justify-between transition-colors duration-500 hover:bg-white/[0.02]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-start gap-8 md:gap-16 px-4 md:px-12">
                <span className="text-xl md:text-3xl font-mono text-white/20 group-hover:text-white/60 transition-colors duration-500 mt-2">
                  {construct.id}
                </span>
                <div>
                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white/50 group-hover:text-white transition-all duration-500 uppercase">
                    {construct.title}
                  </h3>
                  <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out mt-6">
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl font-light">
                      {construct.desc}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Animated Arrow */}
              <div className="hidden md:block pr-12 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-white/40">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
