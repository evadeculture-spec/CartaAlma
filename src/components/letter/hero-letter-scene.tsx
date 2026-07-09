import { cn } from "@/lib/utils";
import { LetterSheet } from "@/components/letter/letter-sheet";
import { Envelope } from "@/components/letter/envelope";
import { WaxSeal } from "@/components/letter/wax-seal";

/**
 * Composição hiper-realista do herói: carta manuscrita pousada sobre o
 * envelope carimbado, com selo de lacre e sombra de pousio.
 */
export function HeroLetterScene({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[520px]", className)}>
      <div aria-hidden className="rest-shadow absolute -bottom-7 left-1/2 h-14 w-[86%] -translate-x-1/2" />

      <div className="animate-float-soft relative pt-40 sm:pt-52">
        <Envelope className="absolute left-1/2 top-0 z-0 w-[92%] -translate-x-1/2 rotate-[-2deg]" />

        <LetterSheet className="relative z-10 mx-auto w-[86%] rotate-[1.4deg] px-7 py-8 sm:px-9 sm:py-10">
          <p className="ink-hand mb-4 text-right text-[1.05rem] leading-none sm:text-lg">
            Lisboa, 9 de julho
          </p>
          <p className="ink-hand text-[1.3rem] leading-[1.55] sm:text-[1.45rem]">
            Querida avó,
            <br />
            Há palavras que os telefonemas nunca conseguem levar. Esta carta
            leva-as por mim: obrigada por cada domingo, por cada história, por
            me teres ensinado que o tempo dado a alguém é o maior presente.
          </p>
          <p className="ink-hand mt-5 text-[1.5rem] leading-tight sm:text-[1.65rem]">
            Com saudade de perto,
            <br />
            <span className="ml-10 inline-block rotate-[-2deg] text-[1.75rem] sm:text-[1.95rem]">
              Marta
            </span>
          </p>
        </LetterSheet>

        <WaxSeal className="absolute bottom-4 right-1 z-20 rotate-[8deg] sm:right-4" />
      </div>
    </div>
  );
}
