import { cn } from "@/lib/utils";

interface SoftGlowProps {
  className?: string;
  tone?: "gold" | "rose" | "sage";
}

const toneMap: Record<NonNullable<SoftGlowProps["tone"]>, string> = {
  gold: "bg-gold/30",
  rose: "bg-rose/25",
  sage: "bg-sage/25",
};

/** Mancha de luz quente, decorativa e não interativa — usar em fundos de secção. */
export function SoftGlow({ className, tone = "gold" }: SoftGlowProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-[90px] animate-glow-pulse",
        toneMap[tone],
        className
      )}
    />
  );
}
