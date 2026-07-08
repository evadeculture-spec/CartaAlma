import { NotebookPen, WandSparkles, MailCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Reveal } from "@/components/decor/reveal";

const acts = [
  {
    icon: NotebookPen,
    step: "01",
    title: "Conta-nos a história",
    description:
      "Escolhe a pessoa e responde a algumas perguntas guiadas e delicadas. Não precisas de saber por onde começar.",
  },
  {
    icon: WandSparkles,
    step: "02",
    title: "Encontramos as palavras",
    description:
      "Ajudamos a compor a carta a partir do que sentes. Podes editar tudo, quantas vezes precisares.",
  },
  {
    icon: MailCheck,
    step: "03",
    title: "Chega às mãos certas",
    description:
      "Depois de aprovares, preparamos a carta com cuidado e enviamo-la fisicamente para a morada certa.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative bg-cream py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-16">
        <SectionHeading
          eyebrow="Como funciona"
          title="Uma forma simples de transformar sentimento em presença."
          description="Escolhe a pessoa. Conta-nos o que sentes. Aprova a carta e nós tratamos do resto."
        />

        <div className="relative grid w-full grid-cols-1 gap-10 sm:grid-cols-3">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-almond to-transparent sm:block"
          />
          {acts.map((act, i) => (
            <Reveal key={act.step} delay={i * 0.12} className="relative flex flex-col items-center gap-4 text-center">
              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-almond bg-ivory shadow-paper">
                <act.icon size={30} className="text-brown" aria-hidden />
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-espresso text-xs font-medium text-cream">
                  {act.step}
                </span>
              </div>
              <h3 className="font-serif text-xl text-ink">{act.title}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-brown">{act.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
