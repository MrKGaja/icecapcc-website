'use client';
import React from 'react';

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white flex items-center justify-center font-grotesk">
      
      {/* 1. Fluid Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-80">
        {/* Blob 1: Deep Indigo */}
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] rounded-full mix-blend-screen animate-blob1"
             style={{
               background: 'radial-gradient(circle, rgba(30, 27, 75, 0.8) 0%, rgba(30, 27, 75, 0) 70%)',
               filter: 'blur(100px)'
             }} />
        
        {/* Blob 2: Stark Indigo */}
        <div className="absolute top-1/3 right-1/4 w-[60vw] h-[60vw] rounded-full mix-blend-screen animate-blob2"
             style={{
               background: 'radial-gradient(circle, rgba(49, 46, 129, 0.7) 0%, rgba(49, 46, 129, 0) 70%)',
               filter: 'blur(120px)'
             }} />
             
        {/* Blob 3: Weightless Indigo */}
        <div className="absolute bottom-[-10%] left-1/3 w-[70vw] h-[70vw] rounded-full mix-blend-screen animate-blob3"
             style={{
               background: 'radial-gradient(circle, rgba(55, 48, 163, 0.6) 0%, rgba(55, 48, 163, 0) 70%)',
               filter: 'blur(140px)'
             }} />
      </div>

      {/* 2. Brutalist Typography Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-[12vw] md:text-[18vw] font-black leading-none tracking-tighter uppercase mb-4"
            style={{
              textShadow: '0 20px 60px rgba(0,0,0,0.5)',
              // A subtle inner texture/gradient to make it feel massive
              background: 'linear-gradient(180deg, #ffffff 0%, #b0c4de 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
          ICECAPCC
        </h1>
        
        <div className="flex gap-4 md:gap-8 text-sm md:text-xl font-medium tracking-[0.2em] uppercase text-white/80">
          <span className="hover:text-white transition-colors duration-300 transform hover:-translate-y-1">Imagine.</span>
          <span className="hover:text-white transition-colors duration-300 transform hover:-translate-y-1">Create.</span>
          <span className="hover:text-white transition-colors duration-300 transform hover:-translate-y-1">Execute.</span>
        </div>
      </div>

      {/* 3. The Custom Lens Cursor was moved to layout */}
      
    </div>
  );
}
