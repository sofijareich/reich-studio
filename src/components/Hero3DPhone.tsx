"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

function drawChaoticScreen(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const colors = ["#ff5c5c", "#ffd23f", "#3fa9ff", "#ff3fa0", "#3fffb0", "#ffffff"];
  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 26; i++) {
    ctx.fillStyle = colors[i % colors.length];
    const bw = 60 + Math.random() * 120;
    const bh = 40 + Math.random() * 90;
    ctx.save();
    ctx.translate(Math.random() * w, Math.random() * h);
    ctx.rotate((Math.random() - 0.5) * 0.6);
    ctx.fillRect(-bw / 2, -bh / 2, bw, bh);
    ctx.restore();
  }
  ctx.fillStyle = "rgba(0,0,0,0.55)";
  ctx.fillRect(0, 0, w, 90);
  ctx.fillStyle = "#fff";
  ctx.font = "bold 34px Arial";
  ctx.fillText("?!  #post  !!SALE", 20, 55);
}

function drawCleanScreen(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.fillStyle = "#0a0a0a";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "rgba(232,185,35,0.12)";
  ctx.fillRect(0, 0, w, 110);
  ctx.fillStyle = "#e8b923";
  ctx.font = "bold 30px Arial";
  ctx.fillText("SEMPACHERSEE", 24, 65);
  ctx.font = "16px Arial";
  ctx.fillStyle = "#f5f5f5";
  ctx.fillText("Ort der Möglichkeiten", 24, 92);

  const cols = 3;
  const rows = 4;
  const gap = 6;
  const gridTop = 130;
  const cellW = (w - gap * (cols - 1)) / cols;
  const cellH = (h - gridTop - gap * (rows - 1)) / rows;
  const tones = ["#2a2a2a", "#333", "#3a3a3a"];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * (cellW + gap);
      const y = gridTop + r * (cellH + gap);
      ctx.fillStyle = tones[(r + c) % tones.length];
      ctx.fillRect(x, y, cellW, cellH);
      if ((r + c) % 4 === 0) {
        ctx.fillStyle = "rgba(232,185,35,0.5)";
        ctx.fillRect(x, y, cellW, 4);
      }
    }
  }
}

function makeTexture(draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void) {
  const canvas = document.createElement("canvas");
  canvas.width = 480;
  canvas.height = 960;
  const ctx = canvas.getContext("2d")!;
  draw(ctx, canvas.width, canvas.height);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function Phone() {
  const groupRef = useRef<THREE.Group>(null);
  const cleanMatRef = useRef<THREE.MeshBasicMaterial>(null);
  const target = useRef({ x: 0, y: 0 });
  const scrollProgress = useRef(0);

  const chaoticTexture = useMemo(() => makeTexture(drawChaoticScreen), []);
  const cleanTexture = useMemo(() => makeTexture(drawCleanScreen), []);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      target.current.x = (e.clientY / window.innerHeight - 0.5) * 0.5;
      target.current.y = (e.clientX / window.innerWidth - 0.5) * 0.7;
    }
    function onScroll() {
      scrollProgress.current = Math.min(Math.max(window.scrollY / 700, 0), 1);
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useFrame(() => {
    const group = groupRef.current;
    if (group) {
      group.rotation.x += (target.current.x - group.rotation.x) * 0.04;
      group.rotation.y += (target.current.y + 0.15 - group.rotation.y) * 0.04;
    }
    if (cleanMatRef.current) {
      cleanMatRef.current.opacity +=
        (scrollProgress.current - cleanMatRef.current.opacity) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <RoundedBox args={[1.7, 3.5, 0.18]} radius={0.14} smoothness={4}>
        <meshStandardMaterial color="#111214" metalness={0.6} roughness={0.35} />
      </RoundedBox>
      <mesh position={[0, 0, 0.095]}>
        <planeGeometry args={[1.5, 3.2]} />
        <meshBasicMaterial map={chaoticTexture} toneMapped={false} />
      </mesh>
      <mesh position={[0, 0, 0.096]}>
        <planeGeometry args={[1.5, 3.2]} />
        <meshBasicMaterial
          ref={cleanMatRef}
          map={cleanTexture}
          transparent
          opacity={0}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

function Rig() {
  const { size } = useThree();
  const scale = Math.min(size.width, size.height) < 400 ? 0.8 : 1;
  return (
    <group scale={scale}>
      <Phone />
    </group>
  );
}

export default function Hero3DPhone() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6.2], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 3]} intensity={1.4} color="#fff2c4" />
      <pointLight position={[-3, -2, 2]} intensity={0.9} color="#e8b923" />
      <Rig />
    </Canvas>
  );
}
