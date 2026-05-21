'use client';

import React from 'react';

const apps = [
  {
    id: 1,
    name: 'Pico',
    tag: 'Sovereign Intelligence Ecosystem',
    description: 'A local-first AI architecture that decodes emotional and cognitive loops while operating with complete data privacy.',
    year: '2026'
  },
  {
    id: 2,
    name: 'Glacier Sync',
    tag: 'Infrastructure',
    description: 'Lightning-fast real-time data synchronization for modern, decentralized workflows.',
    year: '2026'
  },
  {
    id: 3,
    name: 'Frostbite',
    tag: 'Design System',
    description: 'A highly refined component library built for the next generation of web applications.',
    year: '2025'
  }
];

export default function AppShowcase() {
  return (
    <section id="work" className="section" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', background: 'transparent' }}>
      
      {/* Removed the blurry frosted glass overlay to embrace a sharp, solid background */}

      <div className="container" style={{ position: 'relative', zIndex: 10, color: '#000' }}>
        
        <div style={{ marginBottom: '6rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '2rem' }}>
          <h2 className="animate-slide-up" style={{ fontSize: '2rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            Selected Works
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {apps.map((app) => (
            <div 
              key={app.id} 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 2fr', 
                gap: '4rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(0,0,0,0.1)'
              }}
            >
              {/* Left Column: Text */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '2rem' }}>
                  <span>{app.tag}</span>
                  <span>{app.year}</span>
                </div>
                <h3 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
                  {app.name}
                </h3>
                <p style={{ fontSize: '1rem', color: 'rgba(0,0,0,0.8)', lineHeight: '1.6' }}>
                  {app.description}
                </p>
                <div style={{ marginTop: '1.5rem', fontWeight: '600', fontSize: '0.85rem' }}>
                  Read more
                </div>
              </div>
              
              {/* Right Column: Image Block (Mocked) */}
              <div style={{ display: 'flex', gap: '1rem', overflow: 'hidden' }}>
                <div style={{ 
                  flex: '2', 
                  backgroundColor: '#f4f4f4', 
                  borderRadius: '4px',
                  minHeight: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(0,0,0,0.5)',
                  fontFamily: 'monospace'
                }}>
                  [Preview Image]
                </div>
                <div style={{ 
                  flex: '1', 
                  backgroundColor: '#eaeaea', 
                  borderRadius: '4px',
                  minHeight: '400px'
                }}>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
