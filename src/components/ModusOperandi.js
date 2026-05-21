'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ModusOperandi() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Use a smooth spring to make the scroll incredibly fluid
  const smoothProgress = scrollYProgress; // Or useSpring if desired, but native is often crisper for text replacement

  // IMAGINE: 0 to 0.33
  const yImagine = useTransform(smoothProgress, [0, 0.15, 0.25, 0.33], [100, 0, 0, -100]);
  const opacityImagine = useTransform(smoothProgress, [0, 0.1, 0.25, 0.33], [0, 1, 1, 0]);

  // CREATE: 0.33 to 0.66
  const yCreate = useTransform(smoothProgress, [0.33, 0.48, 0.58, 0.66], [100, 0, 0, -100]);
  const opacityCreate = useTransform(smoothProgress, [0.33, 0.43, 0.58, 0.66], [0, 1, 1, 0]);

  // EXECUTE: 0.66 to 1.0
  const yExecute = useTransform(smoothProgress, [0.66, 0.81, 0.91, 1], [100, 0, 0, -100]);
  const opacityExecute = useTransform(smoothProgress, [0.66, 0.76, 0.91, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[350vh] bg-[#020202] z-20 border-t border-white/5">
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        
        {/* The Sequential Words */}
        <div className="relative flex items-center justify-center w-full h-full max-h-[40vh]">
            
          <motion.div style={{ y: yImagine, opacity: opacityImagine }} className="absolute flex items-center justify-center w-full">
            <div className="relative flex items-center justify-center">
              <span className="hidden lg:block absolute right-[100%] mr-12 text-xs tracking-[0.4em] text-white/30 whitespace-nowrap">
                01. ISOLATE THE TRAJECTORY
              </span>
              <h2 className="text-[18vw] lg:text-[12vw] font-black tracking-tighter text-white leading-none text-center">IMAGINE.</h2>
            </div>
          </motion.div>
          
          <motion.div style={{ y: yCreate, opacity: opacityCreate }} className="absolute flex items-center justify-center w-full">
            <div className="relative flex items-center justify-center">
              <span className="hidden lg:block absolute left-[100%] ml-12 text-xs tracking-[0.4em] text-white/30 whitespace-nowrap">
                02. FORGE THE PARADIGM
              </span>
              <h2 className="text-[18vw] lg:text-[12vw] font-black tracking-tighter text-white leading-none text-center">CREATE.</h2>
            </div>
          </motion.div>
          
          <motion.div style={{ y: yExecute, opacity: opacityExecute }} className="absolute flex items-center justify-center w-full">
            <div className="relative flex items-center justify-center">
              <span className="hidden lg:block absolute right-[100%] mr-12 text-xs tracking-[0.4em] text-white/30 whitespace-nowrap">
                03. DEPLOY REALITY
              </span>
              <h2 className="text-[18vw] lg:text-[12vw] font-black tracking-tighter text-white leading-none text-center">EXECUTE.</h2>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
