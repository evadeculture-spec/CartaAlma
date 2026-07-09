import Link from "next/link";
import { ShieldCheck, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SoftGlow } from "@/components/decor/soft-glow";
import { InkRevealText } from "@/components/decor/ink-reveal-text";
import { HeroLetterScene } from "@/components/letter/hero-letter-scene";

const proofPoints = [
  { icon: Star, text: "4,9/5 em 1.230 avaliações" },
  { icon: Truck, text: "12.400+ cartas entregues" },
  { icon: ShieldCheck, text: "Aprovas sempre antes de enviar" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-window-light bg-cream">
      <SoftGlow tone="gold" className="-left-24 -top-24 h-96 w-96" />
      <SoftGlow tone="rose" className="-right-16 top-40 h-72 w-72" />

      <Container className="relative grid grid-cols-1 items-center gap-14 py-12 sm:py-14 lg:grid-cols-2 lg:gap-8 lg:py-16">
        <div className="flex flex-col items-start gap-5">
          <Badge variant="premium" className="animate-fade-in-up">
            Cartas físicas com ajuda de IA
          </Badge>

          <h1 className="font-serif text-4xl leading-[1.06] text-ink text-balance-pretty sm:text-5xl lg:text-[3.4rem]">
            <InkRevealText text="Diz o que ficou por dizer." />
          </h1>

          <p className="max-w-lg animate-fade-in-up text-base leading-relaxed text-brown [animation-delay:200ms] sm:text-lg">
            Contas-nos o que sentes, ajudamos-te a encontrar as palavras — e a
            carta chega em papel de algodão, com selo e lacre, às mãos de quem
            importa.
          </p>

          <div className="flex flex-col gap-3 animate-fade-in-up [animation-delay:350ms] sm:flex-row">
            <Button asChild size="lg">
              <Link href="/criar-carta">Escrever uma carta</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/lembretes">Criar lembrete gratuito</Link>
            </Button>
          </div>

          <ul className="mt-1 flex animate-fade-in-up flex-wrap items-center gap-x-5 gap-y-2 [animation-delay:500ms]">
            {proofPoints.map((point) => (
              <li key={point.text} className="flex items-center gap-1.5 text-[0.8rem] text-brown">
                <point.icon size={14} className="text-gold" aria-hidden />
                <span>{point.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative pb-8 pt-2">
          <HeroLetterScene />
        </div>
      </Container>
    </section>
  );
}
