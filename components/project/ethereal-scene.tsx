"use client"

import * as THREE from "three"
import { Canvas, extend, useFrame } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"
import { useRef } from "react"

const EtherealMaterial = shaderMaterial(
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

    // 2D Random
    float random (vec2 st) {
        return fract(sin(dot(st.xy,
                             vec2(12.9898,78.233)))*
            43758.5453123);
    }

    // 2D Noise based on Morgan McGuire @morgan3d
    // https://www.shadertoy.com/view/4dS3Wd
    float noise (vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);

        // Four corners in 2D of a tile
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));

        vec2 u = f*f*(3.0-2.0*f);
        return mix(a, b, u.x) +
                (c - a)* u.y * (1.0 - u.x) +
                (d - b)* u.y * u.x;
    }

    #define OCTAVES 6
    float fbm (vec2 st) {
        float value = 0.0;
        float amplitude = .5;
        float frequency = 0.;
        for (int i = 0; i < OCTAVES; i++) {
            value += amplitude * noise(st);
            st *= 2.;
            amplitude *= .5;
        }
        return value;
    }

    void main() {
        vec2 st = vUv;
        st.x *= 1.6; // aspect ratio
        vec3 color = vec3(0.0);

        vec2 q = vec2(0.);
        q.x = fbm( st + 0.00*uTime);
        q.y = fbm( st + vec2(1.0));

        vec2 r = vec2(0.);
        r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*uTime );
        r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*uTime);

        float f = fbm(st+r);

        color = mix(vec3(0.101961,0.619608,0.666667),
                    vec3(0.666667,0.666667,0.498039),
                    clamp((f*f)*4.0,0.0,1.0));

        color = mix(color,
                    vec3(0,0,0.164706),
                    clamp(length(q),0.0,1.0));

        color = mix(color,
                    vec3(0.666667,1,1),
                    clamp(length(r.x),0.0,1.0));
        
        // Mouse interaction
        float mouseDist = distance(uMouse, vUv);
        vec2 mouseVec = uMouse - vUv;
        float mouseEffect = smoothstep(0.3, 0.0, mouseDist);
        r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*uTime + mouseVec * mouseEffect * 2.0);
        f = fbm(st+r);

        gl_FragColor = vec4((f*f*f+.6*f*f+.5*f)*color,1.);
    }
  `,
)

extend({ EtherealMaterial })

const Scene = () => {
  const materialRef = useRef<any>()

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uTime += delta * 0.3
      materialRef.current.uMouse.lerp(state.mouse, 0.05)
    }
  })

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      {/* @ts-ignore */}
      <etherealMaterial ref={materialRef} />
    </mesh>
  )
}

const EtherealScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Scene />
    </Canvas>
  )
}

export default EtherealScene
