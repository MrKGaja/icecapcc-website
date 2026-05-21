'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function Vision() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Apply a spring physics wrapper for buttery smooth animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Act II: The Descent (Fades in early, fades out midway)
  const opacity1 = useTransform(smoothProgress, [0, 0.1, 0.3, 0.4], [0, 1, 1, 0]);
  const y1 = useTransform(smoothProgress, [0, 0.1, 0.3, 0.4], [50, 0, 0, -50]);

  // Act III: The Pivot (Fades in after Act II, stays visible until end)
  const opacity2 = useTransform(smoothProgress, [0.4, 0.5, 0.8, 1], [0, 1, 1, 0]);
  const y2 = useTransform(smoothProgress, [0.4, 0.5, 0.8, 1], [50, 0, 0, -50]);
  const blur2 = useTransform(smoothProgress, [0.4, 0.5], ["blur(10px)", "blur(0px)"]);

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-black z-20">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center px-6 overflow-hidden">
        
        {/* Act II Text */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute max-w-4xl text-center"
        >
          <p className="text-2xl md:text-5xl font-light tracking-wide text-white/50 leading-relaxed">
            The world is governed by <br className="hidden md:block" />
            <span className="text-white font-medium">complex, chaotic systems.</span>
          </p>
        </motion.div>

        {/* Act III Text */}
        <motion.div 
          style={{ opacity: opacity2, y: y2, filter: blur2 }}
          className="absolute max-w-6xl text-center flex flex-col items-center gap-8"
        >
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-none">
            Complexity is simply <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">unmapped structure.</span>
          </h2>
          <p className="text-lg md:text-2xl font-light text-white/60 max-w-3xl">
            At the absolute frontier of technology and human experience, we isolate the signal from the noise. We do not adapt to paradigms. <span className="text-white font-bold">We architect them.</span>
          </p>
        </motion.div>

        {/* Subtle physical distortion / flash background tied to scroll */}
        <motion.div 
          style={{ opacity: opacity2 }}
          className="absolute inset-0 bg-white/[0.02] pointer-events-none mix-blend-overlay"
        />
      </div>
    </section>
  );
}
