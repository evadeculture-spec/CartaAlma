"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface EnvelopeAnimationProps {
  className?: string;
  /** Se verdadeiro, o selo/lacre aparece e o envelope fecha ao entrar em vista. */
  sealOnView?: boolean;
}

/** Ilustração SVG delicada de um envelope de papel, com selo que fecha suavemente. */
export function EnvelopeAnimation({ className, sealOnView = true }: EnvelopeAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("relative w-full max-w-sm mx-auto", className)}>
      <svg
        viewBox="0 0 320 220"
        className="w-full h-auto drop-shadow-[0_20px_40px_rgba(47,36,29,0.15)]"
        role="img"
        aria-label="Envelope de papel creme fechado com selo dourado"
      >
        <rect x="8" y="8" width="304" height="204" rx="14" fill="var(--color-cream)" stroke="var(--color-almond)" strokeWidth="1.5" />
        <motion.path
          d="M8 22 L160 130 L312 22"
          fill="none"
          stroke="var(--color-almond)"
          strokeWidth="1.5"
          initial={false}
          animate={{ d: "M8 22 L160 130 L312 22" }}
        />
        <path d="M8 210 L120 120" stroke="var(--color-almond)" strokeWidth="1" opacity="0.6" fill="none" />
        <path d="M312 210 L200 120" stroke="var(--color-almond)" strokeWidth="1" opacity="0.6" fill="none" />

        <motion.g
          initial={sealOnView && !shouldReduceMotion ? { scale: 1.5, opacity: 0, rotate: -12 } : false}
          whileInView={sealOnView ? { scale: 1, opacity: 1, rotate: 0 } : undefined}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay: 0.3 }}
        >
          <circle cx="160" cy="110" r="22" fill="var(--color-gold)" />
          <circle cx="160" cy="110" r="22" fill="none" stroke="var(--color-espresso)" strokeOpacity="0.15" strokeWidth="1" />
          <path
            d="M160 98 C 165 103, 165 108, 160 113 C 155 108, 155 103, 160 98 Z"
            fill="var(--color-espresso)"
            fillOpacity="0.35"
          />
        </motion.g>
      </svg>
    </div>
  );
}
