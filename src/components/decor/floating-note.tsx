"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingNoteProps {
  className?: string;
  rotate?: number;
  delay?: number;
  children: React.ReactNode;
}

/** Pequeno cartão decorativo que flutua devagar — postais, etiquetas, selos. */
export function FloatingNote({ className, rotate = -4, delay = 0, children }: FloatingNoteProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "rounded-xl bg-cream shadow-paper border border-almond/40",
        className
      )}
      style={{ rotate }}
      animate={
        shouldReduceMotion
          ? undefined
          : { y: [0, -10, 0], rotate: [rotate, rotate + 1.2, rotate] }
      }
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
