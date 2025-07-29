"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei"
import type * as THREE from "three"

function AIGlobe() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1.2, 100, 100]} scale={1.5}>
        <MeshDistortMaterial
          color="#1169F3"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

function NetworkNodes() {
  const nodes = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      position: [(Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8] as [
        number,
        number,
        number,
      ],
      scale: Math.random() * 0.1 + 0.05,
    }))
  }, [])

  return (
    <>
      {nodes.map((node, index) => (
        <NetworkNode key={index} position={node.position} scale={node.scale} />
      ))}
    </>
  )
}

function NetworkNode({ position, scale }: { position: [number, number, number]; scale: number }) {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (ref.current) {
      ref.current.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime + position[0]) * 0.2
    }
  })

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#C11DFF" transparent />
    </mesh>
  )
}

const Hero3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#C11DFF" />
        <AIGlobe />
        <NetworkNodes />
      </Canvas>
    </div>
  )
}

export default Hero3D
