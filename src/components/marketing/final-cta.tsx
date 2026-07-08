import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { EnvelopeAnimation } from "@/components/decor/envelope-animation";
import { InkRevealText } from "@/components/decor/ink-reveal-text";
import { SoftGlow } from "@/components/decor/soft-glow";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-espresso py-24 text-cream sm:py-28">
      <SoftGlow tone="gold" className="left-1/2 top-0 h-96 w-96 -translate-x-1/2 opacity-40" />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <h2 className="max-w-2xl font-serif text-3xl leading-tight text-balance-pretty sm:text-4xl">
          <InkRevealText text="Há alguém que merece receber uma carta tua?" />
        </h2>

        <div className="w-full max-w-[220px] opacity-90">
          <EnvelopeAnimation sealOnView />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="soft">
            <Link href="/criar-carta">Começar agora</Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="border-cream/30 text-cream hover:bg-cream/10 hover:border-cream/50">
            <Link href="/lembretes">Criar lembrete</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
