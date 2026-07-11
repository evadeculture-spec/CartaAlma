import Link from "next/link";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SoftGlow } from "@/components/decor/soft-glow";
import { InkRevealText } from "@/components/decor/ink-reveal-text";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-window-light bg-cream">
      <SoftGlow tone="gold" className="-left-24 -top-24 h-96 w-96" />
      <SoftGlow tone="rose" className="-right-16 top-40 h-72 w-72" />

      <Container className="relative grid grid-cols-1 items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-8 lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <Badge variant="premium" className="animate-fade-in-up">
            Cartas físicas com ajuda de IA
          </Badge>

          <h1 className="font-serif text-4xl leading-[1.08] text-ink text-balance-pretty sm:text-5xl lg:text-6xl">
            <InkRevealText text="Diz o que ficou por dizer." />
          </h1>

          <p className="max-w-lg animate-fade-in-up text-lg leading-relaxed text-brown [animation-delay:200ms]">
            Carta Alma ajuda-te a escrever, preparar e enviar cartas físicas
            significativas para as pessoas mais importantes da tua vida.
          </p>

          <div className="flex flex-col gap-3 animate-fade-in-up [animation-delay:350ms] sm:flex-row">
            <Button asChild size="lg">
              <Link href="/criar-carta">Escrever uma carta</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/lembretes">Criar lembrete gratuito</Link>
            </Button>
          </div>

          <div className="flex animate-fade-in-up items-center gap-2 text-sm text-brown [animation-delay:500ms]">
            <ShieldCheck size={16} className="text-sage" aria-hidden />
            <span>Revês sempre antes de enviar.</span>
          </div>

          <p className="max-w-md animate-fade-in-up font-letter text-lg italic text-espresso/80 [animation-delay:650ms]">
            &ldquo;A carta continua tua. Nós só ajudamos a encontrar as
            palavras.&rdquo;
          </p>
        </div>

        <div className="flex h-[420px] w-full justify-center sm:h-[480px] lg:h-[620px]">
          <div className="relative aspect-[3/4] h-full overflow-hidden rounded-3xl border border-almond/60 shadow-paper">
            <Image
              src="/images/carta-alma-kit.jpg"
              alt="Kit Carta Alma: caixa preta aberta com papel de algodão, envelope preto, caneta de aparo e selo de cera dourado, à luz de velas"
              fill
              sizes="(min-width: 1024px) 465px, 80vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
