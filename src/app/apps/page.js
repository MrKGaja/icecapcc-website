import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const apps = [
  {
    id: 1,
    name: 'Pico',
    tag: 'Sovereign Intelligence Ecosystem',
    description: 'Every Emotion Matters. A local-first AI architecture that decodes emotional and cognitive loops while operating with complete data privacy.',
    year: '2026',
    color: 'from-blue-500/20 to-purple-500/20'
  }
];

export default function AppsPage() {
  return (
    <main className="bg-[#020202] min-h-screen text-white font-sans selection:bg-white/20">
      
      <section className="relative pt-40 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Our <span className="text-white/50">Apps</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl font-light">
            Discover our ecosystem of next-generation applications, engineered with precision, privacy, and unparalleled performance.
          </p>
        </div>

        {/* Apps Grid / List */}
        <div className="flex flex-col gap-12 md:gap-24">
          {apps.map((app, index) => (
            <div 
              key={app.id} 
              className={`group flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-6 w-full">
                <div className="flex items-center justify-between text-xs font-semibold tracking-widest uppercase text-white/40 mb-4 border-b border-white/10 pb-4">
                  <span>{app.tag}</span>
                  <span>{app.year}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-500">
                  {app.name}
                </h2>
                <p className="text-lg text-white/70 leading-relaxed font-light">
                  {app.description}
                </p>
                <div className="pt-4">
                  <Link href="/pico">
                    <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium tracking-wide">
                      Explore {app.name}
                    </button>
                  </Link>
                </div>
              </div>
              
              {/* Visual Mockup Area */}
              <div className="flex-1 w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-700 ease-out border border-white/10 bg-white/5 backdrop-blur-sm p-4">
                <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center relative overflow-hidden`}>
                  {/* Glassmorphism card inside the mockup */}
                  <div className="w-[80%] h-[70%] rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col">
                    {/* App Window Header */}
                    <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                    </div>
                    {/* App Content */}
                    <div className="flex-1 p-2 flex items-center justify-center relative overflow-hidden">
                      <img src="/pico-logo.jpeg" alt="Pico Logo" className="w-full h-full object-cover rounded-lg opacity-90 transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  </div>
                  
                  {/* Decorative glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
