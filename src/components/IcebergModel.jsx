'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Environment, Float, Html, PresentationControls, Bounds } from '@react-three/drei';

function Model(props) {
  const { nodes } = useGLTF('/iceberg.glb');
  
  return (
    <group {...props} dispose={null}>
      {Object.values(nodes).map((node, i) => {
        if (node.isMesh) {
          return (
            <mesh key={i} geometry={node.geometry} scale={node.scale} position={node.position} rotation={node.rotation}>
              <meshPhysicalMaterial
                transmission={1}
                roughness={0.15}
                thickness={3}
                ior={1.2}
                color="#e0e7ff"
                envMapIntensity={1.5}
                clearcoat={1}
                clearcoatRoughness={0.1}
                transparent={true}
              />
            </mesh>
          )
        }
        return null;
      })}
    </group>
  );
}

export default function IcebergCanvas() {
  return (
    <div className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#3730a3" />
        <Environment preset="city" />
        
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 2, Math.PI / 2]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <Float
            speed={2} 
            rotationIntensity={0.2} 
            floatIntensity={0.5} 
            floatingRange={[-0.5, 0.5]}
          >
            <Suspense fallback={<Html center className="text-white/50 text-sm tracking-widest uppercase whitespace-nowrap">Structuring Geometry...</Html>}>
              <Bounds fit clip observe margin={1.5}>
                <Model />
              </Bounds>
            </Suspense>
          </Float>
        </PresentationControls>
      </Canvas>
    </div>
  );
}
