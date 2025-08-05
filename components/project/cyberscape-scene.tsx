"use client"

import * as THREE from "three"
import { Canvas, extend, useFrame } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"
import { useMemo, useRef } from "react"

const CyberscapeMaterial = shaderMaterial(
  { uTime: 0, uMouse: new THREE.Vector2() },
  // vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  `
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;

    float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.y * u.x;
    }

    void main() {
      vec2 st = vUv;
      st.x *= 1.6; // Aspect ratio correction
      
      // Glitch effect based on mouse
      float glitch = smoothstep(0.3, 0.0, distance(uMouse, vUv)) * 0.1;

      // Scan lines
      float scanline = sin(vUv.y * 800.0 * (1.0 + glitch)) * 0.04;
      
      // Grid
      vec2 grid_uv = fract(st * vec2(30.0, 20.0));
      float grid = (1.0 - step(0.05, grid_uv.x)) + (1.0 - step(0.05, grid_uv.y));
      grid = clamp(grid, 0.0, 1.0);

      // Base color
      vec3 color = vec3(0.05, 0.0, 0.15);
      
      // Add grid
      color += vec3(0.2, 0.5, 1.0) * grid * 0.3;
      
      // Add noise
      color += noise(st * 10.0 + uTime * 0.2) * 0.1;
      
      // Add scanlines
      color += scanline;

      // Add mouse interaction
      float mouseDist = distance(uMouse, vUv);
      color += smoothstep(0.2, 0.0, mouseDist) * vec3(0.5, 0.7, 1.0);

      gl_FragColor = vec4(color, 1.0);
    }
  `,
)

extend({ CyberscapeMaterial })

const Scene = () => {
  const materialRef = useRef<any>()
  const mousePos = useMemo(() => new THREE.Vector2(), [])

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uTime += delta
      materialRef.current.uMouse.lerp(state.mouse, 0.05)
    }
  })

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      {/* @ts-ignore */}
      <cyberscapeMaterial ref={materialRef} />
    </mesh>
  )
}

const CyberscapeScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Scene />
    </Canvas>
  )
}

export default CyberscapeScene
