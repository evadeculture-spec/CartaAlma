import { SoftGlow } from "@/components/decor/soft-glow";
import { EnvelopeAnimation } from "@/components/decor/envelope-animation";

/**
 * Fallback estático e bonito para quando o WebGL não está disponível,
 * o utilizador prefere menos movimento, ou enquanto a cena 3D carrega.
 */
export function HeroFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-parchment via-cream to-ivory">
      <SoftGlow tone="gold" className="left-1/4 top-6 h-72 w-72" />
      <SoftGlow tone="rose" className="right-6 bottom-10 h-64 w-64" />
      <div className="bg-manuscript-lines absolute inset-0 opacity-40" />

      <div className="relative z-10 flex w-full max-w-xs flex-col items-center gap-6 px-8 py-12 sm:max-w-sm">
        <div className="relative w-full -rotate-2">
          <div
            aria-hidden
            className="absolute -top-8 left-6 h-24 w-40 rounded-t-md bg-white/90 shadow-paper"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent, transparent 9px, rgba(47,36,29,0.08) 10px)",
            }}
          />
          <EnvelopeAnimation className="relative" />
        </div>
      </div>
    </div>
  );
}
