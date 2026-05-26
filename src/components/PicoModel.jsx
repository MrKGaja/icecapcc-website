'use client';
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, PresentationControls, Float, Html, Stage } from '@react-three/drei';

function Model(props) {
  const { scene } = useGLTF('/Humming-Bird.glb');
  const ref = useRef();
  
  // Add a subtle, clinical rotation if needed, though Float handles most movement
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.1;
    }
  });

  return <primitive ref={ref} object={scene} {...props} />;
}

export default function PicoModel() {
  return (
    <div className="w-full h-full min-h-[500px] relative z-20">
      <Canvas shadows camera={{ fov: 45 }}>
        
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <Suspense fallback={<Html center className="text-[#b388ff] text-sm tracking-widest whitespace-nowrap uppercase">Loading Structural Architecture...</Html>}>
            <Stage environment="studio" intensity={0.5} adjustCamera={2.5} shadows={false}>
              <Float
                speed={2} 
                rotationIntensity={0.5} 
                floatIntensity={1} 
                floatingRange={[-0.2, 0.2]}
              >
                <Model />
              </Float>
            </Stage>
          </Suspense>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload('/Humming-Bird.glb');
