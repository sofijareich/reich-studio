"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GoldGem() {
  const meshRef = useRef<THREE.Mesh>(null);
  const target = useRef({ x: 0, y: 0 });
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function onMove(e: MouseEvent) {
      target.current.x = (e.clientY / window.innerHeight - 0.5) * 0.6;
      target.current.y = (e.clientX / window.innerWidth - 0.5) * 0.8;
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    if (!reduced.current) {
      mesh.rotation.y += delta * 0.18;
      mesh.rotation.x += delta * 0.05;
    }
    mesh.rotation.x += (target.current.x - mesh.rotation.x) * 0.02;
    mesh.rotation.z += (target.current.y * 0.3 - mesh.rotation.z) * 0.02;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshStandardMaterial
        color="#e8b923"
        emissive="#5a4008"
        emissiveIntensity={0.5}
        metalness={0.9}
        roughness={0.18}
        flatShading
      />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 3]} intensity={1.6} color="#fff2c4" />
      <pointLight position={[-3, -2, 2]} intensity={1.1} color="#e8b923" />
      <GoldGem />
    </Canvas>
  );
}
