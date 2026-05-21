'use client';
import React, { useEffect, useState } from 'react';

export default function CursorLens() {
  const [lensPosition, setLensPosition] = useState({ x: -100, y: -100 });
  
  // Track target mouse position in a ref so we don't re-trigger the effect
  const mousePosRef = React.useRef({ x: -100, y: -100 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  useEffect(() => {
    let animationFrameId;
    
    const updateLensPosition = () => {
      setLensPosition((prevPos) => {
        const target = mousePosRef.current;
        const dx = target.x - prevPos.x;
        const dy = target.y - prevPos.y;
        
        // Stiffness / damping controls the "lag" and smoothness
        const easing = 0.15;
        
        return {
          x: prevPos.x + dx * easing,
          y: prevPos.y + dy * easing
        };
      });
      animationFrameId = requestAnimationFrame(updateLensPosition);
    };
    
    animationFrameId = requestAnimationFrame(updateLensPosition);
    return () => cancelAnimationFrame(animationFrameId);
  }, []); // Empty dependency array, so only one rAF loop ever runs

  return (
    <div
      className="fixed pointer-events-none z-[9999] rounded-full flex items-center justify-center"
      style={{
        left: lensPosition.x,
        top: lensPosition.y,
        width: '180px',
        height: '180px',
        transform: 'translate(-50%, -50%)',
        boxShadow: 'inset 0 0 40px rgba(255,255,255,0.05), 0 0 20px rgba(255,255,255,0.1)',
        border: '1px solid rgba(255,255,255,0.15)',
        background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        transition: 'width 0.3s ease, height 0.3s ease',
      }}
    >
      {/* Tiny inner dot for precise aiming */}
      <div className="w-1 h-1 bg-white rounded-full opacity-50" />
    </div>
  );
}
