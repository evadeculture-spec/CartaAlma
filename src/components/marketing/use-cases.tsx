import {
  HandHeart,
  Users,
  HeartHandshake,
  Heart,
  Album,
  Clock,
  CalendarHeart,
  DoorOpen,
  Gem,
  Gift,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Reveal } from "@/components/decor/reveal";

const useCases = [
  { icon: HandHeart, text: "Para dizer obrigado aos pais." },
  { icon: Users, text: "Para recuperar uma amizade." },
  { icon: HeartHandshake, text: "Para pedir desculpa com dignidade." },
  { icon: Heart, text: "Para surpreender o parceiro." },
  { icon: Album, text: "Para guardar memórias com avós." },
  { icon: Clock, text: "Para enviar cartas no futuro." },
  { icon: CalendarHeart, text: "Para datas que não queres esquecer." },
  { icon: DoorOpen, text: "Para despedidas importantes." },
  { icon: Gem, text: "Para casamentos." },
  { icon: Gift, text: "Para empresas que querem surpreender clientes premium." },
];

export function UseCases() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading eyebrow="Para quem" title="Há sempre alguém que merece uma carta." />

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, i) => (
            <Reveal
              key={useCase.text}
              delay={(i % 6) * 0.06}
              className="flex items-center gap-4 rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-parchment text-brown">
                <useCase.icon size={18} aria-hidden />
              </span>
              <p className="text-sm leading-snug text-espresso">{useCase.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
