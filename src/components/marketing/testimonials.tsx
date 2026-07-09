import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Reveal } from "@/components/decor/reveal";

const testimonials = [
  {
    quote:
      "A minha mãe ligou-me a chorar. Disse que era a coisa mais bonita que tinha recebido em anos. E as palavras eram mesmo minhas — só me ajudaram a pô-las em ordem.",
    name: "Mariana S.",
    detail: "Porto · Carta Premium para a mãe",
  },
  {
    quote:
      "Não falava com o meu irmão há dois anos. Escrevi a carta num domingo à noite, na quarta ele telefonou-me. Não há app que faça isto.",
    name: "João P.",
    detail: "Lisboa · Carta Essencial",
  },
  {
    quote:
      "O papel, o lacre, a caligrafia... a minha avó guardou a carta na caixa onde tem as do meu avô. Acho que isso diz tudo.",
    name: "Beatriz M.",
    detail: "Braga · Carta Manuscrita para a avó",
  },
];

export function Testimonials() {
  return (
    <section className="bg-parchment/40 py-12 sm:py-16">
      <Container className="flex flex-col items-center gap-8">
        <SectionHeading
          eyebrow="Quem já enviou"
          title="Cartas que mudaram conversas."
        />

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.08}
              className="flex h-full flex-col gap-3 rounded-2xl border border-almond/50 bg-cream p-5 shadow-soft"
            >
              <div className="flex items-center gap-0.5" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={13} className="fill-gold text-gold" aria-hidden />
                ))}
              </div>
              <blockquote className="flex-1 font-letter text-[1.05rem] italic leading-relaxed text-espresso">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-2.5 border-t border-border pt-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-parchment font-serif text-xs text-espresso">
                  {t.name.charAt(0)}
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-ink">{t.name}</span>
                  <span className="text-[0.68rem] text-brown">{t.detail}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
