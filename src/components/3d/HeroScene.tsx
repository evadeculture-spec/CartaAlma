"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function CameraAim({ target }: { target: [number, number, number] }) {
  const { camera } = useThree();
  useEffect(() => {
    camera.lookAt(...target);
  }, [camera, target]);
  return null;
}

interface HeroSceneProps {
  pointerRef: React.RefObject<{ x: number; y: number }>;
  scrollRef: React.RefObject<number>;
}

function Desk() {
  return (
    <mesh position={[0, -0.62, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[14, 10]} />
      <meshStandardMaterial color="#7c5c40" roughness={0.92} metalness={0.02} />
    </mesh>
  );
}

/** Aba do envelope, articulada na aresta traseira e ligeiramente aberta. */
function EnvelopeFlap() {
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-1.15, 0);
    s.lineTo(0, -0.72);
    s.lineTo(1.15, 0);
    s.lineTo(-1.15, 0);
    return s;
  }, []);

  const tiltX = Math.PI / 2 + 0.5;

  return (
    <group position={[0, 0.03, -0.75]} rotation={[tiltX, 0, 0]}>
      <mesh castShadow receiveShadow>
        <shapeGeometry args={[shape]} />
        <meshStandardMaterial color="#efe0cb" roughness={0.85} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, -0.46, -0.014]} rotation={[0, Math.PI, 0]}>
        <circleGeometry args={[0.16, 32]} />
        <meshStandardMaterial color="#b99a5b" roughness={0.35} metalness={0.45} />
      </mesh>
      <mesh position={[0, -0.46, -0.016]} rotation={[0, Math.PI, 0]}>
        <ringGeometry args={[0.1, 0.16, 32]} />
        <meshStandardMaterial
          color="#6b4f34"
          roughness={0.5}
          transparent
          opacity={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function Envelope() {
  return (
    <group position={[0, -0.32, 0.1]}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.3, 0.05, 1.5]} />
        <meshStandardMaterial color="#fff8ee" roughness={0.85} />
      </mesh>
      <EnvelopeFlap />
    </group>
  );
}

function Letter({ scrollRef }: { scrollRef: React.RefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const baseY = -0.27;
  const baseZ = 0.42;

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    const breathe = Math.sin(t * 0.6) * 0.012;
    const scroll = scrollRef.current ?? 0;
    group.current.position.y = baseY + 0.02 + breathe + scroll * 0.22;
    group.current.position.z = baseZ + scroll * 0.75;
    group.current.rotation.x = -0.04 + scroll * 0.04;
  });

  return (
    <group ref={group} position={[0, baseY, baseZ]}>
      <mesh castShadow receiveShadow rotation={[-Math.PI / 2 + 0.04, 0, 0]}>
        <boxGeometry args={[1.95, 0.02, 1.28]} />
        <meshStandardMaterial color="#fdfaf3" roughness={0.7} />
      </mesh>
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh
          key={i}
          position={[0, 0.015, -0.4 + i * 0.16]}
          rotation={[-Math.PI / 2 + 0.04, 0, 0]}
        >
          <planeGeometry args={[1.45 - (i % 2) * 0.22, 0.012]} />
          <meshStandardMaterial color="#3a2f26" opacity={0.3} transparent roughness={1} />
        </mesh>
      ))}
    </group>
  );
}

function Pen() {
  return (
    <group position={[0.95, -0.575, 0.55]} rotation={[0, 0.55, Math.PI / 2]}>
      <mesh castShadow>
        <cylinderGeometry args={[0.026, 0.026, 1.3, 16]} />
        <meshStandardMaterial color="#211b17" roughness={0.35} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0.68, 0]} castShadow>
        <coneGeometry args={[0.026, 0.13, 16]} />
        <meshStandardMaterial color="#b99a5b" roughness={0.3} metalness={0.5} />
      </mesh>
    </group>
  );
}

function Rig({
  pointerRef,
  scrollRef,
}: {
  pointerRef: React.RefObject<{ x: number; y: number }>;
  scrollRef: React.RefObject<number>;
}) {
  const rig = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!rig.current) return;
    const p = pointerRef.current ?? { x: 0, y: 0 };
    rig.current.rotation.y = THREE.MathUtils.lerp(rig.current.rotation.y, p.x * 0.16, 0.04);
    rig.current.rotation.x = THREE.MathUtils.lerp(rig.current.rotation.x, -p.y * 0.08, 0.04);
  });

  return (
    <group ref={rig}>
      <Desk />
      <Envelope />
      <Letter scrollRef={scrollRef} />
      <Pen />
    </group>
  );
}

export default function HeroScene({ pointerRef, scrollRef }: HeroSceneProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 2.15, 4.6], fov: 40 }}
    >
      <color attach="background" args={["#fff8ee"]} />
      <fog attach="fog" args={["#fff8ee", 6, 11]} />
      <ambientLight intensity={0.75} color="#fff3de" />
      <hemisphereLight args={["#fff3de", "#5a4632", 0.6]} />
      <pointLight
        position={[2.2, 2.4, 2]}
        intensity={30}
        color="#ffd9a0"
        castShadow
        shadow-mapSize={[512, 512]}
      />
      <pointLight position={[-2.5, 1.2, -1]} intensity={8} color="#c9a49a" />

      <CameraAim target={[0, -0.3, 0.15]} />

      <Suspense fallback={null}>
        <Rig pointerRef={pointerRef} scrollRef={scrollRef} />
        <Sparkles count={40} scale={[4.5, 2, 3.5]} size={2} speed={0.15} opacity={0.35} color="#f3d9a4" />
        <ContactShadows
          position={[0, -0.63, 0]}
          opacity={0.45}
          scale={8}
          blur={2.6}
          far={2}
          color="#2f241d"
        />
      </Suspense>
    </Canvas>
  );
}
