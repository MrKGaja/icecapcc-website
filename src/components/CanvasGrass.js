'use client';
import React, { useEffect, useRef } from 'react';

export default function CanvasGrass() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    // Grass config
    const bladeCount = window.innerWidth < 768 ? 100 : 250;
    const blades = [];

    // Resize handler
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initBlades();
    };

    const initBlades = () => {
      blades.length = 0;
      for (let i = 0; i < bladeCount; i++) {
        blades.push({
          x: Math.random() * canvas.width,
          height: canvas.height * 0.3 + Math.random() * (canvas.height * 0.5),
          width: 4 + Math.random() * 8,
          swaySpeed: 0.001 + Math.random() * 0.002,
          swayOffset: Math.random() * Math.PI * 2,
          color: `rgba(10, 20, 30, ${0.5 + Math.random() * 0.5})`
        });
      }
      // Sort by height so taller blades are rendered on top
      blades.sort((a, b) => a.height - b.height);
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background gradient (cinematic mist)
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0a192f');
      gradient.addColorStop(1, '#000000');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw mist layer
      const mistGradient = ctx.createLinearGradient(0, canvas.height * 0.3, 0, canvas.height);
      mistGradient.addColorStop(0, 'rgba(100, 150, 200, 0)');
      mistGradient.addColorStop(0.5, 'rgba(100, 150, 200, 0.15)');
      mistGradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      ctx.fillStyle = mistGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grass blades
      blades.forEach((blade) => {
        const sway = Math.sin(time * blade.swaySpeed + blade.swayOffset) * (blade.height * 0.15);
        
        ctx.beginPath();
        ctx.moveTo(blade.x, canvas.height); // Base left
        ctx.quadraticCurveTo(
          blade.x + sway * 0.5, 
          canvas.height - blade.height * 0.5, 
          blade.x + sway, 
          canvas.height - blade.height // Tip
        );
        ctx.quadraticCurveTo(
          blade.x + sway * 0.5 + blade.width, 
          canvas.height - blade.height * 0.5, 
          blade.x + blade.width, 
          canvas.height // Base right
        );
        ctx.closePath();

        ctx.fillStyle = blade.color;
        ctx.fill();
      });

      time += 16; // Roughly 60fps
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resize);
    resize();
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0,
        pointerEvents: 'none'
      }} 
    />
  );
}
