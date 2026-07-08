"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InkRevealTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  /** Divide por palavras (padrão) ou mantém o texto inteiro. */
  splitBy?: "word" | "none";
}

/**
 * Texto que "nasce" na página como tinta a assentar no papel —
 * pequeno blur + fade + subida, com stagger por palavra.
 */
export function InkRevealText({
  text,
  className,
  as = "p",
  delay = 0,
  splitBy = "word",
}: InkRevealTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as];
  const words = splitBy === "word" ? text.split(" ") : [text];

  if (shouldReduceMotion) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <Component className={cn(className, "inline-flex flex-wrap")}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{
            duration: 0.7,
            ease: [0.65, 0, 0.35, 1],
            delay: delay + i * 0.045,
          }}
          className="mr-[0.3em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
}
