import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/marketing/section-heading";
import { FloatingNote } from "@/components/decor/floating-note";
import { SoftGlow } from "@/components/decor/soft-glow";

const archivedLetters = [
  { label: "Para a mãe", date: "Maio 2025", tone: "Agradecimento" },
  { label: "Para o Tiago", date: "Fevereiro 2025", tone: "Reconciliação" },
  { label: "Para os avós", date: "Dezembro 2024", tone: "Natal" },
  { label: "Carta futura", date: "Abre em 2030", tone: "Memória" },
];

export function EmotionalArchiveSection() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <SoftGlow tone="sage" className="left-1/3 top-0 h-72 w-72" />
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="relative order-2 grid grid-cols-2 gap-5 lg:order-1">
          {archivedLetters.map((letter, i) => (
            <FloatingNote
              key={letter.label}
              delay={i * 0.6}
              rotate={i % 2 === 0 ? -3 : 3}
              className="flex flex-col gap-2 p-5"
            >
              <span className="font-serif text-base text-ink">{letter.label}</span>
              <span className="text-xs text-brown">{letter.date}</span>
              <span className="w-fit rounded-full bg-parchment px-2.5 py-0.5 text-[0.65rem] uppercase tracking-wide text-brown">
                {letter.tone}
              </span>
            </FloatingNote>
          ))}
        </div>

        <div className="order-1 flex flex-col gap-5 lg:order-2">
          <SectionHeading align="left" eyebrow="Arquivo emocional" title="Guarda o que importa." />
          <p className="max-w-md text-base leading-relaxed text-brown">
            Cada carta enviada fica guardada no teu arquivo pessoal: destinatários,
            datas, tons e memórias. Um lugar sereno para reveres tudo o que já
            disseste — e o que ainda queres dizer.
          </p>
        </div>
      </Container>
    </section>
  );
}
