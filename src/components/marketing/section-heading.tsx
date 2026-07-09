import { cn } from "@/lib/utils";
import { InkRevealText } from "@/components/decor/ink-reveal-text";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2.5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="max-w-2xl font-serif text-[1.65rem] leading-tight text-ink text-balance-pretty sm:text-3xl">
        <InkRevealText text={title} as="span" />
      </h2>
      {description ? (
        <p className="max-w-xl text-sm leading-relaxed text-brown sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
