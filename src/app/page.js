import React from 'react';
import Hero from '@/components/Hero';
import Vision from '@/components/Vision';
import StructuralCapacities from '@/components/StructuralCapacities';
import ModusOperandi from '@/components/ModusOperandi';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Vision />
      <StructuralCapacities />
      <div className="w-full h-[50vh] bg-[#020202] relative z-10"></div>
      <ModusOperandi />
      <CTA />
      <Footer />
    </>
  );
}
