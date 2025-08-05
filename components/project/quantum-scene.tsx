"use client"

import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"

const vertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  varying float vDistance;

  void main() {
    vec3 pos = position;
    float dist = distance(vec2(pos.x, pos.y), uMouse);
    float force = smoothstep(0.5, 0.0, dist);
    
    pos.z += force * 0.5;
    pos.z += sin(pos.x * 10.0 + uTime) * 0.05;
    pos.z += sin(pos.y * 10.0 + uTime) * 0.05;

    vDistance = force;

    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
    gl_PointSize = 3.0 + force * 5.0;
  }
`

const fragmentShader = `
  varying float vDistance;
  void main() {
    vec3 color = vec3(0.3, 0.5, 1.0);
    vec3 highlight = vec3(1.0, 1.0, 1.0);
    
    color = mix(color, highlight, vDistance);

    float strength = distance(gl_PointCoord, vec2(0.5));
    strength = 1.0 - step(0.5, strength);

    gl_FragColor = vec4(color, strength * (0.5 + vDistance * 0.5));
  }
`

const Scene = () => {
  const pointsRef = useRef<any>()
  const count = 50000

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 4
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.2
    }
    return positions
  }, [count])

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    [],
  )

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.material.uniforms.uTime.value += delta
      pointsRef.current.material.uniforms.uMouse.value.lerp(state.mouse, 0.05)
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

const QuantumScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Scene />
    </Canvas>
  )
}

export default QuantumScene
