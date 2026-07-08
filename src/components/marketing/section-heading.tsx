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
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="max-w-2xl font-serif text-3xl leading-tight text-ink text-balance-pretty sm:text-4xl">
        <InkRevealText text={title} as="span" />
      </h2>
      {description ? (
        <p className="max-w-xl text-base leading-relaxed text-brown sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
