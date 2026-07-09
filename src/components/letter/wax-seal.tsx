import { cn } from "@/lib/utils";

interface WaxSealProps {
  className?: string;
  /** Iniciais gravadas no lacre. */
  initials?: string;
}

/** Selo de lacre vermelho com relevo e iniciais gravadas. */
export function WaxSeal({ className, initials = "CA" }: WaxSealProps) {
  return (
    <div className={cn("wax-seal relative h-16 w-16", className)} aria-hidden>
      <span className="wax-seal-letter select-none text-lg font-semibold tracking-tight">
        {initials}
      </span>
    </div>
  );
}
