"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { Envelope, LetterSheet } from "./envelope-parts";

interface FloatingEnvelopeSceneProps {
  /** Se verdadeiro, a carta mostra-se ligeiramente mais fora do envelope. */
  peekLetter?: boolean;
  sparkleColor?: string;
}

function FloatingRig({ peekLetter }: { peekLetter: boolean }) {
  const group = useRef<THREE.Group>(null);
  const letter = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.position.y = Math.sin(t * 0.7) * 0.05;
      group.current.rotation.y = Math.sin(t * 0.35) * 0.22;
    }
    if (letter.current) {
      const target = peekLetter ? 0.16 : 0.02;
      letter.current.position.z = THREE.MathUtils.lerp(letter.current.position.z, 0.42 + target, 0.04);
    }
  });

  return (
    <group ref={group}>
      <Envelope position={[0, -0.1, 0]} />
      <group ref={letter} position={[0, 0.06, 0.42]}>
        <LetterSheet lines={4} />
      </group>
    </group>
  );
}

export default function FloatingEnvelopeScene({
  peekLetter = true,
  sparkleColor = "#f3d9a4",
}: FloatingEnvelopeSceneProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "low-power",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1,
      }}
      camera={{ position: [0, 2.5, 3.1], fov: 32 }}
      onCreated={({ camera }) => camera.lookAt(0, -0.22, 0.15)}
    >
      <ambientLight intensity={0.75} color="#fff3de" />
      <hemisphereLight args={["#fff3de", "#5a4632", 0.5]} />
      <pointLight position={[1.8, 1.8, 1.4]} intensity={9} color="#ffd9a0" />
      <pointLight position={[-1.6, 0.6, -1]} intensity={3} color="#c9a49a" />

      <Suspense fallback={null}>
        <FloatingRig peekLetter={peekLetter} />
        <Sparkles count={18} scale={[2.2, 1.4, 2]} size={2} speed={0.15} opacity={0.3} color={sparkleColor} />
        <ContactShadows position={[0, -0.42, 0]} opacity={0.35} scale={4} blur={2.2} far={1.4} color="#2f241d" />
        <EffectComposer multisampling={0}>
          <Bloom intensity={0.3} luminanceThreshold={0.88} luminanceSmoothing={0.25} mipmapBlur />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
