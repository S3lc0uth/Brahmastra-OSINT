"use client"

import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;

  // 2D Random
  float random (vec2 st) {
      return fract(sin(dot(st.xy,
                           vec2(12.9898,78.233)))*
          43758.5453123);
  }

  // 2D Noise
  float noise (vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);

      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));

      vec2 u = f*f*(3.0-2.0*f);
      return mix(a, b, u.x) +
              (c - a)* u.y * (1.0 - u.x) +
              (d - b) * u.x * u.y;
  }

  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.1;
    
    float n = noise(uv * 4.0 + t);
    float n2 = noise(uv * 2.0 - t * 0.5);
    
    float intensity = pow(0.02 / distance(uv, vec2(0.5)), 1.2);
    
    vec3 color = mix(uColor1, uColor2, n);
    color = mix(color, uColor1, n2);
    
    float glow = pow(abs(0.5 - uv.y) * 1.5, 2.0);
    
    gl_FragColor = vec4(color * glow * intensity, 1.0);
  }
`

export function GlowScene() {
  const materialRef = useRef<THREE.ShaderMaterial>(null!)

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color("#6a0dad") }, // Purple
      uColor2: { value: new THREE.Color("#0000ff") }, // Blue
    }),
    [],
  )

  useFrame((state) => {
    const { clock } = state
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime()
    }
  })

  return (
    <mesh>
      <planeGeometry args={[10, 10]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}
