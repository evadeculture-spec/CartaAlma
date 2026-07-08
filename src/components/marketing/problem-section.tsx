import { MessageSquareLock, PhoneMissed, CalendarX, Lock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/marketing/section-heading";

const points = [
  { icon: MessageSquareLock, text: "Mensagens perdem-se numa conversa cheia de notificações." },
  { icon: PhoneMissed, text: "Chamadas importantes ficam sempre para depois." },
  { icon: CalendarX, text: "Datas passam sem que nos demos conta." },
  { icon: Lock, text: "As palavras mais importantes ficam presas, por medo ou pressa." },
];

export function ProblemSection() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="O problema"
          title="Vivemos rodeados de mensagens rápidas, mas as palavras importantes continuam a pedir tempo."
          className="max-w-3xl"
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div
              key={point.text}
              className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-surface-elevated p-6 shadow-soft"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-parchment text-brown">
                <point.icon size={20} aria-hidden />
              </span>
              <p className="text-sm leading-relaxed text-espresso">{point.text}</p>
            </div>
          ))}
        </div>

        <p className="max-w-xl text-center font-letter text-xl italic text-espresso/80">
          Relações importantes precisam de gestos que se sintam — não apenas de mais uma
          notificação.
        </p>
      </Container>
    </section>
  );
}
