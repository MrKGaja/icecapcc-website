'use client';
import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

// Advanced 3D Noise GLSL Shader with smooth scroll interpolation
const fragmentShader = `
  uniform float uTime;
  uniform float uScrollY;
  uniform vec2 uResolution;
  varying vec2 vUv;

  // Modulo 289 without a division (only multiplications)
  vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }
  vec2 mod289(vec2 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }
  // Permutation polynomial: (34x^2 + x) mod 289
  vec3 permute(vec3 x) {
    return mod289(((x*34.0)+1.0)*x);
  }
  // Simplex noise function
  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                       -0.577350269189626,  // -1.0 + 2.0 * C.x
                        0.024390243902439); // 1.0 / 41.0
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i); 
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 st = gl_FragCoord.xy/uResolution.xy;
    st.x *= uResolution.x/uResolution.y;

    // Create flowing waves using noise
    float n = snoise(st * 3.0 + vec2(uTime * 0.1, uTime * 0.2));
    n += 0.5 * snoise(st * 6.0 - vec2(uTime * 0.3, uTime * 0.1));
    
    // Peacock Colors (Dark Iridescent Blues and Greens)
    vec3 peacockCol = mix(vec3(0.0, 0.05, 0.2), vec3(0.0, 0.8, 0.5), n * 0.5 + 0.5);
    peacockCol = mix(peacockCol, vec3(0.0, 0.3, 0.6), snoise(st * 2.0 + uTime * 0.1));
    
    // Ice Colors (Bright Whites and Cyans)
    vec3 iceCol = mix(vec3(0.8, 0.9, 1.0), vec3(1.0, 1.0, 1.0), n * 0.5 + 0.5);
    iceCol = mix(iceCol, vec3(0.6, 0.8, 1.0), snoise(st * 4.0 - uTime * 0.05));

    // Calculate transition based on scroll
    // uScrollY goes from 0 to ~1000 pixels. We map 0-800 to 0.0-1.0 transition.
    float transition = clamp(uScrollY / 600.0, 0.0, 1.0);
    
    // Smoothstep for a buttery transition
    transition = smoothstep(0.0, 1.0, transition);

    vec3 finalColor = mix(peacockCol, iceCol, transition);
    
    // Add subtle vignette
    float dist = distance(vUv, vec2(0.5));
    finalColor *= smoothstep(0.8, 0.2, dist * (1.0 - transition * 0.5)); // Less vignette in ice mode

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const BackgroundPlane = () => {
  const meshRef = useRef();
  const materialRef = useRef();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScrollY: { value: 0 },
      uResolution: { value: new THREE.Vector2(1000, 1000) }
    }),
    []
  );

  useEffect(() => {
    const handleResize = () => {
      if (materialRef.current) {
        materialRef.current.uniforms.uResolution.value.set(
          window.innerWidth,
          window.innerHeight
        );
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    const handleScroll = () => {
      if (materialRef.current) {
        materialRef.current.uniforms.uScrollY.value = window.scrollY;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* A full-screen quad */}
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
};

export default function ShaderBackground() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      pointerEvents: 'none'
    }}>
      <Canvas orthographic camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
        <BackgroundPlane />
      </Canvas>
    </div>
  );
}
