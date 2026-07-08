"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { EnvelopeAnimation } from "@/components/decor/envelope-animation";
import { useWebglSupport } from "./use-webgl-support";
import { useInView } from "./use-in-view";
import { cn } from "@/lib/utils";

const FloatingEnvelopeScene = dynamic(() => import("./FloatingEnvelopeScene"), {
  ssr: false,
  loading: () => null,
});

interface FloatingEnvelope3DProps {
  className?: string;
  peekLetter?: boolean;
  sparkleColor?: string;
}

/**
 * Envelope 3D decorativo e leve, montado apenas quando entra em vista.
 * Cai para a ilustração SVG estática se não houver WebGL ou o utilizador
 * preferir menos movimento.
 */
export function FloatingEnvelope3D({ className, peekLetter, sparkleColor }: FloatingEnvelope3DProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const webglSupported = useWebglSupport();
  const reducedMotion = Boolean(useReducedMotion());

  const showScene = inView && webglSupported === true && !reducedMotion;

  return (
    <div ref={ref} className={cn("relative aspect-square w-full", className)}>
      {showScene ? (
        <FloatingEnvelopeScene peekLetter={peekLetter} sparkleColor={sparkleColor} />
      ) : (
        <EnvelopeAnimation sealOnView className="h-full max-w-none" />
      )}
    </div>
  );
}
