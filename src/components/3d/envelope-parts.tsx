"use client";

import { useMemo } from "react";
import * as THREE from "three";
import type { ThreeElements } from "@react-three/fiber";

/**
 * Peças 3D partilhadas do envelope/carta Carta Alma — usadas tanto na cena
 * principal do hero como nas cenas mais pequenas espalhadas pelo site.
 * Mantidas como primitivas puras (sem useFrame próprio) para que cada cena
 * possa animá-las como quiser.
 */

export function EnvelopeBody(props: ThreeElements["mesh"]) {
  return (
    <mesh castShadow receiveShadow {...props}>
      <boxGeometry args={[2.3, 0.05, 1.5]} />
      <meshStandardMaterial color="#fff8ee" roughness={0.82} />
    </mesh>
  );
}

interface EnvelopeFlapProps {
  /** Ângulo extra (radianos) somado à abertura base da aba — negativo fecha, positivo abre mais. */
  tiltExtra?: number;
  position?: [number, number, number];
}

export function EnvelopeFlap({ tiltExtra = 0, position = [0, 0.03, -0.75] }: EnvelopeFlapProps) {
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-1.15, 0);
    s.lineTo(0, -0.72);
    s.lineTo(1.15, 0);
    s.lineTo(-1.15, 0);
    return s;
  }, []);

  const tiltX = Math.PI / 2 + 0.5 + tiltExtra;

  return (
    <group position={position} rotation={[tiltX, 0, 0]}>
      <mesh castShadow receiveShadow>
        <shapeGeometry args={[shape]} />
        <meshStandardMaterial color="#efe0cb" roughness={0.85} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, -0.46, -0.014]} rotation={[0, Math.PI, 0]}>
        <circleGeometry args={[0.16, 32]} />
        <meshStandardMaterial color="#b99a5b" roughness={0.3} metalness={0.5} envMapIntensity={1.2} />
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

interface EnvelopeProps {
  position?: [number, number, number];
  tiltExtra?: number;
}

export function Envelope({ position = [0, -0.32, 0.1], tiltExtra = 0 }: EnvelopeProps) {
  return (
    <group position={position}>
      <EnvelopeBody />
      <EnvelopeFlap tiltExtra={tiltExtra} />
    </group>
  );
}

interface LetterSheetProps {
  lines?: number;
}

export function LetterSheet({ lines = 5 }: LetterSheetProps) {
  return (
    <group>
      <mesh castShadow receiveShadow rotation={[-Math.PI / 2 + 0.04, 0, 0]}>
        <boxGeometry args={[1.95, 0.02, 1.28]} />
        <meshStandardMaterial color="#fdfaf3" roughness={0.65} />
      </mesh>
      {Array.from({ length: lines }).map((_, i) => (
        <mesh
          key={i}
          position={[0, 0.015, -0.4 + i * (0.8 / Math.max(lines - 1, 1))]}
          rotation={[-Math.PI / 2 + 0.04, 0, 0]}
        >
          <planeGeometry args={[1.45 - (i % 2) * 0.22, 0.012]} />
          <meshStandardMaterial color="#3a2f26" opacity={0.3} transparent roughness={1} />
        </mesh>
      ))}
    </group>
  );
}

export function PenMesh(props: ThreeElements["group"]) {
  return (
    <group {...props}>
      <mesh castShadow>
        <cylinderGeometry args={[0.026, 0.026, 1.3, 16]} />
        <meshStandardMaterial color="#211b17" roughness={0.3} metalness={0.25} />
      </mesh>
      <mesh position={[0, 0.68, 0]} castShadow>
        <coneGeometry args={[0.026, 0.13, 16]} />
        <meshStandardMaterial color="#b99a5b" roughness={0.25} metalness={0.55} />
      </mesh>
    </group>
  );
}
