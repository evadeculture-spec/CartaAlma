import { Cake, Gem, Flower2, TreePine, CalendarClock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Reveal } from "@/components/decor/reveal";

const upcoming = [
  { icon: Cake, label: "Aniversário da avó Maria", date: "18 de julho", days: "em 10 dias" },
  { icon: Gem, label: "Aniversário de casamento", date: "2 de agosto", days: "em 25 dias" },
  { icon: Flower2, label: "Dia da Mãe", date: "3 de maio de 2027", days: "guardado" },
  { icon: TreePine, label: "Natal em família", date: "25 de dezembro", days: "guardado" },
];

export function ReminderSection() {
  return (
    <section id="lembretes" className="bg-parchment/40 py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <SectionHeading
            align="left"
            eyebrow="Lembretes"
            title="Não voltes a deixar passar uma data importante."
          />
          <p className="max-w-md text-base leading-relaxed text-brown">
            Aniversários, Dia da Mãe, Dia do Pai, Natal ou uma data só tua. Cria
            lembretes gratuitos e recebe um aviso a tempo de escrever com calma —
            ou agenda já a carta para seguir na data certa.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {upcoming.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 0.08}
              className="flex items-center gap-4 rounded-2xl border border-almond/50 bg-cream p-4 shadow-soft"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-espresso">
                <item.icon size={20} aria-hidden />
              </span>
              <div className="flex flex-1 flex-col">
                <span className="font-serif text-base text-ink">{item.label}</span>
                <span className="text-xs text-brown">{item.date}</span>
              </div>
              <span className="flex items-center gap-1 rounded-full bg-ivory px-3 py-1 text-xs text-brown">
                <CalendarClock size={13} aria-hidden />
                {item.days}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
