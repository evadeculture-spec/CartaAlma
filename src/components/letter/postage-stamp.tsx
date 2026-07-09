import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

/** Selo postal com denteado recortado, motivo dourado e valor facial. */
export function PostageStamp({ className }: { className?: string }) {
  return (
    <div className={cn("stamp-perforation w-[72px] rotate-[2deg] p-[5px]", className)} aria-hidden>
      <div className="flex flex-col items-center gap-0.5 border border-gold/40 bg-gradient-to-b from-[#f3e2c2] via-[#e9cf9f] to-[#dcbb82] px-1.5 pb-1 pt-1.5">
        <span className="text-[0.4rem] font-semibold uppercase tracking-[0.18em] text-espresso/80">
          Portugal
        </span>
        <span className="flex h-9 w-full items-center justify-center border border-espresso/15 bg-cream/60">
          <Heart size={17} strokeWidth={1.5} className="fill-rose/60 text-espresso/70" />
        </span>
        <span className="flex w-full items-baseline justify-between">
          <span className="text-[0.36rem] uppercase tracking-wider text-espresso/70">
            Carta Alma
          </span>
          <span className="font-serif text-[0.5rem] text-espresso/90">€1,95</span>
        </span>
      </div>
    </div>
  );
}
