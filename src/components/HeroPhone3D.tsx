"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

const POST_H = 480;
const POSTS = 5;
const CANVAS_W = 480;
const CANVAS_H = POST_H * POSTS;

function drawAvatar(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, tone: string) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = tone;
  ctx.fill();
}

function drawIcon(ctx: CanvasRenderingContext2D, x: number, y: number, kind: "heart" | "comment" | "share") {
  ctx.strokeStyle = "#f5f5f5";
  ctx.lineWidth = 2.5;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  if (kind === "heart") {
    ctx.moveTo(x, y + 7);
    ctx.bezierCurveTo(x - 14, y - 6, x - 4, y - 16, x, y - 6);
    ctx.bezierCurveTo(x + 4, y - 16, x + 14, y - 6, x, y + 7);
  } else if (kind === "comment") {
    ctx.moveTo(x - 11, y - 8);
    ctx.lineTo(x + 11, y - 8);
    ctx.quadraticCurveTo(x + 14, y - 8, x + 14, y - 4);
    ctx.lineTo(x + 14, y + 3);
    ctx.quadraticCurveTo(x + 14, y + 7, x + 10, y + 7);
    ctx.lineTo(x - 2, y + 7);
    ctx.lineTo(x - 7, y + 12);
    ctx.lineTo(x - 7, y + 7);
    ctx.lineTo(x - 11, y + 7);
    ctx.quadraticCurveTo(x - 14, y + 7, x - 14, y + 3);
    ctx.lineTo(x - 14, y - 4);
    ctx.quadraticCurveTo(x - 14, y - 8, x - 11, y - 8);
  } else {
    ctx.moveTo(x - 12, y - 8);
    ctx.lineTo(x + 12, y);
    ctx.lineTo(x - 12, y + 8);
    ctx.lineTo(x - 6, y);
    ctx.closePath();
  }
  ctx.stroke();
}

function drawFeed(ctx: CanvasRenderingContext2D) {
  const gold = ["#e8b923", "#c98a1f", "#8a5e0f", "#fff2c4"];
  ctx.fillStyle = "#0d0d0d";
  ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

  for (let i = 0; i < POSTS; i++) {
    const top = i * POST_H;
    const tone = gold[i % gold.length];

    // header: avatar + two text bars
    drawAvatar(ctx, 34, top + 32, 15, tone);
    ctx.fillStyle = "#e5e0d5";
    ctx.fillRect(58, top + 22, 90, 7);
    ctx.fillStyle = "#5c574e";
    ctx.fillRect(58, top + 36, 55, 5);

    // image block
    const grad = ctx.createLinearGradient(0, top + 56, CANVAS_W, top + 56 + 340);
    grad.addColorStop(0, tone);
    grad.addColorStop(1, "#171512");
    ctx.fillStyle = grad;
    ctx.fillRect(16, top + 56, CANVAS_W - 32, 340);

    // action row
    drawIcon(ctx, 40, top + 425, "heart");
    drawIcon(ctx, 80, top + 425, "comment");
    drawIcon(ctx, 118, top + 425, "share");

    // caption bars
    ctx.fillStyle = "#e5e0d5";
    ctx.fillRect(16, top + 452, 130, 6);
    ctx.fillStyle = "#3a362f";
    ctx.fillRect(16, top + 464, 190, 5);
  }
}

function drawChrome(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#0a0a0a";
  ctx.fillRect(0, 0, w, h);

  // top status bar
  ctx.fillStyle = "#e8b923";
  ctx.font = "600 15px Arial";
  ctx.fillText("9:41", 14, 22);

  // stories row: ring avatars
  const ringColors = ["#e8b923", "#fff2c4", "#e8b923", "#8a5e0f", "#e8b923"];
  for (let i = 0; i < 5; i++) {
    const cx = 34 + i * 62;
    const cy = 58;
    ctx.beginPath();
    ctx.arc(cx, cy, 18, 0, Math.PI * 2);
    ctx.strokeStyle = ringColors[i];
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy, 14, 0, Math.PI * 2);
    ctx.fillStyle = "#2a2722";
    ctx.fill();
  }

  // fade line
  ctx.fillStyle = "rgba(232,185,35,0.25)";
  ctx.fillRect(0, h - 1, w, 1);
}

function Phone() {
  const groupRef = useRef<THREE.Group>(null);
  const feedMeshRef = useRef<THREE.Mesh>(null);
  const target = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  const [feedTexture] = useState(() => {
    const canvas = document.createElement("canvas");
    canvas.width = CANVAS_W;
    canvas.height = CANVAS_H;
    const ctx = canvas.getContext("2d")!;
    drawFeed(ctx);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapT = THREE.RepeatWrapping;
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.repeat.set(1, POST_H / CANVAS_H);
    return tex;
  });

  const chromeTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 480;
    canvas.height = 130;
    const ctx = canvas.getContext("2d")!;
    drawChrome(ctx, canvas.width, canvas.height);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, []);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      target.current.x = (e.clientY / window.innerHeight - 0.5) * 0.45;
      target.current.y = (e.clientX / window.innerWidth - 0.5) * 0.65;
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state) => {
    const group = groupRef.current;
    if (group) {
      group.rotation.x += (target.current.x - group.rotation.x) * 0.04;
      group.rotation.y += (target.current.y + 0.18 - group.rotation.y) * 0.04;
      group.position.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.09;
    }
    scrollRef.current += 0.0007;
    if (scrollRef.current > 1) scrollRef.current -= 1;
    const mat = feedMeshRef.current?.material as THREE.MeshBasicMaterial | undefined;
    if (mat?.map) mat.map.offset.y = 1 - scrollRef.current;
  });

  return (
    <group ref={groupRef}>
      <RoundedBox args={[1.7, 3.5, 0.16]} radius={0.14} smoothness={4}>
        <meshStandardMaterial color="#111214" metalness={0.65} roughness={0.3} />
      </RoundedBox>

      {/* scrolling feed, masked to the lower portion of the screen */}
      <mesh ref={feedMeshRef} position={[0, -0.32, 0.09]}>
        <planeGeometry args={[1.5, 2.55]} />
        <meshBasicMaterial map={feedTexture} toneMapped={false} />
      </mesh>

      {/* fixed chrome: status bar + stories row, sits slightly in front */}
      <mesh position={[0, 1.19, 0.091]}>
        <planeGeometry args={[1.5, 0.61]} />
        <meshBasicMaterial map={chromeTexture} toneMapped={false} transparent />
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

export default function HeroPhone3D() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6.2], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%", display: "block", background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 3]} intensity={1.4} color="#fff2c4" />
      <pointLight position={[-3, -2, 2]} intensity={0.9} color="#e8b923" />
      <Rig />
    </Canvas>
  );
}
