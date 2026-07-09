import { cn } from "@/lib/utils";
import { PostageStamp } from "@/components/letter/postage-stamp";
import { Postmark } from "@/components/letter/postmark";

interface EnvelopeProps {
  className?: string;
  recipientName?: string;
  addressLines?: string[];
}

/** Frente de envelope hiper-realista: morada à mão, selo denteado e carimbo. */
export function Envelope({
  className,
  recipientName = "Sra. D. Maria Amália Ferreira",
  addressLines = ["Rua das Flores, 42, 2.º Esq.", "1200-192 Lisboa"],
}: EnvelopeProps) {
  return (
    <div className={cn("envelope-paper relative aspect-[10/6.5] rounded-[4px]", className)}>
      <span className="absolute left-[5%] top-[6%] z-[2] text-[0.55rem] leading-relaxed text-brown/75">
        Carta Alma
        <br />
        Apartado 1048 · Lisboa
      </span>

      <div className="absolute right-[4.5%] top-[7%] z-[2]">
        <PostageStamp />
      </div>
      <Postmark className="absolute right-[-3%] top-[9%] z-[3] w-[46%] rotate-[-8deg]" />

      <div className="ink-hand absolute left-[14%] top-[46%] z-[2] flex flex-col gap-0.5 text-[1.05rem] leading-snug sm:text-[1.15rem]">
        <span className="rotate-[-0.6deg]">{recipientName}</span>
        {addressLines.map((line, i) => (
          <span key={line} className={i % 2 === 0 ? "rotate-[0.4deg]" : "rotate-[-0.3deg]"}>
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}
