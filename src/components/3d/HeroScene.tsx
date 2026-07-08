"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import { Envelope, LetterSheet, PenMesh } from "./envelope-parts";

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
      <meshStandardMaterial color="#7c5c40" roughness={0.9} metalness={0.03} />
    </mesh>
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
      <LetterSheet />
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
      <PenMesh position={[0.95, -0.575, 0.55]} rotation={[0, 0.55, Math.PI / 2]} />
    </group>
  );
}

export default function HeroScene({ pointerRef, scrollRef }: HeroSceneProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.6]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "low-power",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1,
      }}
      camera={{ position: [0, 2.15, 4.6], fov: 40 }}
    >
      <color attach="background" args={["#f3e6d2"]} />
      <fog attach="fog" args={["#f3e6d2", 4.5, 9]} />
      <ambientLight intensity={0.7} color="#fff3de" />
      <hemisphereLight args={["#fff3de", "#5a4632", 0.55]} />
      <pointLight
        position={[2.2, 2.4, 2]}
        intensity={16}
        color="#ffd9a0"
        castShadow
        shadow-mapSize={[512, 512]}
      />
      <pointLight position={[-2.5, 1.2, -1]} intensity={5} color="#c9a49a" />

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
        <EffectComposer multisampling={0}>
          <Bloom
            intensity={0.3}
            luminanceThreshold={0.92}
            luminanceSmoothing={0.25}
            mipmapBlur
          />
          <Vignette eskil={false} offset={0.25} darkness={0.4} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
