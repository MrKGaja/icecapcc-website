import React from 'react';
import AppShowcase from '../../components/AppShowcase';

export default function WorkPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '100px' }}>
      <div className="container" style={{ paddingBottom: '100px' }}>
        <h1 style={{ 
          fontSize: '4rem', 
          fontWeight: '600', 
          letterSpacing: '-0.04em',
          marginBottom: '1rem',
          color: '#000000'
        }}>
          Selected Works
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'rgba(0,0,0,0.6)',
          maxWidth: '600px',
          marginBottom: '4rem'
        }}>
          Explore our ecosystem of sovereign intelligence products and digital platforms.
        </p>
      </div>
      <AppShowcase />
    </main>
  );
}
