"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { HeroFallback } from "./HeroFallback";
import { useWebglSupport } from "./use-webgl-support";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

/**
 * Orquestra a cena 3D do hero: deteta suporte WebGL e preferência de
 * movimento reduzido, e alimenta a cena com posição do rato / scroll
 * sem provocar re-renders (tudo via refs, lido dentro do useFrame).
 */
export function HeroCartaAlma3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  const webglSupported = useWebglSupport();
  const reducedMotion = Boolean(useReducedMotion());

  useEffect(() => {
    if (reducedMotion || webglSupported === false) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      pointerRef.current = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
      };
    };

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta == null || e.gamma == null) return;
      pointerRef.current = {
        x: Math.max(-1, Math.min(1, e.gamma / 25)),
        y: Math.max(-1, Math.min(1, (e.beta - 45) / 25)),
      };
    };

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
          const progress = 1 - Math.max(0, Math.min(1, rect.top / (window.innerHeight * 0.7)));
          scrollRef.current = Math.max(0, Math.min(1, progress));
        }
        ticking = false;
      });
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("deviceorientation", handleOrientation);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("deviceorientation", handleOrientation);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [reducedMotion, webglSupported]);

  const showScene = webglSupported === true && !reducedMotion;

  return (
    <div ref={containerRef} className="relative h-full w-full">
      {showScene ? (
        <HeroScene pointerRef={pointerRef} scrollRef={scrollRef} />
      ) : (
        <HeroFallback />
      )}
    </div>
  );
}
