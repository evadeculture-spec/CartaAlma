import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  flip?: boolean;
  fill?: string;
}

/** Separador com curva suave entre secções, inspirado em uma página que se dobra. */
export function SectionDivider({ className, flip, fill = "var(--color-ivory)" }: SectionDividerProps) {
  return (
    <div aria-hidden className={cn("relative h-16 w-full overflow-hidden sm:h-24", className)}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className={cn("h-full w-full", flip && "rotate-180")}
      >
        <path d="M0,40 C 360,100 1080,0 1440,50 L1440,100 L0,100 Z" fill={fill} />
      </svg>
    </div>
  );
}
