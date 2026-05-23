'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const IcebergCanvas = dynamic(() => import('@/components/IcebergModel'), { 
  ssr: false,
});

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white flex items-center justify-center font-grotesk">
      
      {/* 1. Cinematic Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="/hero-video-poster.jpg"
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/Split_ocean_scene_with_fish_202605230230.mp4" type="video/mp4" />
        </video>
        {/* Dark gradient overlay to preserve clinical DNA and text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202]"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 2. WebGL 3D Layer (Refractive Iceberg) */}
      <IcebergCanvas />

      {/* 3. Brutalist Typography Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center pointer-events-none mix-blend-screen">
        <h1 className="text-[12vw] md:text-[18vw] font-black leading-none tracking-tighter uppercase"
            style={{
              textShadow: '0 20px 60px rgba(0,0,0,0.8)',
              background: 'linear-gradient(180deg, #ffffff 0%, #b0c4de 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
          ICECAPCC
        </h1>
      </div>
      
    </div>
  );
}
