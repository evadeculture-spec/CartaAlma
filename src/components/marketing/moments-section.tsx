import { Cake, Gem, Flower2, CalendarClock, Archive, MailCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Reveal } from "@/components/decor/reveal";

const reminders = [
  { icon: Cake, label: "Aniversário da avó Maria", date: "18 jul", days: "em 9 dias", urgent: true },
  { icon: Gem, label: "Aniversário de casamento", date: "2 ago", days: "em 24 dias", urgent: false },
  { icon: Flower2, label: "Dia da Mãe", date: "mai 2027", days: "guardado", urgent: false },
];

const archived = [
  { label: "Para a mãe · Agradecimento", meta: "Entregue a 12 mai 2026", status: "Entregue" },
  { label: "Para o Tiago · Reconciliação", meta: "Entregue a 3 fev 2026", status: "Entregue" },
  { label: "Carta futura · Para mim", meta: "Sela até 1 jan 2030", status: "Selada" },
];

export function MomentsSection() {
  return (
    <section id="lembretes" className="bg-ivory py-12 sm:py-16">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <SectionHeading
            align="left"
            eyebrow="Lembretes e arquivo"
            title="Nenhuma data volta a passar em branco."
            description="Guarda datas importantes, recebe avisos a tempo de escrever com calma e revê tudo o que já enviaste no teu arquivo emocional — incluindo cartas seladas para abrir daqui a anos."
          />
          <ul className="flex flex-col gap-2 text-sm text-brown">
            <li className="flex items-center gap-2">
              <CalendarClock size={15} className="text-gold" aria-hidden />
              Lembretes gratuitos, por email, com antecedência
            </li>
            <li className="flex items-center gap-2">
              <MailCheck size={15} className="text-gold" aria-hidden />
              Agenda cartas para seguirem sozinhas na data certa
            </li>
            <li className="flex items-center gap-2">
              <Archive size={15} className="text-gold" aria-hidden />
              Arquivo pessoal com destinatários, datas e tons
            </li>
          </ul>
        </div>

        <Reveal className="rounded-2xl border border-almond/50 bg-cream p-5 shadow-paper">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-brown/70">
              Os teus momentos
            </span>
            <span className="rounded-full bg-sage/20 px-2.5 py-0.5 text-[0.65rem] text-espresso">
              3 lembretes ativos
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {reminders.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface-elevated p-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-espresso">
                  <item.icon size={16} aria-hidden />
                </span>
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate font-serif text-sm text-ink">{item.label}</span>
                  <span className="text-[0.7rem] text-brown">{item.date}</span>
                </div>
                <span
                  className={
                    item.urgent
                      ? "rounded-full bg-gold/20 px-2.5 py-0.5 text-[0.65rem] font-medium text-espresso"
                      : "rounded-full bg-ivory px-2.5 py-0.5 text-[0.65rem] text-brown"
                  }
                >
                  {item.days}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3 border-t border-border pt-3">
            <span className="text-[0.65rem] font-medium uppercase tracking-wider text-brown/60">
              Arquivo
            </span>
            <div className="mt-2 flex flex-col gap-1.5">
              {archived.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-3 text-xs">
                  <span className="truncate text-espresso">{item.label}</span>
                  <span className="shrink-0 text-[0.68rem] text-brown/80">{item.meta}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
