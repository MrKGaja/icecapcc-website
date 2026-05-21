import React from 'react';
import Hero from '@/components/Hero';
import Vision from '@/components/Vision';
import Capabilities from '@/components/Capabilities';
import Methodology from '@/components/Methodology';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Vision />
      <Capabilities />
      <div className="w-full h-[50vh] bg-[#020202] relative z-10"></div>
      <Methodology />
      <CTA />
      <Footer />
    </>
  );
}
