'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Great_Vibes } from 'next/font/google';

const calligraphy = Great_Vibes({ subsets: ['latin'], weight: '400' });

const FeatherIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 2c-2 0-5 1-8 4s-4 7-4 7L3 18l1.5 1.5L9 16c0 0 4-1 7-4s4-6 4-8V2h-2z" />
    <path d="M12 12l3-3" />
    <path d="M10 14l2-2" />
  </svg>
);

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes quillBob {
          0% { transform: rotate(0deg) translateY(0); }
          15% { transform: rotate(-15deg) translateY(-4px); }
          30% { transform: rotate(10deg) translateY(2px); }
          45% { transform: rotate(-10deg) translateY(-2px); }
          60% { transform: rotate(15deg) translateY(4px); }
          75% { transform: rotate(-5deg) translateY(-1px); }
          100% { transform: rotate(0deg) translateY(0); }
        }
      `}</style>
      <nav className="fixed top-8 w-full flex justify-center z-[100] px-4 pointer-events-none mix-blend-difference">
        <div className={`relative flex items-center justify-between transition-all duration-500 ease-out rounded-full border border-white/10 px-8 py-4 backdrop-blur-xl pointer-events-auto overflow-hidden ${isScrolled ? 'w-[260px] bg-white/10 shadow-2xl justify-center' : 'w-[90%] max-w-[600px] bg-white/5'}`}>
        
          {/* Left Edge: Logo */}
          <div className={`flex-shrink-0 text-white transition-all duration-500 flex items-center justify-center w-6 ${isScrolled ? 'opacity-0 -translate-x-4 absolute pointer-events-none' : 'opacity-100 translate-x-0'}`}>
            <FeatherIcon />
          </div>
          
          {/* Center: Links & Scrolled Logo */}
          <div className="flex-1 flex justify-center items-center relative h-6">
            <div className={`absolute flex items-center gap-8 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-500 ${isScrolled ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 text-white/70 scale-100 delay-100'}`}>
              <Link href="/" className={`hover:text-white transition-colors ${pathname === '/' ? 'text-white' : ''}`}>
                Home
              </Link>
              <Link href="/apps" className={`hover:text-white transition-colors ${pathname === '/apps' ? 'text-white' : ''}`}>
                Our Apps
              </Link>
            </div>
            
            <div className={`absolute flex items-end justify-start w-[140px] text-4xl text-white transition-all duration-500 whitespace-nowrap ${calligraphy.className} ${isScrolled ? 'opacity-100 scale-100 delay-100' : 'opacity-0 scale-105 pointer-events-none'}`}>
              <span 
                className="overflow-hidden transition-[max-width] duration-[1500ms] ease-out inline-block" 
                style={{ maxWidth: isScrolled ? '140px' : '0px' }}
              >
                Icecapcc
              </span>
              <div 
                className="flex-shrink-0 ml-1 mb-1" 
                style={{ animation: isScrolled ? 'quillBob 1.5s ease-in-out' : 'none' }}
              >
                <FeatherIcon />
              </div>
            </div>
          </div>

          {/* Right Edge: Balance */}
          <div className={`flex-shrink-0 transition-all duration-500 w-6 ${isScrolled ? 'opacity-0 translate-x-4 absolute right-8 pointer-events-none' : 'opacity-100'}`}>
          </div>
        </div>
      </nav>
    </>
  );
}
